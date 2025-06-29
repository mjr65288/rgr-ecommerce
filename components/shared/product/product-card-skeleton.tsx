import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductCardSkeleton() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-4 pb-2">
        <Skeleton className="h-52 w-full rounded-lg" />
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-4 w-24" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardContent>
    </Card>
  )
} 