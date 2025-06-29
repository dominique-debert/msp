import React, { forwardRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { MovieDetails } from '@/types/movie-details'
import { SeriesDetails } from '@/types/series-details'
import { cn } from '@/lib/utils'
import { HeroImage } from '@/components/header/hero-image'
import { PlayButton } from '@/components/play-button'

export const DetailsHero = forwardRef<
  HTMLIFrameElement,
  {
    movie?: MovieDetails
    series?: SeriesDetails
    isIframeShown: boolean
    playVideo: () => void
  }
>(({ movie, isIframeShown, playVideo, series }, ref) => {
  const media = (movie || series) as MovieDetails & SeriesDetails
  const title = media?.title || media?.name

  return (
    <section
      className="relative isolate h-[500px] overflow-hidden lg:h-[80dvh]"
      data-oid="rktltlp"
    >
      <HeroImage movie={media} data-oid="adebx:_" />
      <div
        className="container relative z-50 h-full max-w-screen-2xl"
        data-oid="jum_bcr"
      >
        <div
          className="flex h-full items-center justify-center"
          data-oid="_cpqcbn"
        >
          <AnimatePresence data-oid="yikgk88">
            {!isIframeShown && (
              <motion.div
                transition={{ type: 'spring', stiffness: 500 }}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -150 }}
                className={cn({
                  hidden: isIframeShown,
                })}
                data-oid="s3f1y:i"
              >
                <PlayButton
                  onClick={playVideo}
                  media={media}
                  data-oid="se:6if-"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <iframe
            className={cn('size-full py-20', {
              hidden: !isIframeShown,
            })}
            allowFullScreen
            ref={ref}
            autoFocus
            content="noindex,nofollow"
            autoSave={title.toLowerCase().trim()}
            id={title}
            name={title}
            title={title}
            about={media?.overview}
            key={media?.id}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            data-oid="s_l_vlo"
          ></iframe>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -inset-4 rounded-md bg-slate-900/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:drop-shadow-lg"
        data-oid="u:-1_ac"
      />
    </section>
  )
})

DetailsHero.displayName = 'DetailsHero'
