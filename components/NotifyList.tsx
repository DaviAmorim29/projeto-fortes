import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NotifyItem } from "./NotifyItem"

// function sleep(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

export async function NotifyList() {
    const session = await getServerSession(authOptions)
    if (!session) {
        return null
    }
    const notifyItems = await prisma.notifications.findMany({
        where: {
            user: {
                email: session.user?.email
            }
        }
    })
    // await sleep(3000)
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