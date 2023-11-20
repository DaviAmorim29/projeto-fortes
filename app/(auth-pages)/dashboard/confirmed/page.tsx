import { Header } from "@/components/Header";

export default function PedidoConfirmado() {
    return (
        <div>
            <Header>
                <a>Voltar</a>
                <h1>Pedido Confirmado</h1>
            </Header>
            <main className="flex flex-col gap-2">
                <h1>Despesas</h1>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <div className="w-4 h-4 bg-secondary">
                            <h2>Item 1</h2>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <h1>Código de compra: </h1>
                <div className="w-8 h-8 bg-gray-200">
                    QRCODE aqui
                </div>
            </footer>
        </div>
    )
}