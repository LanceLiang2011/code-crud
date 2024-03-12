"use server";

import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function updateSnippet(id: number, code: string) {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippet/${id}`);
}

export async function deleteSnippet(id: number) {
  await prisma.snippet.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
}

export async function createSnippet(
  _formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title");
  const code = formData.get("code");

  if (typeof title !== "string" || title.length < 3)
    return { message: "Title is too short" };
  if (typeof code !== "string" || code.length < 5)
    return { message: "Code is too short" };
  try {
    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: "someting went wrong." };
  }

  revalidatePath("/");
  redirect("/");
}
