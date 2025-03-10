'use client'

import type { FC, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

import { useMounted } from '@/hooks/use-mounted'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface ModalProps {
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
  const router = useRouter()
  const isMounted = useMounted()

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back()
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <Dialog open onOpenChange={handleOnOpenChange} data-oid="rtbirag">
      <DialogContent className="top-[50%] max-w-screen-md" data-oid="516cnfl">
        <DialogHeader data-oid="p9qc0tp">
          <DialogTitle data-oid="8ljxd-0">Disclaimer</DialogTitle>
          <DialogDescription data-oid="y6i-zp:">
            Please read this disclaimer carefully before using the service
            operated by us.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-64 overflow-auto" data-oid="3ts08o7">
          {children}
        </div>
        <DialogFooter data-oid="6np05we">
          <Button
            variant="default"
            className="text-secondary-foreground"
            onClick={() => router.back()}
            data-oid="vohc8f6"
          >
            Agree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
