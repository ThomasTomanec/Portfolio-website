'use client'

// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { TiArrowLeftThick } from "react-icons/ti";



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
        className={`fixed flex flex-col z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar sm:w-64  w-72 bg-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 p-4 transition-all duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between pr-3 sm:px-2">
          {/* Sidebar Logo */}
         
            <span
              className={`${
                sidebarExpanded ? "lg:hidden" : "block"
              }  welcome-step text-2xl font-medium tracking-tighter text-black focus:outline-none focus:ring whitespace-nowrap cursor-pointer`}
            >
              <Link href="./">
              <Image
                className="mt-2 mb-8 h-100 w-32"
                src="/openai.png"
                height={32}
                width={300}
                alt="logo"
              />
              </Link>
            </span>
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
              <TiArrowLeftThick className="h-7 w-7 text-black" />
            </button>
          
          
        </div>

        {/* Links */}
        <div className="space-y-4">
          <p
            className={`${
              sidebarExpanded ? "lg:hidden" : "block"
            } px-2 text-xs font-base text-gray-400 uppercase`}
          >
            Actions
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>

                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 whitespace-nowrap `}
                  >
                    Write a Blog
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
