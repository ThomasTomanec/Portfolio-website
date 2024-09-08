"use client";
import { useSession, signOut } from "next-auth/react";
import { logout } from "@/actions/logout"

const SettingsPage = () => {
    const session = useSession;
    const onClick = () => {
        logout();
    };


    return (
        <div>
            {JSON.stringify(session)}
            <form>
                <button onClick={onClick} type="submit">
                    Sign out
                </button>
            </form>
        </div>
    );
}

export default SettingsPage;