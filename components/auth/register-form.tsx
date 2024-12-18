"use client";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormSuccess } from "../form-success"
import { FormError } from "../form-error";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";
import { Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage 
} from "../ui/form"

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPedding, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password:"",
            name:"",
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        
        startTransition(() => {
            register(values)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        });
    }

    return (
        <CardWrapper
        headerLabel="Create an account"
        backButtonLabel="Already have an account?"
        backButtonHref="/auth/login"
        showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                    <FormField 
                        control={form.control}
                        name="name"
                        render={({ field }) =>(
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    placeholder="Tomáš Tomanec"/>
                                </FormControl>
                                <div className="text-red-600">
                                <FormMessage/>
                                </div>
                            </FormItem>
                        )}/>
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
                    className="w-full bg-black">
                        <a className="font-extrabold text-lg bg-gradient-to-t to-sky-200 from-sky-500 text-transparent bg-clip-text">
                        Create an account
                        </a>
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}