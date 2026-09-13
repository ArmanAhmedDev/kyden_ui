"use client"

import Link from "next/link"
import connectToDb from "../../../../lib/db"
import { useState } from "react"


export default function ComponentsPage(){

  

    return(
        <>
        <div className="">

            
                <aside className="">
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/'}></Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
            
            {/* Sidebar */}

            {/* Sidebar Mobile */}
            {/* Code Section */}
        </div>
        </>
    )
}