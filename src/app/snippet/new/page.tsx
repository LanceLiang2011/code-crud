"use client";
import React from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { prisma } from "@/db";

export default function NewSnippetPage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={action}>
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
      {formState.message.length > 0 && (
        <div className="bg-red-100 text-red-900 text-center">
          {formState.message}
        </div>
      )}
    </form>
  );
}
