import React from 'react'

import { Movie } from '@/types/movie-result'
import { getPosterImageURL } from '@/lib/utils'
import { BlurredImage } from '@/components/blurred-image'
import { AnimatedWatchButton } from '@/components/header/animated-watch-button'
import { HeroRatesInfos } from '@/components/header/hero-rates-info'

export const HeroSectionInfo = ({ movie }: { movie: Movie }) => {
  return (
    <div
      className="container relative z-50 h-full pt-20 lg:pt-28"
      data-oid=":0mh8eh"
    >
      <div
        className="flex h-full items-center justify-center gap-x-8"
        data-oid="3t26bpu"
      >
        <div className="flex w-full grow flex-col" data-oid="axs.ot_">
          <div data-oid="1a6qj8v">
            <h2 className="text-sm font-bold lg:text-6xl" data-oid="cmauwav">
              {movie.title}
            </h2>
            <HeroRatesInfos movie={movie} data-oid="457w0wi" />
            <p
              className="prose-invert mt-2 text-xs font-bold lg:text-lg"
              data-oid="lqj:lm9"
            >
              {movie.overview}
            </p>
          </div>
          <AnimatedWatchButton movieId={movie?.id} data-oid="7vjnrsu" />
        </div>
        <div className="hidden lg:flex" data-oid="bdczv31">
          <div className="relative min-h-[700px] w-[400px]" data-oid="b77wln4">
            <BlurredImage
              src={getPosterImageURL(movie.poster_path)}
              alt={movie.title}
              className="pointer-events-none size-full rounded-lg object-fill shadow-lg lg:object-cover"
              fill
              sizes="(min-width: 1024px) 1024px, 30vw"
              intro
              priority
              data-oid="-h205iz"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
