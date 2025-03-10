import React, { Suspense } from 'react'

import { MediaType } from '@/types/media'
import { Movie } from '@/types/movie-result'
import { List } from '@/components/list'
import { SliderHorizontalListLoader } from '@/components/loaders/slider-horizontal-list-loader'

interface MoviesIntroSectionProps {
  latestTrendingMovies: Movie[]
  allTimeTopRatedMovies: Movie[]
  popularMovies: Movie[]
  latestTrendingSeries: MediaType[]
  popularSeries: MediaType[]
  allTimeTopRatedSeries: MediaType[]
}

export const MoviesIntroSection = ({
  latestTrendingMovies,
  allTimeTopRatedMovies,
  popularMovies,
  latestTrendingSeries,
  popularSeries,
  allTimeTopRatedSeries,
}: MoviesIntroSectionProps) => {
  return (
    <section className="container max-w-screen-2xl" data-oid="-vb7g:j">
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid="p0fbruf" />}
        data-oid="6.d1f7b"
      >
        <List
          title="Trending Movies"
          items={latestTrendingMovies}
          itemType="movie"
          data-oid=":fgm7pr"
        />
      </Suspense>
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid="v_8di98" />}
        data-oid="3-e35xa"
      >
        <List
          title="Popular Movies"
          items={popularMovies}
          itemType="movie"
          data-oid="h53fbpy"
        />
      </Suspense>
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid=".l3rg:l" />}
        data-oid="ixckmej"
      >
        <List
          title="Top Rated Movies"
          items={allTimeTopRatedMovies}
          itemType="movie"
          data-oid="gtez_2j"
        />
      </Suspense>
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid="1:ma3ws" />}
        data-oid="vhyhbb3"
      >
        <List
          title="Trending Series"
          items={latestTrendingSeries}
          itemType="tv"
          data-oid="b6pdyci"
        />
      </Suspense>
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid="6h5hzio" />}
        data-oid="16qbe8n"
      >
        <List
          title="Popular Series"
          items={popularSeries}
          itemType="tv"
          data-oid="mmq9k25"
        />
      </Suspense>
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid="yd6x88i" />}
        data-oid="edg1vpi"
      >
        <List
          title="Top Rated Series"
          items={allTimeTopRatedSeries}
          itemType="tv"
          data-oid="v:xirgb"
        />
      </Suspense>
    </section>
  )
}
