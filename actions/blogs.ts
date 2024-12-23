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
