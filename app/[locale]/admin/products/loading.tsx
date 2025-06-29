import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="space-y-2">
      <div className="flex-between flex-wrap gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-48" />
        </div>
        <Skeleton className="h-8 w-32" />
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-2 py-2 border-b">
              {[...Array(9)].map((_, j) => (
                <Skeleton key={j} className="h-6 w-24" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 