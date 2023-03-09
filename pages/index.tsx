import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import { IUser } from './create-account'
export const fetcher = (url: string) =>
  fetch(url).then((response) => response.json())
const Home: NextPage = () => {
  const { data } = useSWR<IUser>('/api/user', fetcher)
  const router = useRouter()

  useEffect(() => {
    console.log('ㅇㄷㄷㄹㄴㅇㄹ', data)
    if (data === undefined) {
      router.replace('/create-account')
    }
  }, [data])
  return (
    <>
      <h1>Welcome {data?.name}</h1>
      <h2>Your email is: {data?.email}</h2>
    </>
  )
}
export default Home
