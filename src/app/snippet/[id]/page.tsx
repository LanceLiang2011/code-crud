import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/db";

interface Props {
  params: {
    id: "string";
  };
}

export default async function SnippetShowPage({ params: { id } }: Props) {
  const snippet = await prisma.snippet.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <div>{snippet.title}</div>
      <div>{snippet.code}</div>
    </div>
  );
}
