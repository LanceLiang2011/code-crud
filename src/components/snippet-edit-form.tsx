"use client";
import React from "react";
import Editor from "@monaco-editor/react";

import type { Snippet } from "@prisma/client";

interface Props {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: Props) {
  const [code, setCode] = React.useState(snippet.code);
  const hanldeEditorChange = (input: string = "") => {
    setCode(input);
  };
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
    </div>
  );
}
