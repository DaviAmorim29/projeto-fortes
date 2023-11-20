import { Header } from "@/components/Header";
import { LogoutButton } from "@/components/LogoutButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BellIcon } from "lucide-react";

export default function CadastrarComidaPage() {
    return (
        <>
            <Header>
                <BellIcon />
                <h1 className="text-2xl font-bold mx-auto">ADMIN PAGE</h1>
                <LogoutButton />
            </Header>
            <main className="mt-6">
            <form className="flex flex-col gap-2" action={async (formData) => {
                "use server"
                const name = formData.get("name")
                const description = formData.get("description")
                const price = formData.get("price")
                const date = formData.get("date")
                console.log({name, description, price, date})
            }}>
                <Input name="name" placeholder="Nome" type="text" />
                <Input name="description" placeholder="Descrição" type="text" />
                <Input name="data" placeholder="Data da semana" type="date" />
                <Input name="price" placeholder="Preço" type='number' />
                <Button className="bg-primary" type="submit">Cadastrar</Button>
            </form>
        </main>
        </>
    )
}