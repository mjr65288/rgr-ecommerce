import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-8 w-32" />
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-2 py-2 border-b">
              {[...Array(5)].map((_, j) => (
                <Skeleton key={j} className="h-6 w-24" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 