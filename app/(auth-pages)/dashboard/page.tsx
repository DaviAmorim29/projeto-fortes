import { DayButton } from "@/components/DayButton";
import { Header } from "@/components/Header";
import { LogoutButton } from "@/components/LogoutButton";
import { Input } from "@/components/ui/input";
import { BellIcon } from "lucide-react";

export default function DashboardMainPage() {
    return(
        <>
            <Header>
                <BellIcon />
                <h1 className="text-2xl font-bold mx-auto">Cardápio</h1>
                <LogoutButton />
            </Header>
            <main className="flex flex-col gap-2 items-center justify-center">
                <Input placeholder="Pesquisar" />
                    <div className="flex flex-col gap-2 mt-4 w-full">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row gap-2">
                        {/* Imagem */}
                        <div className="w-16 h-full bg-gray-200 rounded"></div> 

                        <div className="flex flex-col gap-2">
                            <h1>Comida</h1>
                            <p className="text-xs">R$2,00</p>
                        </div>
                    </div>
                    <span className="text-xs text-gray-400">Postado 1 dia atrás</span>
                </div>
                    </div>
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