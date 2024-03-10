import { prisma } from "@/db";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>{snippet.title}</div>
  ));

  return <div>{renderedSnippets}</div>;
}
