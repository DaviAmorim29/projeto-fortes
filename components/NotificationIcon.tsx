import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"
import { prisma } from "@/lib/prisma"
import { Notifications } from "@prisma/client"
import { BellIcon } from "lucide-react"
import { getServerSession } from "next-auth"
import Link from "next/link"

export async function NotificationIcon() {
    const session = await getServerSession(authOptions)
    if (!session) return null
    const notifications = await prisma.$queryRaw`SELECT "public"."Notifications"."id", "public"."Notifications"."userId", "public"."Notifications"."title", "public"."Notifications"."body", "public"."Notifications"."pedidoId", "public"."Notifications"."createdAt", "public"."Notifications"."updatedAt" FROM "public"."Notifications" LEFT JOIN "public"."User" AS "j1" ON ("j1"."id") = ("public"."Notifications"."userId") WHERE ("j1"."email" = ${session.user!.email} AND ("j1"."id" IS NOT NULL))` as Notifications[]
    return (
        <Link className="cursor-pointer" href="/dashboard/notificacoes">
            {notifications ? <BellIcon className="text-red-500" />  :<BellIcon />}
        </Link>
    )
}