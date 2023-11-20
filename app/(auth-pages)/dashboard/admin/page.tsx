import { Header } from "@/components/Header";
import { LogoutButton } from "@/components/LogoutButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/prisma";
import { BellIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default function CadastrarComidaPage() {
    async function createLunch(formData: any) {
        "use server"
        const name = formData.get("name") as string
        const description = formData.get("description") as string
        const data = formData.get("data") as string
        const img = formData.get("imagem") as string
        if (!name || !description || !data || !img) return console.log("Missing data")
        const dayOfWeek = new Date(data).getDay()
        await prisma.lunch.create({
            data: {
                name,
                description,
                useDayOfWeek: dayOfWeek,
                image: img
            }
        })
        redirect("/dashboard")
    }
    return (
        <>
            <Header>
                <BellIcon />
                <h1 className="text-2xl font-bold mx-auto">ADMIN PAGE</h1>
                <LogoutButton />
            </Header>
            <main className="mt-6">
            <form className="flex flex-col gap-2" action={createLunch}>
                <Input name="name" placeholder="Nome" type="text" />
                <Input name="description" placeholder="Descrição" type="text" />
                <Input name="data" placeholder="Data da semana" type="date" />
                <Input name="imagem" placeholder="Imagem" type='text' />
                <Button className="bg-slate-300 hover:bg-slate-200" type="submit">Cadastrar</Button>
            </form>
        </main>
        </>
    )
}