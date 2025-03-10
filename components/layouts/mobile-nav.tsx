import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavItem } from '@/types/navbar'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Icons } from '@/components/icons'

interface MobileNavProps {
  items?: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} data-oid="zz-37ap">
      <SheetTrigger asChild data-oid="49ohit3">
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          data-oid="679ajjc"
        >
          <Icons.menu className="size-6" data-oid="g0ja_wr" />
          <span className="sr-only" data-oid="4.jny38">
            Toggle Menu
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="inset-y-0 flex h-auto w-[350px] flex-col p-0"
        data-oid="c2946-f"
      >
        <div className="px-7 py-4" data-oid="51g1e_0">
          <Link
            aria-label="Home"
            href="/"
            className="flex w-fit items-center"
            onClick={() => setIsOpen(false)}
            data-oid="qbbxw8-"
          >
            <Icons.reelLogo
              className="mr-2 size-6"
              aria-hidden="true"
              data-oid="rveufgr"
            />

            <span className="text-lg font-bold" data-oid="4bhlzx7">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div
          className="my-4 flex flex-1 flex-col gap-4 px-9 pb-2"
          data-oid="np.bvuu"
        >
          {items?.map((item, index) => (
            <div
              className="border-b-2 last:border-b-0"
              key={item.title}
              data-oid="762pu-."
            >
              <MobileLink
                key={index}
                href={item.href!}
                pathname={pathname}
                setIsOpen={setIsOpen}
                disabled={item.disabled}
                scroll={item.scroll}
                data-oid="lepy87m"
              >
                {item.title}
              </MobileLink>
            </div>
          ))}
        </div>
        <div className="space-y-6 px-9 pb-10" data-oid="8diedbi">
          <Link
            href={siteConfig.links.buyMeACoffee}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'default',
                className: 'w-full',
              }),
              'text-white'
            )}
            data-oid="t6n:cl:"
          >
            <Icons.buyMeACoffee className="mr-2 size-5" data-oid=".b1o:1-" />
            Buy me a coffee
          </Link>
          <Link
            href={siteConfig.links.website}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'default',
                className: 'w-full',
              }),
              'text-white'
            )}
            data-oid="-vs1i1c"
          >
            Visit my portfolio
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  children?: React.ReactNode
  href: string
  disabled?: boolean
  pathname: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  scroll?: boolean
}

function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setIsOpen,
  scroll,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      scroll={scroll}
      className={cn(
        'w-fit text-base font-medium text-foreground/70 transition-colors hover:text-foreground',
        pathname === href && 'text-secondary-foreground',
        disabled && 'pointer-events-none opacity-60'
      )}
      onClick={() => setIsOpen(false)}
      data-oid="99wbo1:"
    >
      {children}
    </Link>
  )
}
