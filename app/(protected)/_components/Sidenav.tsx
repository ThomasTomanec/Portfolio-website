'use client'

import React, {useState, useRef} from "react";
import Link from "next/link";
import {UserButton} from "./user-button"
import {LuHome} from "react-icons/lu";
import {HiMiniPencilSquare} from "react-icons/hi2";
import {LuSettings} from "react-icons/lu";
import {IoAnalyticsOutline} from "react-icons/io5";
import {LogoutButton} from "@/components/auth/logout-button";


// Define the Sidenav component
export default function Sidenav({sidebarOpen, setSidebarOpen}: any) {
    // Define state for sidebar expansion
    const [sidebarExpanded] = useState(false);

    // Create a reference to the sidebar element
    const sidebar = useRef(null);

    return (
        <>
            <div id="sidebar" ref={sidebar}
                className={`relative r-[200px] flex flex-col justify-between z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-72  z-1 w-20 bg-[#0C1119] text-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 p-4 transition-all duration-200`}>
                <div className="pr-4 flex flex-col justify-between h-full">

                    {/* Sidebar header */}
                    <div>
                        <div className="flex justify-between lg:pr-3 lg:px-2 ">
                            {/* Sidebar Logo */}
                            <h1 className="font-semibold text-xl hidden lg:block">DashBoard</h1>
                        </div>

                        {/* Links */}
                        <div className="space-y-4 pt-4">
                            <p
                                className={`${sidebarExpanded ? "lg:hidden" : "block"
                                } px-2 text-xs font-base text-gray-400 uppercase`}
                            >
                                <p className="hidden lg:block">Actions</p>
                            </p>
                            <ul className="flex flex-col gap-[20px] lg:block space-y-2">
                                <li>
                                    <Link
                                        onClick={() => setSidebarOpen(false)}
                                        href="/dashboard"
                                        className="flex items-center lg:p-2 text-base text-white rounded-lg hover:bg-sky-500 hover:bg-opacity-10  font-light hover:font-semibold"
                                    >
                <span
                    className="flex items-center text-base text-white rounded-lg hover:bg-sky-500 hover:bg-opacity-10  hover:font-semibold">
                <LuHome className="w-[24px] h-[24px]"/>
                  <span
                      className={`${sidebarExpanded
                          ? "lg:hidden opacity-0 ml-0"
                          : "opacity-100 ml-3 block"
                      }ml-3 whitespace-nowrap `}
                  >
                    <p className="hidden lg:block">Home</p>
                  </span>
                </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        onClick={() => setSidebarOpen(false)}
                                        href="/dashboard/blog"
                                        className="flex items-center lg:p-2 text-base text-white rounded-lg hover:bg-sky-500 hover:bg-opacity-10  font-light hover:font-semibold"
                                    >
                <span
                    className="flex items-center text-base text-white rounded-lg hover:bg-sky-500 hover:bg-opacity-10  hover:font-semibold">
                <HiMiniPencilSquare className="w-[24px] h-[24px]"/>


                  <span
                      className={`${sidebarExpanded
                          ? "lg:hidden opacity-0 ml-0"
                          : "opacity-100 ml-3 block"
                      }ml-3 whitespace-nowrap `}
                  >
                    <p className="hidden lg:block">Write a Blog </p>
                  </span>
                </span>
                                    </Link>
                                </li>


                                <li>
                                    <Link
                                        onClick={() => setSidebarOpen(false)}
                                        href="/dashboard/settings"
                                        className="flex items-center lg:p-2 text-base text-white rounded-lg hover:bg-sky-500 hover:bg-opacity-10  font-light hover:font-semibold"
                                    >
                <span
                    className="flex items-center text-base text-white rounded-lg hover:bg-sky-500 hover:bg-opacity-10  hover:font-semibold">
                <LuSettings className="w-[24px] h-[24px]"/>


                  <span
                      className={`${sidebarExpanded
                          ? "lg:hidden opacity-0 ml-0"
                          : "opacity-100 ml-3 block"
                      }ml-3 whitespace-nowrap `}
                  >
                      <p className="hidden lg:block">Settings</p>
                  </span>
                </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center lg:items-start">
                        <div className="lg:border lg:border-sky-800 lg:bg-sky-950 lg:bg-opacity-30 lg:p-2 lg:rounded-lg">
                            <div>
                                <UserButton/>
                            </div>
                        </div>
                        <LogoutButton/>
                    </div>
                </div>
            </div>
        </>
    );
}
