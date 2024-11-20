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
        <Card className="card-content w-[400px] shadow-[rgba(135,_206,_235,_0.4)_0px_30px_90px] bg-neutral-200 text-black  ">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <div className="flex flex-col">
                <CardContent>
                    {children}
                </CardContent>

                <div>
                    {showSocial && (
                        <CardFooter className="card-footer-social flex">
                            <Social />
                        </CardFooter>
                    )}
                </div>
            </div>
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref} />
            </CardFooter>

        </Card >
    )
}