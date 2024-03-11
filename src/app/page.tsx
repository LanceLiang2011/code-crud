import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      className="flex justify-between items-center p-2 border rounded"
      href={`/snippet/${snippet.id}`}
      key={snippet.id}
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));

  return (
    <div>
      <div className=" flex m-2 justify-between items-center">
        <h1 className=" text-xl font-bold">Snippets</h1>
        <Link className=" border p-2 rounded" href={"/snippet/new"}>
          New
        </Link>
      </div>
      <div className=" flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
