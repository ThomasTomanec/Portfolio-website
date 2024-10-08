"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


export const Social = () => {
    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }



    return (
        <div className="flex-row items-center w-full gap-x-2 pt-12">
            <Button 
            className="w-full h-20 m-2"
            size="lg" 
            variant="outline"
            onClick={() => onClick("google")}>
                <FcGoogle className="h-10 w-20 "/>
            </Button>
            <Button 
            className="w-full h-20 m-2"
            size="lg" 
            variant="outline"
            onClick={() => onClick("github")}>
                <FaGithub className="h-10 w-20 "/>
            </Button>
        </div>
    )
}