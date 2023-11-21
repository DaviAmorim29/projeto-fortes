'use client'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'

export default function CadastroPage() {
  return (
      <>
          <Header>
              <div></div>
              <h1 className="text-2xl font-bold">Login</h1>
              <div></div>
          </Header>
          <main className="flex flex-col gap-2 items-center justify-center mt-6">
            <Button className='w-full' variant={'destructive'} onClick={() => {signIn("google")}}>Logar com google</Button>
          </main>
        </>
  )
}
