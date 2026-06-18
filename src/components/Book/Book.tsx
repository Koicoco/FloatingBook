import { useState } from 'react'
import BookCover from './BookCover'
import PageSpread from './PageSpread'

interface BookProps {
  onClose: () => void
}

export default function Book({ onClose }: BookProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {!isOpen
        ? <BookCover onOpen={() => setIsOpen(true)} />
        : <PageSpread onClose={onClose} />
      }
    </div>
  )
}