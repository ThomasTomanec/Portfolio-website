// Navbar.jsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { LoginButton } from "@/components/auth/login-button";

const navLinks = [
    {
        title: "Home",
        path: "/",
        key: "Home",
    },
    {
        title: "Blog",
        path: "/page/blog",
        key: "Blog",
    },
    {
        title: "Login",
        path: "/auth/login",
        key: "login", 
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="py-5">
            <div className="flex container flex-wrap items-center justify-between mx-auto">
                <Link href={"/"} className="text-3xl text-white font-semibold">Tomanec</Link>
                <div className="mobile-menu block md:hidden m">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="px-3 py-2 text-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className=" px-3 py-2 text-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}  />
                            </li>
                        ))}
                        <li> {/* Add LoginButton here */}
                        </li>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
