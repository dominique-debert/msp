import React from 'react'
import Link from 'next/link'

import { Credit } from '@/types/credit'
import { SEARCH_ACTOR_GOOGLE } from '@/lib/constants'
import { getPosterImageURL } from '@/lib/utils'
import { BlurredImage } from '@/components/blurred-image'

export const DetailsCredits = ({ movieCredits }: { movieCredits: Credit }) => {
  return (
    <>
      <h2 className="text:sm font-semibold lg:text-2xl" data-oid="19zvezt">
        Cast
      </h2>
      <div className="flex flex-wrap items-center gap-4" data-oid="wr412.f">
        {movieCredits?.cast?.slice(0, 6)?.map((cast) => (
          <Link
            href={`${SEARCH_ACTOR_GOOGLE}${cast.name}`}
            key={cast.id}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:scale-105"
            data-oid=".wc5_as"
          >
            {cast.profile_path && (
              <div
                className="relative min-h-[200px] min-w-[140px]"
                data-oid="nmgp.ka"
              >
                <BlurredImage
                  src={getPosterImageURL(cast.profile_path)}
                  alt={cast.name}
                  fill
                  className="cursor-pointer rounded-lg bg-cover shadow-md"
                  sizes="(min-width: 640px) 140px, 100px"
                  intro
                  data-oid="h.9wsj5"
                />
              </div>
            )}
            <p className="max-w-[140px] truncate" data-oid="g1w4mzj">
              {cast.name}
            </p>
          </Link>
        ))}
      </div>
    </>
  )
}
