import { toNextJsHandler } from "better-auth/next-js";

function getHandler() {
  // Dynamic import to avoid build-time DB connection
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { auth } = require("@/lib/auth");
  return toNextJsHandler(auth);
}

export async function POST(request: Request) {
  const { POST } = getHandler();
  return POST(request);
}

export async function GET(request: Request) {
  const { GET } = getHandler();
  return GET(request);
}
