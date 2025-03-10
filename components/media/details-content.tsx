import React, { Suspense } from 'react'

import { Credit } from '@/types/credit'
import { MovieDetails } from '@/types/movie-details'
import { Movie } from '@/types/movie-result'
import { getPosterImageURL } from '@/lib/utils'
import { BlurredImage } from '@/components/blurred-image'
import { List } from '@/components/list'
import { SliderHorizontalListLoader } from '@/components/loaders/slider-horizontal-list-loader'
import { DetailsCredits } from '@/components/media/details-credits'
import { DetailsExtraInfo } from '@/components/media/details-extra-info'

export const MoviesDetailsContent = ({
  movie,
  movieCredits,
  similarMovies,
  recommendedMovies,
}: {
  movie: MovieDetails
  movieCredits: Credit
  similarMovies: Movie[]
  recommendedMovies: Movie[]
}) => {
  const director = movieCredits?.crew?.find(
    (crew) => crew.job === 'Director'
  )?.name
  return (
    <section
      className="container max-w-screen-2xl pb-10 pt-12 lg:pb-20"
      data-oid="pz2n5en"
    >
      <div className="flex flex-col gap-8 lg:flex-row" data-oid="z-5p9te">
        <div className="hidden lg:block" data-oid="l1:-yzx">
          <div className="relative min-h-[600px] w-[400px]" data-oid="l__cw24">
            <BlurredImage
              src={getPosterImageURL(movie.poster_path)}
              alt={movie.title}
              className="h-full w-full rounded-lg object-fill shadow-lg lg:object-cover"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              intro
              data-oid="zqnl6_9"
            />
          </div>
        </div>
        <section className="flex flex-col gap-4" data-oid="qvk0shj">
          <DetailsExtraInfo
            movie={movie}
            director={director}
            data-oid="_dfe7aw"
          />

          <DetailsCredits movieCredits={movieCredits} data-oid="8pj89hl" />
        </section>
      </div>
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid="w0_yduq" />}
        data-oid="13hlvzm"
      >
        <List
          title="Recommended Movies"
          items={recommendedMovies}
          data-oid="1e4czba"
        />
      </Suspense>
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid="jnqmx.d" />}
        data-oid="c6ea7pc"
      >
        <List title="Similar Movies" items={similarMovies} data-oid="j1k83w1" />
      </Suspense>
    </section>
  )
}
