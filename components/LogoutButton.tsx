"use client"

import { ArrowLeftSquareIcon, DoorClosedIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export function LogoutButton() {
    return (
        <a className="text-red-400 text-sm cursor-pointer" onClick={() => signOut()}><ArrowLeftSquareIcon /></a>
    )
}