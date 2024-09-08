"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "../ui/card";
import { Header } from "./header"
import { Social } from "./social"
import { BackButton } from "./back-button"

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className="w-[600px] shadow-md bg-white text-black ">
             <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <div className="flex">
            <div className="w-[400px]">
            <CardContent>
                { children }
            </CardContent>
            </div>
            <div className="flex ">
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            </div>
            </div>
            <CardFooter>
                <BackButton
                label={backButtonLabel}
                href={backButtonHref}/>
            </CardFooter>
          
        </Card >
    )
}