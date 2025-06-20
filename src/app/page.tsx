import { Button } from '@/components/ui/button'
import { db } from '@/db'
import Image from 'next/image'

export default function Home() {
    console.log(db.$client)

    return (
        <div>
            <Button variant={'destructive'}>123</Button>
        </div>
    )
}
