type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface MovieResponse {
  page: number
  results: Movie[]
}

type Param = Record<string, string | number>

interface MultiRequestProps {
  nowPlayingMovies: Movie[]
  latestTrendingMovies: Movie[]
  popularMovies: Movie[]
  allTimeTopRatedMovies: Movie[]
}

export type { Movie, MovieResponse, Param, MultiRequestProps }
