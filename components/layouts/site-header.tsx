'use client'

import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { useNavbarScrollOverlay } from '@/hooks/use-scroll-overlay'
import { buttonVariants } from '@/components/ui/button'
import { CommandMenu } from '@/components/command-menu'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/layouts/main-nav'
import { MobileNav } from '@/components/layouts/mobile-nav'

export function SiteHeader() {
  const { isShowNavBackground } = useNavbarScrollOverlay()
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 w-full transition duration-200',
        {
          'bg-background/80': isShowNavBackground,
        }
      )}
      data-oid=":p67.7b"
    >
      <div
        className="container flex h-16 max-w-screen-2xl items-center space-x-4 sm:justify-between sm:space-x-0"
        data-oid=":3.:2oj"
      >
        <MainNav items={siteConfig.mainNav} data-oid="v:i2i6b" />
        <MobileNav items={siteConfig.mainNav} data-oid="ge.tyn5" />
        <div
          className="flex flex-1 items-center justify-end space-x-4"
          data-oid=":.4hyjv"
        >
          <div
            className="w-full flex-1 md:w-auto md:flex-none"
            data-oid="ntx1sfx"
          >
            <CommandMenu data-oid="0_p3uvu" />
          </div>
          <nav className="flex items-center space-x-1" data-oid="n6a:68-">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              data-oid="q4dv6r_"
            ></Link>
            {/* <Link
                                                                                                                                                                                                                                              href={siteConfig.links.twitter}
                                                                                                                                                                                                                                              target="_blank"
                                                                                                                                                                                                                                              rel="noreferrer"
                                                                                                                                                                                                                                             >
                                                                                                                                                                                                                                              <div
                                                                                                                                                                                                                                                className={buttonVariants({
                                                                                                                                                                                                                                                  size: 'icon',
                                                                                                                                                                                                                                                  variant: 'ghost',
                                                                                                                                                                                                                                                })}
                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                <Icons.twitter className="size-5 fill-current" />
                                                                                                                                                                                                                                                <span className="sr-only">Twitter</span>
                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                             </Link>
                                                                                                                                                                                                                                             <Link
                                                                                                                                                                                                                                              href={siteConfig.links.buyMeACoffee}
                                                                                                                                                                                                                                              target="_blank"
                                                                                                                                                                                                                                              rel="noreferrer"
                                                                                                                                                                                                                                             >
                                                                                                                                                                                                                                              <div
                                                                                                                                                                                                                                                className={buttonVariants({
                                                                                                                                                                                                                                                  size: 'icon',
                                                                                                                                                                                                                                                  variant: 'ghost',
                                                                                                                                                                                                                                                })}
                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                <Icons.buyMeACoffee className="size-5" />
                                                                                                                                                                                                                                                <span className="sr-only">Buy me a coffee</span>
                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                             </Link> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
