'use client'

import React from 'react'

import { useMounted } from '@/hooks/use-mounted'
import { useWatchedMedia } from '@/hooks/use-watched-media'

import { DeleteHistoryAlert } from './delete-alert'
import { WatchedItemCard } from './watch-history-card'
import { WatchedItemCardSkeleton } from './watch-history-skeleton'

export const WatchHistoryContainer = () => {
  const { watchedItems, deleteWatchedItems } = useWatchedMedia()
  const isMounted = useMounted()

  if (!isMounted) {
    return (
      <div
        className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8"
        data-oid="2nj.9k0"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <WatchedItemCardSkeleton key={index} data-oid="6v7gvts" />
        ))}
      </div>
    )
  }

  if (!watchedItems.length) {
    return (
      <div
        className="flex min-h-screen flex-1 flex-col items-center"
        data-oid="5tme_3-"
      >
        <p className="text-lg text-gray-500" data-oid="6.nq-76">
          No watched items yet
        </p>
        <p className="text-sm text-gray-400" data-oid="gnr6zln">
          Start watching your favorite movies and TV shows to see them here
        </p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col" data-oid="2-w:ut:">
      <div className="mb-2 flex justify-end" data-oid="o248pr_">
        {/* clear history */}
        <DeleteHistoryAlert onDelete={deleteWatchedItems} data-oid="3ew_ln." />
      </div>
      <div
        className="grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-5"
        data-oid="-a9vsm5"
      >
        {watchedItems
          ?.sort(
            (a, b) =>
              new Date(b.modified_at).getTime() -
              new Date(a.modified_at).getTime()
          )
          ?.map((item) => <WatchedItemCard item={item} data-oid="3:l60s-" />)}
      </div>
    </div>
  )
}
