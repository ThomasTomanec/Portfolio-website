"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormSuccess } from "../form-success"
import { FormError } from "../form-error";

import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage 
} from "../ui/form"

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider!"
    : "";

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPedding, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password:"",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        
        startTransition(() => {
            login(values)
            .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            })
        });
    }

    return (
        <CardWrapper
        headerLabel="Log In"
        backButtonLabel="Dont't have an account?"
        backButtonHref="/auth/register"
        showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) =>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    placeholder="tomasttomanec@example.cz"
                                    type="email"/>
                                </FormControl>
                                <div className="text-red-600">
                                <FormMessage/>
                                </div>
                            </FormItem>
                        )}/>
                        <FormField 
                        control={form.control}
                        name="password"
                        render={({ field }) =>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    placeholder="********"
                                    type="password"/>
                                </FormControl>
                                <Button
                                size="sm"
                                variant="link"
                                asChild
                                className="px-0 font-normal">
                                    <Link href="/auth/reset">
                                        Forgot password?
                                    </Link>
                                </Button>
                                <div className="text-red-600">
                                <FormMessage/>
                                </div>
                            </FormItem>
                        )}/>
                    </div>
                    <FormError message={error || urlError}/>
                    <FormSuccess message={success}/>
                    <Button
                    disabled={isPedding}
                    type="submit"
                    className="w-full bg-black  ">
                        <a className="font-extrabold  text-xl bg-gradient-to-t to-sky-200 from-sky-500 text-transparent bg-clip-text">
                            Login
                        </a>
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}