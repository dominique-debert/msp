'use client'

import React from 'react'

import { SeriesDetails } from '@/types/series-details'
import { useEpisodeHandler } from '@/hooks/use-episode-handler'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Episodes } from '@/components/series/episodes'
import { SeasonsSelector } from '@/components/series/selector'

export const SeasonNavigator = ({ series }: { series: SeriesDetails }) => {
  const { setSelectedSeason, episodes, selectedSeason, isEpisodesLoading } =
    useEpisodeHandler(series?.id)

  return (
    <aside className="max-w-screen-2xl" data-oid="zb.k4i.">
      <SeasonsSelector
        series={series}
        setSelectedSeason={setSelectedSeason}
        data-oid="78.br43"
      />

      <ScrollArea
        className="h-96 w-full rounded-md border lg:w-60"
        data-oid="ued:lh."
      >
        <Episodes
          episodes={episodes}
          selectedSeason={selectedSeason}
          isEpisodesLoading={isEpisodesLoading}
          backdrop_path={series?.backdrop_path}
          poster_path={series?.poster_path}
          series_name={series?.name}
          data-oid="aqqzls:"
        />
      </ScrollArea>
    </aside>
  )
}
