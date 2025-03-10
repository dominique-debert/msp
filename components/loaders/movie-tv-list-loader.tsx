import React from 'react'

import { SkeletonContainer } from '@/components/ui/skeleton'

export const MovieTVListLoader = () => {
  return (
    <div className="container h-full py-20 lg:py-20" data-oid="lv6pi4_">
      <div
        className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8"
        data-oid="o.:qxcz"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <SkeletonContainer key={i} data-oid="-ch4k35">
            <div className="space-y-3" data-oid="no6b0ma">
              <div className="h-36 rounded-lg bg-gray-500" data-oid="f3fl6fv" />
              <div
                className="h-3 w-11/12 rounded-lg bg-gray-500"
                data-oid="f9pq3sp"
              />

              <div
                className="h-3 w-8/12 rounded-lg bg-gray-500"
                data-oid="mf64.4c"
              />
            </div>
          </SkeletonContainer>
        ))}
      </div>
    </div>
  )
}
