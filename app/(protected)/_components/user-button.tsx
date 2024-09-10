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
                <div className="text-left pl-3 pr-6">
                    <p className="text-sm text-black">{user?.name}</p>
                    <p className="text-xs lowercase text-black">{user?.role}</p>
                </div>
            </div>
        </div>
    );
};