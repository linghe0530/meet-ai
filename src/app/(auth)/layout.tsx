import { Card } from '@/components/ui/card'
interface LayoutProps {
    children: React.ReactNode
}
const Page = ({ children }: LayoutProps) => {
    return (
        <div className='bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
            <div className='w-full max-w-sm md:max-w-3xl'>{children}</div>
        </div>
    )
}

export default Page
