import React from 'react'

import { MovieDetails } from '@/types/movie-details'
import { Movie } from '@/types/movie-result'
import { SeriesDetails } from '@/types/series-details'
import { dateFormatter, getGenres, numberRounder } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/icons'

interface HeroRatesInfosProps {
  movie?: Movie
  movieDetails?: MovieDetails
  seriesDetails?: SeriesDetails
}

export const HeroRatesInfos = ({
  movie,
  movieDetails,
  seriesDetails,
}: HeroRatesInfosProps) => {
  const item = (movieDetails || movie || seriesDetails) as (
    | MovieDetails
    | Movie
  ) &
    SeriesDetails
  const movieGenres = getGenres(
    movie?.genre_ids,
    movieDetails?.genres || seriesDetails?.genres
  )

  return (
    <div
      className="my-4 flex flex-wrap items-center gap-2 lg:gap-3"
      data-oid="j_qj42x"
    >
      <Badge className="uppercase" data-oid="p_dm20m">
        {item?.original_language}
      </Badge>
      <Badge className="uppercase" data-oid="hx_g:3k">
        {item?.adult ? 'NC-17' : 'PG-13'}
      </Badge>
      <div
        className="flex items-center text-xs lg:text-base"
        data-oid="yehkiyu"
      >
        <Icons.fullStar className="mr-1 h-6 w-6" data-oid="gk_vwjz" />
        <p className="font-semibold" data-oid="9:20fk:">
          {numberRounder(item?.vote_average)}
        </p>
      </div>
      <p
        className="text-xs text-popover-foreground lg:text-base"
        data-oid="thg88xe"
      >
        {dateFormatter(item?.release_date || item?.first_air_date)}
      </p>
      {movieGenres.map((genre) => (
        <Badge key={genre.id} className="font-medium" data-oid="zl2v7pd">
          {genre.name}
        </Badge>
      ))}
    </div>
  )
}
