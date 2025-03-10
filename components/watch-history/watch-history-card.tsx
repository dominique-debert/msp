import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarDays, Film, Tv } from 'lucide-react'

import { dateFormatter, getPosterImageURL } from '@/lib/utils'
import { WatchedItem } from '@/hooks/use-local-storage'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

import { BlurredImage } from '../blurred-image'

interface WatchedItemCardProps {
  item: WatchedItem
}

const CARD_VARIANT = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
}

export function WatchedItemCard({ item }: WatchedItemCardProps) {
  const handleRedirect = () => {
    if (item.type === 'movie') {
      return `/movies/${item.id}`
    }
    return `/tv-shows/${item.id}?season=${item.season}&episode=${item.episode}`
  }

  return (
    <Link href={handleRedirect()} className="h-fit" data-oid="52s.:j4">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        data-oid="cd3wtey"
      >
        <motion.div variants={CARD_VARIANT} data-oid="6yj71qh">
          <Card className="overflow-hidden" data-oid="chypyiu">
            <div className="relative aspect-[2/3] w-full" data-oid="flv4v.-">
              <BlurredImage
                src={`${getPosterImageURL(item.poster_path)}`}
                width={250}
                alt={item.title}
                height={375}
                className="cursor-pointer rounded-md object-cover shadow-xl"
                data-oid=":pwkth3"
              />

              <div className="absolute right-2 top-2" data-oid="e4bhz3x">
                <Badge variant="secondary" data-oid="i:.220r">
                  {item.type === 'movie' ? (
                    <Film className="size-4" data-oid="z:cvi_q" />
                  ) : (
                    <Tv className="size-4" data-oid="b7vlgy9" />
                  )}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4" data-oid="bu9qnb6">
              <div
                className="flex items-baseline justify-between"
                data-oid="p_y1v:g"
              >
                <h3 className="truncate font-semibold" data-oid="lrp5c7w">
                  {item.title}
                </h3>
                {item.type === 'series' && (
                  <span
                    className="ml-2 shrink-0 text-xs text-muted-foreground"
                    data-oid=".x-61ll"
                  >
                    S{item.season}, E{item.episode}
                  </span>
                )}
              </div>
              <div
                className="mt-2 flex items-center text-xs text-muted-foreground"
                data-oid="jw6_y.."
              >
                <CalendarDays className="mr-1 size-3" data-oid="22x7m4q" />
                {dateFormatter(item.added_at, true)}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Link>
  )
}
