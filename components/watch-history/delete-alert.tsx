import { useState } from 'react'
import { Trash } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

interface DeleteHistoryAlertProps {
  onDelete: () => void
}

export function DeleteHistoryAlert({ onDelete }: DeleteHistoryAlertProps) {
  const [isOpen, setIsOpen] = useState(false)

  const deleteWatchedItems = () => {
    onDelete()
    setIsOpen(false)
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen} data-oid="ym:6f0o">
      <AlertDialogTrigger asChild data-oid="bdm9x7r">
        <Button variant="outline" data-oid="5_yq9up">
          <Trash className="mr-2 size-4" data-oid="qkh7p7b" />
          Clear history
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent data-oid="gdb435p">
        <AlertDialogHeader data-oid="4izlt26">
          <AlertDialogTitle data-oid="yu4hwwo">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription data-oid="1g-idvn">
            This action cannot be undone. This will permanently delete your
            entire watch history.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter data-oid="tzkxdac">
          <AlertDialogCancel data-oid="6p-hkn9">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteWatchedItems}
            className="text-white"
            data-oid="7qu8f_5"
          >
            Yes, clear history
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
