import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

import { MediaType } from '@/types/media'
import { ItemType } from '@/types/movie-result'
import { CARD_VARIANT } from '@/lib/motion-variants'
import {
  dateFormatter,
  getPosterImageURL,
  itemRedirect,
  numberRounder,
} from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { BlurredImage } from '@/components/blurred-image'

interface CardProps {
  item: MediaType
  itemType?: ItemType
  isTruncateOverview?: boolean
}

export const Card = ({
  item,
  itemType = 'movie',
  isTruncateOverview = true,
}: CardProps) => {
  return (
    <HoverCard data-oid="f_upis5">
      <HoverCardTrigger asChild data-oid="rg0omiu">
        {item?.poster_path && (
          <Link
            href={`${itemRedirect(itemType)}/${item.id}`}
            data-oid="mtcl.ju"
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="pointer-events-none lg:pointer-events-auto"
              data-oid="7etv.o."
            >
              <motion.div
                className="group relative"
                variants={CARD_VARIANT}
                data-oid="-xa_3-s"
              >
                <BlurredImage
                  src={`${getPosterImageURL(item.poster_path)}`}
                  alt="Movie"
                  width={250}
                  height={375}
                  className="cursor-pointer rounded-md object-cover shadow-xl"
                  data-oid="j.fh5jh"
                />
              </motion.div>
            </motion.div>
          </Link>
        )}
      </HoverCardTrigger>
      <HoverCardContent className="hidden w-80 md:block" data-oid="mfml7yu">
        <div className="flex justify-between space-x-4" data-oid="cw:tkc2">
          <Avatar data-oid="sbo2ra5">
            <AvatarImage src="/personal-logo.png" data-oid="issgjq." />
            <AvatarFallback data-oid="y8btvbn">VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1" data-oid="xnm-h4_">
            <div
              className="flex items-center justify-between gap-2"
              data-oid="14gv6p:"
            >
              <h4 className="text-sm font-semibold" data-oid="w6tck8_">
                {item?.title} ({item?.release_date?.slice(0, 4)})
              </h4>
              <Badge data-oid="grx-:09">
                {numberRounder(item.vote_average)}
              </Badge>
            </div>
            <p className="text-sm" data-oid="s6td33r">
              {isTruncateOverview && item.overview.length > 100 ? (
                <>{item.overview.slice(0, 100)}...</>
              ) : (
                item.overview.slice(0, 400)
              )}
            </p>
            <div className="flex items-center pt-2" data-oid="s.mng2f">
              <CalendarDays
                className="mr-2 size-4 opacity-70"
                data-oid="7vwuu._"
              />{' '}
              <span
                className="text-xs text-muted-foreground"
                data-oid="d04zs-7"
              >
                {dateFormatter(item?.release_date, true)}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
