import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function WatchedItemCardSkeleton() {
  return (
    <Card className="overflow-hidden" data-oid="f20ngi7">
      <Skeleton className="aspect-[2/3] w-full" data-oid="6_k72u6" />
      <CardContent className="space-y-2 p-4" data-oid="rvd:tsc">
        <Skeleton className="h-5 w-4/5" data-oid="qvn05pm" />
        <Skeleton className="h-4 w-2/3" data-oid="6dtw6a6" />
        <div className="mt-2 flex items-center" data-oid="wivbcou">
          <Skeleton className="mr-2 size-4 rounded-full" data-oid="sef:.xa" />
          <Skeleton className="h-4 w-1/3" data-oid="aw:7_ar" />
        </div>
      </CardContent>
    </Card>
  )
}
