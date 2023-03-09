import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useMutation from '../lib/client/useMutation'
interface ILoginUser {
  email: string
}
const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<ILoginUser>()
  const [login, { data }] = useMutation('/api/log-in')
  const router = useRouter()
  useEffect(() => {
    // console.log(data?.ok)
    if (data?.ok) {
      console.log('redirecting to home')
      router.push('/')
    }
  }, [data])
  const onValid = (data: ILoginUser) => {
    login(data)
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <label htmlFor="email"></label>
          <input {...register('email')} type="email" id="email" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}
export default Login
