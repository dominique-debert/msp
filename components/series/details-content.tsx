import React, { Suspense } from 'react'

import { Credit } from '@/types/credit'
import { MediaType } from '@/types/media'
import { SeriesDetails } from '@/types/series-details'
import { getPosterImageURL } from '@/lib/utils'
import { BlurredImage } from '@/components/blurred-image'
import { List } from '@/components/list'
import { SliderHorizontalListLoader } from '@/components/loaders/slider-horizontal-list-loader'
import { DetailsCredits } from '@/components/media/details-credits'
import { SeriesDetailsExtraInfo } from '@/components/series/details-extra-info'
import { SeasonNavigator } from '@/components/series/season-navigator'

interface SeriesDetailsContentProps {
  series: SeriesDetails
  seriesCredits: Credit
  similarSeries: MediaType[]
  recommendedSeries: MediaType[]
}

export const SeriesDetailsContent = ({
  series,
  seriesCredits,
  similarSeries,
  recommendedSeries,
}: SeriesDetailsContentProps) => {
  const director = seriesCredits?.crew?.find(
    (crew) => crew.job === 'Director'
  )?.name
  return (
    <section
      className="container max-w-screen-2xl pb-10 pt-12 lg:pb-20"
      data-oid="_b.9sdg"
    >
      <div
        className="flex flex-col-reverse gap-8 lg:flex-row"
        data-oid="104l11i"
      >
        <div className="hidden lg:block" data-oid="zswxmik">
          <div className="relative min-h-[600px] w-[400px]" data-oid="73sf1rj">
            <BlurredImage
              src={getPosterImageURL(series.poster_path)}
              alt={series.name}
              className="h-full w-full rounded-lg object-fill shadow-lg lg:object-cover"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              intro
              data-oid="87bqbsy"
            />
          </div>
        </div>
        <section className="flex flex-1 flex-col gap-4" data-oid="2amrqx4">
          <SeriesDetailsExtraInfo
            series={series}
            director={director}
            data-oid="k9or94:"
          />

          <DetailsCredits movieCredits={seriesCredits} data-oid="nsvi:iy" />
        </section>
        <SeasonNavigator series={series} data-oid="ug3n847" />
      </div>
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid="b5rnrwv" />}
        data-oid="9g4kb_3"
      >
        <List
          title="Recommended Series"
          items={recommendedSeries}
          itemType="tv"
          data-oid="gzdv77e"
        />
      </Suspense>
      <Suspense
        fallback={<SliderHorizontalListLoader data-oid="f-2m574" />}
        data-oid="dz.9i8l"
      >
        <List
          title="Similar Series"
          items={similarSeries}
          itemType="tv"
          data-oid="3oldj:_"
        />
      </Suspense>
    </section>
  )
}
