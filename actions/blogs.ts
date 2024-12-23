"use server";

import { db } from "@/lib/db";
import {revalidate} from "@/app/(protected)/dashboard/page";
import {revalidatePath} from "next/cache";

export async function createBlog(formData: FormData) {
    await db.blog.create({
        data: {
            name: formData.get("title") as string,
            content: formData.get("content") as string,
        }
    })

    revalidatePath("/dashboard/blogs")
}

export async function editBlog(formData: FormData, id: string){
    await db.blog.update({
        where: { id },
        data: {
            name: formData.get("title") as string,
            content: formData.get("content") as string

        },
    });
}

export async function deleteBlog(id: string) {
    try {
        // Smazání blogu podle ID
        await db.blog.delete({
            where: { id },
        });

        // Revalidace cesty pro aktualizaci stránky
        revalidatePath("/dashboard/blogs");
    } catch (error) {
        throw new Error("Chyba při mazání blogu.");
    }
}
