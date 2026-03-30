import type { NextApiRequest, NextApiResponse } from 'next';

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  //현재시간을 보관하는 date객체
  const date = new Date();
  res.json({ time: date.toLocaleString() });
}
