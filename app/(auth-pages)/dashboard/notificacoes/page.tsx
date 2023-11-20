import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { Header } from "@/components/Header";
import { LogoutButton } from "@/components/LogoutButton";
import { NotifyItem } from "@/components/NotifyItem";
import { prisma } from "@/lib/prisma";
import { ArrowLeftCircleIcon } from "lucide-react";
import { getServerSession } from "next-auth";

const notifyItems = [
    {
        title: "Novo pedido",
        description: "Foi adicionado um novo pedido de marmita no seu perfil, clique aqui para acessar o pedido com o QR CODE",
        pedidoId: "123321312"
    },
    {
        title: "Novo pedido",
        description: "Foi adicionado um novo pedido de marmita no seu perfil, clique aqui para acessar o pedido com o QR CODE",
    },
    {
        title: "Novo pedido",
        description: "Foi adicionado um novo pedido de marmita no seu perfil, clique aqui para acessar o pedido com o QR CODE",
    }
]

export default async function NotificationPage() {
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
    return (
        <>
            <Header>
                <a href="/dashboard">
                    <ArrowLeftCircleIcon />
                </a>
                <h1 className="text-2xl font-bold mx-auto">Notificações</h1>
                <LogoutButton />
            </Header>
            <main className="flex flex-col gap-2 items-center justify-center">
                <div className="flex flex-col gap-4 mt-4 w-full">
                    {notifyItems.map((item, index) => (
                        <NotifyItem  key={index} notify={{
                            title: item.title,
                            description: item.body,
                            pedidoId: item.pedidoId || undefined
                        }} />
                    ))}
                </div>
            </main>
            {/* <footer className="mt-auto h-full">
                <div className="flex flex-row justify-around">
                    {Array.from({length: 5}).map((_, index) => (
                        <DayButton key={index} isActive={index === 0} />
                    ))}

                </div>
            </footer> */}
        </>
    )
}