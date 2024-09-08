// Navbar.jsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { logout } from "@/actions/logout"
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { UserButton } from "@/components/auth/user-button"


export default function Navbar({ sidebarOpen, setSidebarOpen }: any) {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  };
  return (
    <nav className="bg-gray-100 bg-opacity-90 lg:p-3 p-2">
      <div className="flex items-center justify-between lg:flex-row-reverse">
        <button
          className="text-slate-500 hover:text-slate-600 lg:hidden"
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <span className="sr-only">Open sidebar</span>
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="5" width="16" height="2" />
            <rect x="4" y="11" width="16" height="2" />
            <rect x="4" y="17" width="16" height="2" />
          </svg>
        </button>
        <div className="mobile-menu block md:hidden m">
        </div>
        <div className="menu md:block md:w-auto text-white" id="navbar">
        <UserButton />
        </div>
      </div>
    </nav>
  );
}
