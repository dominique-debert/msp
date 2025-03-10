import React from 'react'
import Link from 'next/link'

import { MovieDetails } from '@/types/movie-details'
import { SEARCH_ACTOR_GOOGLE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { HeroRatesInfos } from '@/components/header/hero-rates-info'
import { Icons } from '@/components/icons'
import { movieExtraInfoFormatter } from '@/components/media/extra-info'

export const DetailsExtraInfo = ({
  movie,
  director,
}: {
  movie: MovieDetails
  director: string | undefined
}) => {
  const extraInfo = movieExtraInfoFormatter(movie, director)
  return (
    <section data-oid="einy2dk">
      <p className="text-sm font-bold lg:text-3xl" data-oid="nsae5r2">
        {movie.title}
      </p>
      <HeroRatesInfos movieDetails={movie} data-oid="bpa.m5e" />
      <p
        className="prose-invert text-xs font-semibold lg:text-lg"
        data-oid="s40p4_x"
      >
        {movie.overview}
      </p>
      <div className="my-4 flex max-w-lg flex-col space-y-1" data-oid="-yawsq3">
        {extraInfo.map((info) => (
          <div
            key={info.name}
            className="grid grid-cols-2 text-sm font-semibold lg:text-lg"
            data-oid="302ulov"
          >
            <p className="text-muted-foreground" data-oid=":18-:wh">
              {info.name}
            </p>
            {info.isLink ? (
              <Link
                href={`${SEARCH_ACTOR_GOOGLE}${info.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-fit transition-all ease-in-out hover:text-cyan-200"
                data-oid="e7-dibv"
              >
                <span
                  className="inline-flex items-center gap-1"
                  data-oid="9dn91bd"
                >
                  <span
                    className="underline underline-offset-4"
                    data-oid="uxji6g6"
                  >
                    {info.value}
                  </span>
                  <Icons.arrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-2"
                    data-oid="m5fbsbt"
                  />
                </span>
              </Link>
            ) : (
              <p className={cn(info.className)} data-oid="pnsflzy">
                {info.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
