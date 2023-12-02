import "server-only";

import { cache } from "react";

import { AuthUser } from "./AuthUser";

// We cache this with React's cache function, so that we only call the callback once per request.
// You can pretend the callback contains a call to Clerk, for example
export const getCurrentUser = cache(async () => {
  console.log("Inside getCurrentUser");

  return new AuthUser({ id: '1', email: 'foo@example.com' });
});
