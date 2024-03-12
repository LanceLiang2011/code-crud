"use client";
import React from "react";
import Editor from "@monaco-editor/react";

import type { Snippet } from "@prisma/client";
import * as actions from "@/actions";

interface Props {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: Props) {
  const [code, setCode] = React.useState(snippet.code);
  const hanldeEditorChange = (input: string = "") => {
    setCode(input);
  };

  const updateSnippetAction = actions.updateSnippet.bind(
    null,
    snippet.id,
    code
  );

  return (
    <div>
      <Editor
        height={`40vh`}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        onChange={hanldeEditorChange}
        options={{
          minimap: { enabled: false },
        }}
      />
      <form action={updateSnippetAction}>
        <button className=" p-2 border rounded">Save</button>
      </form>
    </div>
  );
}
