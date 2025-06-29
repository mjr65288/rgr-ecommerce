import { getTranslations } from 'next-intl/server'
import { Skeleton } from '@/components/ui/skeleton'
import { Loader2 } from 'lucide-react'

export default async function LoadingPage() {
  const t = await getTranslations()
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background'>
      <Skeleton className='p-8 rounded-lg shadow-md w-[90vw] max-w-md flex flex-col items-center gap-4'>
        <Loader2 className='w-10 h-10 text-primary animate-spin' />
        <div className='text-lg font-medium text-muted-foreground'>{t('Loading.Loading')}</div>
      </Skeleton>
    </div>
  )
}