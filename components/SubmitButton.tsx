"use client"

import { ReactNode } from "react"
import { Button } from "./ui/button"
import { useFormStatus } from "react-dom"

interface  SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    loadingContent?: ReactNode
}

export function SubmitButton({children, loadingContent, ...rest}: SubmitButtonProps) {
    const { pending } = useFormStatus()
    return (<Button className="bg-slate-300 hover:bg-slate-200" type="submit" {...rest} aria-disabled={pending} disabled={pending}>
        {loadingContent ? pending ? loadingContent : children : pending ? "Carregando" : children}
    </Button>)
}