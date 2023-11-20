import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { CardapioItem, ItemProps } from "@/components/CardapioItem";
import { CardapioList } from "@/components/CardapioList";
import { DayButton } from "@/components/DayButton";
import { Header } from "@/components/Header";
import { LogoutButton } from "@/components/LogoutButton";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/prisma";
import { BellIcon, BellPlusIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

// const listItems: ItemProps[] = [
//     {
//         id: "1",
//         name: "Arroz com feijão",
//         description: "Arroz com feijão",
//         date: new Date(),
//         image: "https://static.tuasaude.com/media/article/ye/su/arroz-e-feijao_20656_l.jpg"
//     },
//     {
//         id: "1",
//         name: "Arroz com feijão",
//         description: "Arroz com feijão",
//         date: new Date(),
//         image: "https://static.tuasaude.com/media/article/ye/su/arroz-e-feijao_20656_l.jpg"
//     },
//     {
//         id: "1",
//         name: "Arroz com feijão",
//         description: "Arroz com feijão",
//         date: new Date(),
//         image: "https://static.tuasaude.com/media/article/ye/su/arroz-e-feijao_20656_l.jpg"
//     }
// ]

export default async function DashboardMainPage() {
    const session = await getServerSession(authOptions)
    if (!session) return null
    const notifications = await prisma.notifications.findFirst({
        where: {
            user: {
                email: session.user!.email
            }
        }
    })
    const listItems = await prisma.lunch.findMany({})
    return(
        <>
            <Header>
                <a className="cursor-pointer" href="/dashboard/notificacoes">
                    {notifications ? <BellIcon className="text-red-500" />  :<BellIcon />}
                </a>
                <h1 className="text-2xl font-bold mx-auto">Cardápio</h1>
                <LogoutButton />
            </Header>
            <main className="flex flex-col gap-2 items-center justify-center">
                <Input placeholder="Pesquisar" />
                <Suspense fallback={
                    <div className="flex flex-col gap-4 mt-4 w-full">
                        {Array.from({length: 5}).map((_, index) => (
                            <div key={index} className="bg-gray-200 w-full h-24 animate-pulse rounded">

                            </div>
                        ))}
                    </div>
                }>
                    <CardapioList />
                </Suspense>
            </main>
            <footer className="mt-auto h-full">
                <div className="flex flex-row justify-around">
                    {Array.from({length: 5}).map((_, index) => (
                        <DayButton key={index} isActive={index === 0} />
                    ))}

                </div>
            </footer>
        </>
    )
}