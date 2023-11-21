import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NotifyItem } from "./NotifyItem"
import { Notifications } from "@prisma/client"

// function sleep(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

export async function NotifyList() {
    const session = await getServerSession(authOptions)
    if (!session) {
        return null
    }
    const notifyItems = await prisma.$queryRaw`SELECT "public"."Notifications"."id", "public"."Notifications"."userId", "public"."Notifications"."title", "public"."Notifications"."body", "public"."Notifications"."pedidoId", "public"."Notifications"."createdAt", "public"."Notifications"."updatedAt" FROM "public"."Notifications" LEFT JOIN "public"."User" AS "j1" ON ("j1"."id") = ("public"."Notifications"."userId") WHERE ("j1"."email" = ${session.user!.email} AND ("j1"."id" IS NOT NULL))` as Notifications[]
    return (
        <>
                {notifyItems.map((item, index) => (
                    <NotifyItem  key={index} notify={{
                        title: item.title,
                        description: item.body,
                        pedidoId: item.pedidoId || undefined
                    }} />
                ))}
        </>
    )
}