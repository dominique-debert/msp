import * as React from 'react'

import { SeriesDetails } from '@/types/series-details'
import { seasonsFormatter } from '@/lib/utils'
import { useSearchQueryParams } from '@/hooks/use-search-params'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SeasonsSelectorProps {
  series: SeriesDetails
  setSelectedSeason: React.Dispatch<React.SetStateAction<string>>
}

export function SeasonsSelector({
  series,
  setSelectedSeason,
}: SeasonsSelectorProps) {
  const { seasonQuerySTR } = useSearchQueryParams()
  const formattedSeasons = seasonsFormatter(series?.seasons)

  return (
    <Select
      onValueChange={setSelectedSeason}
      defaultValue={seasonQuerySTR || '1'}
      disabled={!formattedSeasons?.length}
      data-oid="6thcb::"
    >
      <SelectTrigger
        className="mb-4 w-full disabled:cursor-not-allowed lg:w-60"
        data-oid="4o:4s2v"
      >
        <SelectValue placeholder="Select a season" data-oid="pnv_neb" />
      </SelectTrigger>
      <SelectContent data-oid="sjhc96v">
        <SelectGroup data-oid="7.a-ok_">
          <SelectLabel data-oid="ziaztk_">Seasons</SelectLabel>
          {formattedSeasons?.map(
            (season, idx) =>
              season && (
                <React.Fragment key={season?.id}>
                  <SelectItem
                    key={season?.id}
                    value={String(season?.season_number)}
                    data-oid="jkcvl:z"
                  >
                    {season.name.startsWith('Season')
                      ? season.name
                      : `Season ${season?.season_number}`}
                  </SelectItem>
                  {idx !== formattedSeasons?.length - 1 && (
                    <SelectSeparator data-oid="_aqx2tn" />
                  )}
                </React.Fragment>
              )
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
