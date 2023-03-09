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
    console.log('session:', req.session.user)
    // console.log(req.session)
    // if (!req.session.user) {
    //   return
    // } else {

    const user = await db.user.findUnique({
      where: {
        email: req.session.user?.email,
      },
    })

    return res.json(user)
    // }
  },
  {
    cookieName: 'carrot-market-challenge',
    password: 'asdfghjklsjbdshbkjhsbfkjhbjhbfjbkvhjbfdvjbhdfvkhbsjkfd',
  }
)
