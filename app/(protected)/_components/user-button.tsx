"use client"

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar"

import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";

export const UserButton = () => {
    const user = useCurrentUser();

    return (
        <div className="flex items-center ">
            <div className="flex items-center">
                <Avatar>
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback className="bg-sky-500">
                        <FaUser className="text-white" />
                    </AvatarFallback>
                </Avatar>
                <div className="text-left px-3 hidden lg:block">
                    <p className="text-xs text-white">{user?.email}</p>
                    <p className="text-xs lowercase text-white">{user?.role}</p>
                </div>
            </div>
        </div>
    );
};