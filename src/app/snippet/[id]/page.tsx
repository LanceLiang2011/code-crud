import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/db";
import * as actions from "@/actions";

interface Props {
  params: {
    id: "string";
  };
}

export default async function SnippetShowPage({
  params: { id: stringId },
}: Props) {
  const id = parseInt(stringId);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return notFound();

  const deleteSnippetAction = actions.deleteSnippet.bind(null, id);

  return (
    <div>
      <div className=" flex m-4 justify-between items-center">
        <h1 className=" text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippet/${id}/edit`} className=" p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className=" p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>

      <pre className=" p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await prisma.snippet.findMany();

  return snippets.map((s) => ({ id: s.id.toString() }));
}
