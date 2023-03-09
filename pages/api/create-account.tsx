import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../lib/db'
import { withIronSessionApiRoute } from 'iron-session/next'

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      email: string
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = req.body
  if (req.method === 'POST') {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })
    console.log(user)
    if (user) {
      console.log('found user')
      return res.json({
        ok: false,
      })
    } else {
      console.log('Did not find. Will create.')
      await db.user.create({
        data: {
          name,
          email,
        },
      })
      return res.json({
        ok: true,
      })
    }
  }
}
