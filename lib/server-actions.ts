"use server"

import { prisma } from "./prisma"

export async function addLunch(name: string, image: string, description: string) {
    await prisma.$queryRaw`INSERT INTO Lunch (name, image, description) VALUES (${name}, ${image}, ${description})`
}