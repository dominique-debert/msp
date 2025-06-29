import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import {
  getMovieDetailsById,
  populateMovieDetailsPage,
} from '@/services/movies'

import { PageDetailsProps } from '@/types/page-details'
import { getPosterImageURL } from '@/lib/utils'
import { MoviesDetailsContent } from '@/components/media/details-content'
import { MovieDetailsHero } from '@/components/media/details-hero'

export async function generateMetadata(
  { params }: PageDetailsProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  const movieDetails = await getMovieDetailsById(id)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: movieDetails.title,
    description: movieDetails.overview,
    metadataBase: new URL(`/movies/${id}`, process.env.NEXT_PUBLIC_BASE_URL),
    openGraph: {
      images: [
        ...previousImages,
        getPosterImageURL(movieDetails.poster_path),
        getPosterImageURL(movieDetails.backdrop_path),
      ],
    },
  }
}

const MoviePage = async ({ params }: PageDetailsProps) => {
  const { movieCredits, movieDetails, similarMovies, recommendedMovies } =
    await populateMovieDetailsPage(params?.id)

  return (
    <header className="relative" data-oid="3rn5en-">
      <MovieDetailsHero movie={movieDetails} data-oid="76ffkqm" />
      <MoviesDetailsContent
        movie={movieDetails}
        movieCredits={movieCredits}
        similarMovies={similarMovies}
        recommendedMovies={recommendedMovies}
        data-oid="-o2m5s:"
      />
    </header>
  )
}

export default MoviePage
