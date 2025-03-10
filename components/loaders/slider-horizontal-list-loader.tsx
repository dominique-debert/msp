import React from 'react'

import { SkeletonContainer } from '../ui/skeleton'

export const SliderHorizontalListLoader = () => {
  return (
    <div className="container h-full pb-10 pt-12 lg:pb-20" data-oid="bjhb_q2">
      <div
        className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8"
        data-oid="p74qbvo"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonContainer key={i} data-oid="4x34h6p">
            <div className="space-y-3" data-oid="-i8qgtq">
              <div className="h-36 rounded-lg bg-gray-500" data-oid="8:2i137" />
              <div
                className="h-3 w-11/12 rounded-lg bg-gray-500"
                data-oid="xo_szv8"
              />

              <div
                className="h-3 w-8/12 rounded-lg bg-gray-500"
                data-oid="_grp1yp"
              />
            </div>
          </SkeletonContainer>
        ))}
      </div>
    </div>
  )
}
