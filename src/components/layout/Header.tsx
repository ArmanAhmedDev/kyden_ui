"use client"

import Link from "next/link"
import Search from "../ui/Search"
import ThemeToggle from "./ThemeToggle"
import { useState } from "react"

export default function Header() {

    const [toggleMenu, settoggleMenu] = useState(false)

    return (
        <>

            <header className="bg-background dark:bg-foreground text-foreground dark:text-background flex items-center justify-between px-4 py-6 md:p-6">

                {/* Navigation Links */}
                <nav className="hidden md:block">
                    <ul className="flex items-center  gap-10 text-md  ">
                        <li>
                            <Link
                                href="/"
                                className="block rounded-md p-2 transition-colors duration-200 hover:bg-[#efeded] dark:hover:bg-[#2f2e2e]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/components"
                                className="block rounded-md p-2 transition-colors duration-200 hover:bg-[#efeded] dark:hover:bg-[#2f2e2e]"
                            >
                                Components
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/docs"
                                className="block rounded-md p-2 transition-colors duration-200 hover:bg-[#efeded] dark:hover:bg-[#2f2e2e]"
                            >
                                Docs
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger Menu */}
                {/* Hamburger Menu */}
                <button
                    type="button"
                    onClick={() => settoggleMenu((prev) => !prev)}
                    className="block md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                    >
                        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
                    </svg>
                </button>

                {/* Side Menu */}
                {toggleMenu && (

                    <>
                        <button className="dark:text-white text-black z-60 absolute top-5 left-5" onClick={() => settoggleMenu((prev) => !prev)}>
                            close
                        </button>

                        <aside className="fixed left-0 top-0 z-50 h-screen w-70 bg-background dark:bg-foreground">
                            <ul className="text-2xl pt-20 py-3 pl-6">
                                <li className="pb-3">
                                    <Link onClick={() => settoggleMenu((prev) => !prev)} href={'/'}>
                                        Home
                                    </Link>
                                </li>
                                <li className="pb-3">
                                    <Link onClick={() => settoggleMenu((prev) => !prev)} href={'/components'}>
                                        Components
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => settoggleMenu((prev) => !prev)} href={'/docs'}>
                                        Docs
                                    </Link>
                                </li>
                            </ul>
                        </aside>
                    </>
                )}

                {/* Right Side Navbar */}
                <div className="flex items-center gap-2 sm:gap-6 md:gap-5">

                    {/* Search */}
                    <Search />

                    {/* Github Button */}

                    <Link href={'https://github.com/ArmanAhmedDev'} target="_blank"
                        rel="noopener noreferrer">
                        <button className="rounded-lg p-2 text-black transition-colors dark:text-white cursor-pointer  duration-200 hover:bg-[#efeded] dark:hover:bg-[#2f2e2e]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 256 256"
                                fill="currentColor"
                            >
                                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,0,200,104Z" />
                            </svg>                    </button>

                    </Link>

                    {/* Theme Changing button */}

                    <ThemeToggle />

                </div>

            </header>
        </>
    )
}