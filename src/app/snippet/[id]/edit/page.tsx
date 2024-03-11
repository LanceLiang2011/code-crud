import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/db";

import SnippetEditForm from "@/components/snippet-edit-form";

interface Props {
  params: {
    id: "string";
  };
}

export default async function SnippetEditPage({
  params: { id: idString },
}: Props) {
  const id = parseInt(idString);
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
