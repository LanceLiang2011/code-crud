import React from "react";

interface Props {
  params: {
    id: "string";
  };
}

export default async function SnippetEditPage({
  params: { id: idString },
}: Props) {
  const id = parseInt(idString);
  return <div>SnippetEditPage for {id}</div>;
}
