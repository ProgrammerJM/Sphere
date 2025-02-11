"use server";

import { prisma } from "@/lib/prisma";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPOst(content: string, image: string) {
  try {
    const userId = await getDbUserId();

    const post = await prisma.post.create({
      data: {
        content,
        image,
        authorId: userId,
      },
    });

    revalidatePath("/"); // purge the cahce from the home page
    return { success: true, post };
  } catch (error) {
    console.error("Failed to create post", error);
    return { success: false, error: "Failed to create post" };
  }
}
