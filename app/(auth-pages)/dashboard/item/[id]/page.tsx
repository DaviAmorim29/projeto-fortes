import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { Header } from "@/components/Header";
import { ItemDetails } from "@/components/ItemDetails";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { ArrowLeftCircleIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Suspense } from "react";

// sleep
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function ItemPage({ params }: { params: { id: string } }) {
    return (
            <>
                <Header>
                    <a href="/dashboard">
                        <ArrowLeftCircleIcon />
                    </a>
                    <h1 className="text-2xl font-bold mx-auto">Item</h1>
                    <ArrowLeftCircleIcon  className="hidden"/>
                </Header>
                <main className="flex flex-col gap-2 mt-12">
                    <Suspense fallback={
                        <>
                            <div className="relative h-[300px] w-full overflow-hidden bg-gray-200 rounded animate-pulse"></div>
                            <div className="text-2xl font-bold w-40 h-10 animate-pulse bg-gray-200 rounded"></div>
                            <div className="text-md font-regular w-80 h-8 animate-pulse bg-gray-200 rounded"></div>
                            <div className="w-32 h-10 bg-gray-200 animate-pulse rounded"></div>
                        </>
                    }>
                        <ItemDetails itemId={params.id}  />
                    </Suspense>
                </main>
            </>
        )
}