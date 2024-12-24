"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createBlog(formData: FormData) {
    await db.blog.create({
        data: {
            name: formData.get("title") as string,
            content: formData.get("content") as string,
        }
    });

    revalidatePath("/dashboard/blogs");
}

export async function deleteBlog(id: string) {
    try {
        await db.blog.delete({
            where: { id },
        });

        revalidatePath("/dashboard/blogs");
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw new Error("Chyba při mazání blogu.");
    }
}

export async function editBlog(formData: FormData, id: string) {
    try {
        await db.blog.update({
            where: { id },
            data: {
                name: formData.get("title") as string,
                content: formData.get("content") as string,
            },
        });

        revalidatePath("/dashboard/blogs");
    } catch (error) {
        console.error("Error editing blog:", error);
        throw new Error("Chyba při úpravě blogu.");
    }
}
export async function getBlogById(id: string) {
    try {
        const blog = await db.blog.findUnique({
            where: { id },
        });

        if (!blog) {
            throw new Error('Blog nenalezen.');
        }

        return blog;
    } catch (error) {
        console.error("Chyba při načítání blogu:", error);
        throw new Error("Chyba při načítání blogu.");
    }
}
export async function updateBlog(id: string, name: string, content: string) {
    try {
        // Aktualizace blogu v databázi
        const updatedBlog = await db.blog.update({
            where: { id },
            data: { name, content },
        });
        return updatedBlog;
    } catch (error) {
        console.error("Chyba při aktualizaci blogu:", error);
        throw new Error("Chyba při aktualizaci blogu.");
    }
}