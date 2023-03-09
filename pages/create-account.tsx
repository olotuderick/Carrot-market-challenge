import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import { fetcher } from '.'
import useMutation from '../lib/client/useMutation'
export interface IUser {
  // id: number
  name: string
  email: string
}

const CreateAccount: NextPage = () => {
  const [create, { loading, data }] = useMutation('/api/create-account')
  const router = useRouter()
  const { data: user } = useSWR<IUser>('/api/user', fetcher)

  useEffect(() => {
    console.log('create account', data)
    if (user) {
      router.replace('/')
    }
  }, [])
  const { register, handleSubmit } = useForm<IUser>()
  useEffect(() => {
    if (data?.ok) {
      console.log('redirecting to login')
      router.push('/log-in')
    }
    if (data?.ok === false) {
      alert('You have an account please login.')
      router.push('/log-in')
    }
  }, [data])
  const onValid = (data: IUser) => {
    create(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <h1>Create Account</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            {...register('name', { required: true })}
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            {...register('email', {
              required: true,
            })}
            type="email"
            id="email"
          />
        </div>
        <button type="submit">
          {loading ? 'Loading...' : 'Create Account'}
        </button>
      </form>
    </>
  )
}
export default CreateAccount
