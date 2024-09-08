"use client";
import { logout } from "@/actions/logout";

interface LogoutButtonProps {
    children?: React.ReactNode;
};

export const LogoutButton = ({
    children
}: LogoutButtonProps) => {
    const onClick = () => {
       logout(); 
    }
    return (
        <span onClick={onClick} className="cursor-pointer">
            <button className="p-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2 text-center rounded-2xl">
            <p className="text-white">Logout</p>
            </button>
        </span>
    );
};