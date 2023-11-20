import { CardapioItem } from "@/components/CardapioItem";
import { Header } from "@/components/Header";
import { QRCodeComponent } from "@/components/QRCode";
import { prisma } from "@/lib/prisma";
import { ArrowLeftCircleIcon } from "lucide-react";
import QRCode from "qrcode.react";

async function getPedidodata(id: string) {
    const getPedidoData = await prisma.order.findUnique({
        where: {
            id
        },
        include: {
            items: {
                include: {
                    lunch: true
                }
            }
        }
    })
    return getPedidoData
}

// async function getPedidodata(id: string) {
//     return {
//         id: "123",
//         items: [
//             {
//                 lunch: {
//                     createdAt: new Date(),
//                     description: "Arroz com feijão",
//                     id: "123",
//                     image: "https://static.tuasaude.com/media/article/ye/su/arroz-e-feijao_20656_l.jpg",
//                     name: "Arroz com feijão"
//                 }
//             },
//             {
//                 lunch: {
//                     createdAt: new Date(),
//                     description: "Arroz com feijão",
//                     id: "123",
//                     image: "https://static.tuasaude.com/media/article/ye/su/arroz-e-feijao_20656_l.jpg",
//                     name: "Arroz com feijão"
//                 }
//             },
//             {
//                 lunch: {
//                     createdAt: new Date(),
//                     description: "Arroz com feijão",
//                     id: "123",
//                     image: "https://static.tuasaude.com/media/article/ye/su/arroz-e-feijao_20656_l.jpg",
//                     name: "Arroz com feijão"
//                 }
//             }
//         ]
//     }
// }

export default async function PedidoConfirmedPage({ params }: { params: { id: string } }) {
    const pedido = await getPedidodata(params.id)
    if (!pedido) return null
    return (
        <>
            <Header>
                <a href="/dashboard">
                    <ArrowLeftCircleIcon />
                </a>
                <h1 className="text-2xl font-bold mx-auto">Pedido confirmado</h1>
                <ArrowLeftCircleIcon  className="hidden"/>
            </Header>
            <main className="flex flex-col gap-2 mt-6">
                <h1 className="font-bold text-2xl">Itens no pedido</h1>
                {pedido.items.map((item, index) => (
                    <CardapioItem key={index} item={{
                        date: item.lunch.createdAt,
                        description: item.lunch.description!,
                        id: "123",
                        image: item.lunch.image!,
                        name: item.lunch.name
                    }} />
                ))}
                <div className="mt-6 w-full">
                    <h1 className="font-bold text-3xl">
                        Código de compra:
                    </h1>
                    <div className="h-full w-full flex-col flex justify-center items-center mt-10">
                        <QRCodeComponent />
                    </div>
                </div>
            </main>
        </>
    )
}