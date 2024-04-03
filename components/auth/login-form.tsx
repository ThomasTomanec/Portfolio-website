"use client";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
                setError(data.error);
                setSuccess(data.success);
            })
        });
    }

    return (
        <CardWrapper
        headerLabel="Welcome back"
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
                                    placeholder="john.doe@example.com"
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
                                <div className="text-red-600">
                                <FormMessage/>
                                </div>
                            </FormItem>
                        )}/>
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                    disabled={isPedding}
                    type="submit"
                    className="w-full bg-black text-white">
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}