'use client'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

interface HomeViewProps {}
const HomeView = ({}: HomeViewProps) => {
    const { data: session } = authClient.useSession()
    if (!session) {
        return <p>Loading</p>
    }
    return (
        <div>
            <Button onClick={() => {}}></Button>
        </div>
    )
}
export default HomeView
