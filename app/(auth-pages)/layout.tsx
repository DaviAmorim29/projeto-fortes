import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/auth-options";

export default async function AuthLayout({children}: {children: React.ReactNode}) {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect("/")
    }
    return <>{children}</>
}