"use client"

import { signOut } from "next-auth/react";

export function LogoutButton() {
    return (
        <a className="text-red-400 text-sm cursor-pointer" onClick={() => signOut()}>Sair da conta</a>
    )
}