import "server-only";

import { cache } from "react";

import { AuthUser } from "./AuthUser";

// We cache to avoid calling Clerk more than once per user request.
// We also limit the data that can be read from the Clerk response to prevent
// unneeded data exposure.
export const getCurrentUser = cache(async () => {
  console.log("Inside getCurrentUser");

  return new AuthUser({ id: '1', email: 'foo@example.com' });
});
