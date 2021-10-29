import { NextApiRequest, NextApiResponse } from 'next'

// try to request to do request (GET) to /api/hello
export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello' })
}