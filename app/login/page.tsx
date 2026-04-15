'use client'
import { Button, Input } from '@heroui/react'
import React, { useState } from 'react'
import client from '@/config/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const sizes = ['lg']
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const route = useRouter()

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      if (email.trim() === '') {
        setEmailError('O campo de email é obrigatório.')
      } else {
        setEmailError('')
      }

      if (password.trim() === '') {
        setPasswordError('O campo de senha é obrigatório.')
      } else {
        setPasswordError('')
      }
      return
    }

    const user = {
      email,
      password,
    }

    const loginResponse = await client.post('/api/login', user)
    const token = loginResponse.data?.data?.token || loginResponse.data?.token
    localStorage.setItem('token', token)
    route.push('/home')
  }

  return (
    <div>
      {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}
      {passwordError && (
        <p className="text-red-500 text-sm mb-2">{passwordError}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              label="Email"
              size={'lg'}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              label="Senha"
              size={'lg'}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button color="primary" variant="bordered" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}
