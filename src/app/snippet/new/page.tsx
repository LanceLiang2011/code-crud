import React from "react";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

export default function NewSnippetPage() {
  async function createSnippet(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3"></h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            id="code"
            name="code"
            className="border rounded p-2 w-full"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Submit
        </button>
      </div>
    </form>
  );
}
