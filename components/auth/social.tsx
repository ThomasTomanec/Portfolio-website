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
        <div className="btn-social-div flex flex-col w-full gap-[5px]">
            <Button 
            className="btn-social-icon-google w-full h-12 bg-white"
            size="lg" 
            variant="outline"
            onClick={() => onClick("google")}>
                <FcGoogle className="h-8 w-16 "/>
                <p>Login with Google</p>
            </Button>
            <Button 
             className="btn-social-icon-github w-full h-12 bg-white text-black"
            size="lg" 
            variant="outline"
            onClick={() => onClick("github")}>
                <FaGithub className="h-8 w-16 "/>
                <p>Login with GitHub</p>
            </Button>
        </div>
    )
}