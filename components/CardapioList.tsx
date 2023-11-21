import { prisma } from "@/lib/prisma"
import { CardapioItem } from "./CardapioItem"
import { Lunch, Prisma } from "@prisma/client"

export async function CardapioList() {
    const listItems = await prisma.$queryRaw`SELECT * FROM "Lunch"` as Lunch[]
    return (
        <div className="flex flex-col gap-4 mt-4 w-full">
            {listItems.map((item, index) => (
                <CardapioItem  key={index} item={{
                    id: item.id,
                    date: item.createdAt,
                    description: item.description!,
                    image: item.image!,
                    name: item.name
                }} />
            ))}
        </div>
    )
}