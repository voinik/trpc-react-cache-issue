"use client";

import { useState } from "react";
import { testAction } from "./testAction";

export function PageContent() {
  const [response, setResponse] = useState<string | null>(null);

  return (
    <div className="p-2">
      <form
        action={async () => {
          const result = await testAction();
          if (result) {
            setResponse(result.data.authedMessage);
          }
        }}
      >
        <button type="submit" className="rounded-md border border-black p-1">
          Click me
        </button>
      </form>
      <span>
        result:{" "}
        {response ? JSON.stringify(response, null, 4) : "Waiting for click..."}
        {response && " Check the terminal!"}
      </span>
    </div>
  );
}
