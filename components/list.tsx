'use client'

import '@splidejs/react-splide/css'

import React from 'react'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { motion } from 'framer-motion'

import { MediaType } from '@/types/media'
import { ItemType } from '@/types/movie-result'
import {
  CHANGE_COLOR_VARIANT,
  HIDDEN_TEXT_ARROW_VARIANT,
  HIDDEN_TEXT_VARIANT,
} from '@/lib/motion-variants'
import { itemRedirect } from '@/lib/utils'
import { Card } from '@/components/card'
import { Icons } from '@/components/icons'

interface ListProps {
  title: string
  items: MediaType[]
  itemType?: ItemType
}

export const List = ({ title, items, itemType = 'movie' }: ListProps) => {
  return (
    <nav className="pb-10 pt-12 lg:pb-28" data-oid="3hmooy_">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="w-fit"
        data-oid="_ax:zhd"
      >
        <Link
          href={itemRedirect(itemType)}
          className="mb-4 flex w-fit items-center gap-2"
          data-oid="hjtxdse"
        >
          <motion.h2
            className="text-2xl font-bold transition"
            variants={CHANGE_COLOR_VARIANT}
            data-oid="-uj821k"
          >
            {title}
          </motion.h2>
          <motion.div
            className="mt-1 text-base text-cyan-200"
            variants={HIDDEN_TEXT_VARIANT}
            data-oid="7npzyb6"
          >
            <span className="font-sans text-sm font-medium" data-oid="x8dazew">
              Explore All
            </span>
          </motion.div>
          <motion.span
            variants={HIDDEN_TEXT_ARROW_VARIANT}
            className="mt-1 text-base text-cyan-200"
            data-oid="5c:qzbr"
          >
            <Icons.arrowRight
              className="ml-1 inline-block size-4"
              data-oid="zdftogp"
            />
          </motion.span>
        </Link>
      </motion.div>
      {items.length === 0 && (
        <p className="text-lg text-gray-400" data-oid="chue-sz">
          No items to show
        </p>
      )}
      {items.length > 0 && (
        <Splide
          options={{
            rewind: true,
            gap: '1.5rem',
            arrows: true,
            pagination: false,
            autoWidth: true,
          }}
          data-oid="m9.0sws"
        >
          {items.map((item) => (
            <SplideSlide key={item.id} data-oid="mk5kn-q">
              <Card item={item} itemType={itemType} data-oid="5lz0_:b" />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </nav>
  )
}
