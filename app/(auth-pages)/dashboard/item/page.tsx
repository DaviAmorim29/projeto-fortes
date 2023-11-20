import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function ItemPage() {
    return (
        <div>
            <Header>
                <a>Voltar</a>
                <h1 className="">Item</h1>
                <a>Filtrar</a>
            </Header>
            <main className="flex flex-col gap-2">
                <div className="w-12 h-12 bg-gray-100 rounded"></div>
                <h1>Nome</h1>
                <span>Descrição</span>
                <span>
                    R$00.00
                </span>
                <Button>
                    Realizar pedido
                </Button>
            </main>
        </div>
    )
}