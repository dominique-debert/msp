import React from 'react'
import Link from 'next/link'

import { SeriesDetails } from '@/types/series-details'
import { SEARCH_ACTOR_GOOGLE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { HeroRatesInfos } from '@/components/header/hero-rates-info'
import { Icons } from '@/components/icons'
import { seriesExtraInfoFormatter } from '@/components/media/extra-info'

interface SeriesDetailsExtraInfoProps {
  series: SeriesDetails
  director: string | undefined
}

export const SeriesDetailsExtraInfo = ({
  series,
  director,
}: SeriesDetailsExtraInfoProps) => {
  const extraInfo = seriesExtraInfoFormatter(series, director)
  return (
    <section data-oid="5:ma:tc">
      <p className="text-sm font-bold lg:text-3xl" data-oid="e4glmu1">
        {series.name}
      </p>
      <HeroRatesInfos seriesDetails={series} data-oid="1mini7n" />
      <p
        className="prose-invert text-xs font-semibold lg:text-lg"
        data-oid="p5cg2tu"
      >
        {series.overview}
      </p>
      <div className="my-4 flex max-w-lg flex-col space-y-1" data-oid="lglfaz1">
        {extraInfo.map((info) => (
          <div
            key={info.name}
            className="grid grid-cols-2 text-sm font-semibold lg:text-lg"
            data-oid=":aak87:"
          >
            <p className="text-muted-foreground" data-oid="zq9dcy:">
              {info.name}
            </p>
            {info.isLink ? (
              <Link
                href={`${SEARCH_ACTOR_GOOGLE}${info.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-fit transition-all ease-in-out hover:text-cyan-200"
                data-oid="557_n8t"
              >
                <span
                  className="inline-flex items-center gap-1"
                  data-oid="m6gfdu4"
                >
                  <span
                    className="underline underline-offset-4"
                    data-oid="pmu474j"
                  >
                    {info.value}
                  </span>
                  <Icons.arrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-2"
                    data-oid="t5x1lnu"
                  />
                </span>
              </Link>
            ) : (
              <p className={cn(info.className)} data-oid="3sjf6wd">
                {info.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
