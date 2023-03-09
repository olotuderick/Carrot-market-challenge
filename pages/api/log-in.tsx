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

export default withIronSessionApiRoute(
  async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.body
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })
    if (user) {
      console.log('found user')
      req.session.user = {
        email,
      }
      await req.session.save()
    }

    return res.json({
      ok: true,
    })
    // console.log(req.session)
  },
  {
    cookieName: 'carrot-market-challenge',
    password: 'asdfghjklsjbdshbkjhsbfkjhbjhbfjbkvhjbfdvjbhdfvkhbsjkfd',
  }
)
