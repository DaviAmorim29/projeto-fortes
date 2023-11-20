import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
    return (
        <div>
            <Header>
                <h1>Login</h1>
                <a>Cadastro</a>
            </Header>
            <main className="w-full flex flex-col gap-2">
                <Input placeholder="Email" type="email" />
                <Input placeholder="Senha" type="password" />
            </main>
            <footer className="flex flex-col gap-2 items-center justify-center">
                <Button>
                    Login
                </Button>
                <a>Esqueceu sua senha ?</a>
            </footer>
        </div>
    )
}