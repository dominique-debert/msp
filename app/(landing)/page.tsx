import React, { Suspense } from 'react'
import { populateHomePageData } from '@/services/movies'

import { HeroSlider } from '@/components/header/hero-slider'
import { FullScreenLoader } from '@/components/loaders/intro-pages-loader'
import { MoviesIntroSection } from '@/components/main-page/intro-section'

async function IndexPage() {
  const {
    nowPlayingMovies,
    latestTrendingMovies,
    allTimeTopRatedMovies,
    popularMovies,
    latestTrendingSeries,
    popularSeries,
    allTimeTopRatedSeries,
  } = await populateHomePageData()
  return (
    <section className="h-full" data-oid="779vgya">
      <Suspense
        fallback={<FullScreenLoader data-oid="wbmup7m" />}
        data-oid="wrful1m"
      >
        <HeroSlider movies={nowPlayingMovies} data-oid="9nux9gb" />
      </Suspense>
      <MoviesIntroSection
        latestTrendingMovies={latestTrendingMovies}
        allTimeTopRatedMovies={allTimeTopRatedMovies}
        popularMovies={popularMovies}
        latestTrendingSeries={latestTrendingSeries}
        popularSeries={popularSeries}
        allTimeTopRatedSeries={allTimeTopRatedSeries}
        data-oid="87pluup"
      />
    </section>
  )
}
export default IndexPage
