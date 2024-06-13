"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Eye, User } from "lucide-react";
import { usePathname } from "next/navigation";
export default function Header() {
    const pathname = usePathname();

    return (
        <div className="px-5 pt-3 flex items-center justify-between border-b-[1px]">
            <div className="flex items-center gap-2">
                <p>My workspace </p>
                <p>/</p>
                <p>My new form</p>
            </div>
            <ul className="flex">
                <li className="">
                    <Link href="/" className={`block px-5 py-2${pathname === "/" ? " border-b-[3px] border-gray-800 pb-3" : ""} `}>
                        Create
                    </Link>
                </li>
                <li>
                    <Link href="/connect" className={`block px-5 py-2${pathname === "/connect" ? " border-b-[3px] border-gray-800 pb-3" : ""} `}>
                        Connect
                    </Link>
                </li>
                <li>
                    <Link href="/share" className={`block px-5 py-2${pathname === "/share" ? " border-b-[3px] border-gray-800 pb-3" : ""} `}>
                        Share
                    </Link>
                </li>
                <li>
                    <Link href="/result" className={`block px-5 py-2${pathname === "/result" ? " border-b-[3px] border-gray-800 pb-3" : ""} `}>
                        Result
                    </Link>
                </li>
            </ul>
            <div className="flex items-center gap-3">
                <div className="w-[35px] h-[35px] border-[1px] rounded-lg flex items-center justify-center">
                    <Eye />
                </div>
                <Button>
                    <p>Publish</p>
                </Button>
                <div className="w-[35px] h-[35px] border-[1px] rounded-full flex items-center justify-center bg-gray-100">
                    <User />
                </div>
            </div>
        </div>
    );
}
