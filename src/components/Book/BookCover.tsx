import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../../styles/book.css'

interface BookCoverProps {
  onOpen: () => void
}

export default function BookCover({ onOpen }: BookCoverProps) {
  const coverRef = useRef<HTMLDivElement>(null)
  const flapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(coverRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
  }, [])

  const handleOpen = () => {
    if (!flapRef.current || !coverRef.current) return
    const tl = gsap.timeline({ onComplete: onOpen })
    tl.to(flapRef.current, {
      rotateY: -180,
      duration: 1.0,
      ease: 'power2.inOut',
      transformOrigin: 'left center',
    })
    .to(coverRef.current, {
      x: 40,
      duration: 0.4,
      ease: 'power1.out'
    }, '-=0.3')
  }

  return (
    <div className="book-cover-wrap" ref={coverRef}>
      <div className="book-cover">
        <div className="book-spine" />
        <div className="book-back">
          <div className="social-links">
            <a href="https://github.com/Koicoco" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:your@email.com">Email</a>
          </div>
        </div>
        <div className="book-flap" ref={flapRef}>
          <div className="book-flap-front">
            <h1 className="cover-title">Coco's<br />Journey</h1>
            <button className="open-btn" onClick={handleOpen}>Open</button>
          </div>
          <div className="book-flap-back" />
        </div>
      </div>
    </div>
  )
}
