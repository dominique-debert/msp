import React from 'react'
import Link from 'next/link'

import { MovieDetails } from '@/types/movie-details'
import { SEARCH_ACTOR_GOOGLE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { HeroRatesInfos } from '@/components/header/hero-rates-info'
import { Icons } from '@/components/icons'
import { extraInfoFormatter } from '@/components/movie/extra-info'

export const DetailsExtraInfo = ({
  movie,
  director,
}: {
  movie: MovieDetails
  director: string | undefined
}) => {
  const extraInfo = extraInfoFormatter(movie, director)
  return (
    <section>
      <p className="text-sm font-bold lg:text-3xl">{movie.title}</p>
      <HeroRatesInfos movieDetails={movie} />
      <p className="prose-invert text-xs font-semibold lg:text-lg">
        {movie.overview}
      </p>
      <div className="my-4 flex max-w-sm flex-col space-y-1">
        {extraInfo.map((info) => (
          <div
            key={info.name}
            className="grid grid-cols-2 text-sm font-semibold lg:text-lg"
          >
            <p className="text-muted-foreground">{info.name}</p>
            {info.isLink ? (
              <Link
                href={`${SEARCH_ACTOR_GOOGLE}${info.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-fit underline underline-offset-4 transition-all ease-in-out hover:text-cyan-200"
              >
                <span className="inline-flex items-center gap-1">
                  {info.value}
                  <Icons.arrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
            ) : (
              <p className={cn(info.className)}>{info.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
