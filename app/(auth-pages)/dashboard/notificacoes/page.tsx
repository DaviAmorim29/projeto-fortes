import { Header } from "@/components/Header";

export default function NotificationPage() {
    return (
        <div>
            <Header>
                <a></a>
                <h1>Notificações</h1>
                <span>2</span>
            </Header>
            <main className="flex flex-col gap-2">
                <div className="bg-gray-200 rounded">
                    <p>Olá [Nome], não se esqueça de registrar suas refeições nos dias não úteis no... FeedControl Obras. Isso nos ajuda a manter tudo em dia e garante uma alimentação eficiente para todos. Acesse agora!</p>
                </div>
            </main>
        </div>
    )
}