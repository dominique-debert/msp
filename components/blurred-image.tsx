'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'

import { cn } from '@/lib/utils'

interface BlurImageProps extends ImageProps {
  className: string
  intro?: boolean
}

export function BlurredImage({
  src,
  alt,
  className,
  intro = false,
  ...props
}: BlurImageProps) {
  const [isLoading, setLoading] = React.useState(true)

  return intro ? (
    <Image
      {...props}
      alt={alt}
      src={src}
      className={cn(className, 'duration-700 ease-in-out', {
        'blur-lg': isLoading,
        'blur-0': !isLoading,
      })}
      onLoad={() => setLoading(false)}
      data-oid="b00-:hx"
    />
  ) : (
    <div
      className="w-fit overflow-hidden rounded-lg bg-slate-900"
      data-oid="r_4i8c0"
    >
      <Image
        {...props}
        alt={alt}
        src={src}
        className={cn(className, 'duration-700 ease-in-out', {
          'blur-lg': isLoading,
          'blur-0': !isLoading,
        })}
        onLoad={() => setLoading(false)}
        data-oid="-2f1v-l"
      />
    </div>
  )
}
