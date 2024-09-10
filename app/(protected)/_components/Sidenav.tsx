'use client'

// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "./user-button"
import { MdArrowBack } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { IoAnalyticsOutline } from "react-icons/io5";







// Define the Sidenav component
export default function Sidenav({ sidebarOpen, setSidebarOpen }: any) {
  // Define state for sidebar expansion
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Create a reference to the sidebar element
  const sidebar = useRef(null);

  return (
    <>
      {/* Sidebar backdrop (visible on mobile only) */}
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`fixed flex flex-col justify-between z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar sm:w-64  w-72 bg-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 p-4 transition-all duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-72"
          }`}
      >
        {/* Sidebar header */}
        <div>
        <div className="flex justify-between pr-3 sm:px-2 ">
          {/* Sidebar Logo */}
          <h1 className="font-semibold text-xl ">DashBoard</h1>
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
            <MdArrowBack className="h-7 w-7 text-black" />
          </button>

        </div>

        {/* Links */}
        <div className="space-y-4 pt-4">
          <p
            className={`${sidebarExpanded ? "lg:hidden" : "block"
              } px-2 text-xs font-base text-gray-400 uppercase`}
          >
            Actions
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/dashboard"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                <LuHome className="w-[24px] h-[24px]" />
                  <span
                    className={`${sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                      }ml-3 whitespace-nowrap `}
                  >
                    Home
                  </span>
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/dashboard/blog"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                <HiMiniPencilSquare className="w-[24px] h-[24px]" />


                  <span
                    className={`${sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                      }ml-3 whitespace-nowrap `}
                  >
                    Write a Blog
                  </span>
                </span>
              </Link>
            </li>


            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/dashboard/Analytics"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                <IoAnalyticsOutline className="w-[24px] h-[24px]" />


                  <span
                    className={`${sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                      }ml-3 whitespace-nowrap `}
                  >
                    Analytics
                  </span>
                </span>
              </Link>
            </li>


            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/dashboard/settings"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                <LuSettings className="w-[24px] h-[24px]" />


                  <span
                    className={`${sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                      }ml-3 whitespace-nowrap `}
                  >
                    Settings
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </>
  );
}
