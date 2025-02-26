"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-8 inset-x-0 max-w-2xl mx-auto z-50 border-4 border-blue-600 rounded-full", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex items-center flex-col space-y-4 text-sm">
                        <HoveredLink href="/allcourses">All Courses</HoveredLink>
                        <HoveredLink href="/basicmusictheory">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/advancedcomposition">Advanced Composition</HoveredLink>
                        <HoveredLink href="/songwriting">SongWriting</HoveredLink>
                        <HoveredLink href="/musicproduction">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar;