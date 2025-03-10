import React from 'react'

import { SkeletonContainer } from '@/components/ui/skeleton'

export const FullScreenLoader = () => {
  return (
    <SkeletonContainer className="py-20" data-oid=":a3.p5b">
      <div className="space-y-3" data-oid="u54brqo">
        <div
          className="min-h-[80dvh] rounded-lg bg-gray-500"
          data-oid="fg9g.ol"
        />

        <div
          className="h-3 w-11/12 rounded-lg bg-gray-500"
          data-oid="gfh6uze"
        />

        <div className="h-3 w-8/12 rounded-lg bg-gray-500" data-oid="k8cd_40" />
      </div>
    </SkeletonContainer>
  )
}
