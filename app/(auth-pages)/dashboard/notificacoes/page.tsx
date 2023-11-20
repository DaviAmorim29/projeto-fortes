import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { Header } from "@/components/Header";
import { LogoutButton } from "@/components/LogoutButton";
import { NotifyItem } from "@/components/NotifyItem";
import { NotifyList } from "@/components/NotifyList";
import { prisma } from "@/lib/prisma";
import { ArrowLeftCircleIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

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
                    <Suspense fallback={
                        Array.from({length: 5}).map((_, index) => (
                            <div key={index} className="bg-gray-200 rounded animate-pulse w-full h-16"></div>
                        ))
                    }>
                        <NotifyList />
                    </Suspense>
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