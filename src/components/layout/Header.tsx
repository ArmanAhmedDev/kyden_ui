"use client"

import Link from "next/link"
import Search from "../ui/Search"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
    return (
        <>

         <header className="bg-background dark:bg-foreground text-foreground dark:text-background">

            {/* Navigation Links */}
            <nav>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/components'}>Components</Link>
                    </li>
                    <li>
                        <Link href={'/docs'}>Docs</Link>
                    </li>
                </ul>
            </nav>
         </header>
        </>
    )
}