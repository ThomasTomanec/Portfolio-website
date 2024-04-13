// Navbar.jsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { LoginButton } from "@/components/auth/login-button"; // Import LoginButton

const navLinks = [
    {
        title: "Home",
        path: "#home",
        key: "home", // Přidáme key pro první položku
    },
    {
        title: "Contact",
        path: "#contact",
        key: "contact", // Přidáme key pro druhou položku
    },
    {
        title: "Login", // Přidáme položku pro přihlášení
        path: "/auth/login", // Předpokládáme cestu pro přihlášení
        key: "login", // Přidáme key pro třetí položku
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="bg-stone-950 bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <Link href={"/"} className="text-3xl text-white font-semibold">Tomanec</Link>
                <div className="mobile-menu block md:hidden m">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className=" px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
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
