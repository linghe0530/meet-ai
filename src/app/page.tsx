'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/db'
import Image from 'next/image'
import { useState } from 'react'
import { authClient } from '@/lib/auth-client' //import the auth client
export default function Home() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const signin = async () => {
        const { data, error } = await authClient.signIn.email(
            {
                email,
                password,
                callbackURL: '/dashboard',
            },
            {
                onRequest: (ctx) => {
                    //show loading
                },
                onSuccess: (ctx) => {
                    //redirect to the dashboard or sign in page
                },
                onError: (ctx) => {
                    // display the error message
                    alert(ctx.error.message)
                },
            },
        )
    }
    return (
        <div>
            <Input
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></Input>
            <Input
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Button
                variant={'destructive'}
                type='submit'
                onClick={signin}
            >
                Click
            </Button>
        </div>
    )
}
