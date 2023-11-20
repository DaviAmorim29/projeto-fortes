import Image from "next/image";
import { SubmitButton } from "./SubmitButton";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { redirect } from "next/navigation";

async function getItemData(id: string) {
    const item = await prisma.lunch.findUnique({
        where: {
            id
        }
    })
    return item
}

export async function ItemDetails({itemId}: { itemId: string}) {
    const session = await getServerSession(authOptions)
    if (!session) return null
    if (!session.user) return null
    const item = await getItemData(itemId)
    if (!item) return redirect("/dashboard")
    const getUserById = await prisma.user.findUnique({
        where: {
            email: session.user.email!
        }
    })
    if (!getUserById) return null
    async function createOrder() {
        "use server"
        const order = await prisma.order.create({
            data: {
                items: {
                    create: {
                        lunchId: itemId
                    }
                },
                qrCode: "123",
                userId: getUserById!.id,
                used: false
            }
        })
        await prisma.notifications.create({
            data: {
                title: "Novo pedido",
                body: `Novo pedido de ${item!.name}`,
                userId: getUserById!.id,
                pedidoId: order.id
            }
        })
        redirect(`/dashboard/pedido/${order.id}`)
    }
    return (
        <>
            <div className="relative h-[300px] overflow-hidden bg-gray-100 rounded">
                <Image  className="rounded-lg" objectFit="cover" fill alt="Foto da comida" src={item.image!} />
            </div>
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <span className="text-md font-regular">{item.description}</span>
            <form action={createOrder}>
                <SubmitButton loadingContent={"Realizando pedido..."} className="bg-[#A22B2B] text-white hover:bg-[#E93A3A]">Realizar pedido</SubmitButton>
            </form>
        </>
    )
}