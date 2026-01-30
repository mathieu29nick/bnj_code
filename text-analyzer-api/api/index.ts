import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createNestServer } from '../src/main';

let cachedServer;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (!cachedServer) {
    cachedServer = await createNestServer();
  }

  return cachedServer(req, res);
}
