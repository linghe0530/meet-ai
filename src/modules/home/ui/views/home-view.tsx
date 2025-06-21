'use client'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'

interface HomeViewProps {}
const HomeView = ({}: HomeViewProps) => {
    const trpc = useTRPC()

    const { data } = useQuery(
        trpc.hello.queryOptions({
            text: 'crane',
        }),
    )
    return (
        <div>
            <Button onClick={() => {}}>{data?.greeting}</Button>
        </div>
    )
}
export default HomeView
