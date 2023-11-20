import { ReactNode } from "react";

export function Header({ children }: {children: ReactNode}) {
    return <header className="flex flex-row justify-between items-center">
        {children}
    </header>
}