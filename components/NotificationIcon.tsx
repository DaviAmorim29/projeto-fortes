import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"
import { prisma } from "@/lib/prisma"
import { BellIcon } from "lucide-react"
import { getServerSession } from "next-auth"

export async function NotificationIcon() {
    const session = await getServerSession(authOptions)
    if (!session) return null
    const notifications = await prisma.notifications.findFirst({
        where: {
            user: {
                email: session.user!.email
            }
        }
    })
    return (
        <a className="cursor-pointer" href="/dashboard/notificacoes">
            {notifications ? <BellIcon className="text-red-500" />  :<BellIcon />}
        </a>
    )
}