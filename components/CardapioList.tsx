import { prisma } from "@/lib/prisma"
import { CardapioItem } from "./CardapioItem"

// sleep function
// function sleep(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

export async function CardapioList() {
    // await sleep(2000)
    const listItems = await prisma.lunch.findMany()
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