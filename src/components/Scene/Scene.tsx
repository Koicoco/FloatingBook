import { useEffect, useRef } from 'react'
import '../../styles/scene.css'

interface Petal {
  el: HTMLDivElement
  x: number
  speed: number
  drift: number
  rotation: number
  scale: number
}

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const petalsRef = useRef<Petal[]>([])
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Spawn petals
    const spawnPetal = () => {
      const el = document.createElement('div')
      el.className = 'petal'
      const scale = 0.5 + Math.random() * 1
      const x = Math.random() * window.innerWidth
      el.style.left = `${x}px`
      el.style.top = `-20px`
      el.style.transform = `scale(${scale})`
      container.appendChild(el)

      petalsRef.current.push({
        el, x,
        speed: 0.5 + Math.random() * 1.5,
        drift: (Math.random() - 0.5) * 0.8,
        rotation: Math.random() * 360,
        scale
      })
    }

    // Spawn initial petals
    for (let i = 0; i < 12; i++) {
      setTimeout(() => spawnPetal(), i * 300)
    }

    // Spawn new ones periodically
    const spawnInterval = setInterval(spawnPetal, 2000)

    // Animate
    let lastTime = 0
    const animate = (time: number) => {
      const delta = time - lastTime
      lastTime = time

      petalsRef.current = petalsRef.current.filter(petal => {
        petal.x += petal.drift
        petal.rotation += 0.5

        const currentTop = parseFloat(petal.el.style.top)
        const newTop = currentTop + petal.speed * (delta / 16)
        petal.el.style.top = `${newTop}px`
        petal.el.style.left = `${petal.x}px`
        petal.el.style.transform = `scale(${petal.scale}) rotate(${petal.rotation}deg)`

        if (newTop > window.innerHeight + 20) {
          petal.el.remove()
          return false
        }
        return true
      })

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      clearInterval(spawnInterval)
      cancelAnimationFrame(animFrameRef.current)
      petalsRef.current.forEach(p => p.el.remove())
      petalsRef.current = []
    }
  }, [])

  return (
    <div className="scene" ref={containerRef}>
      {/* Bamboo stalks */}
      <div className="bamboo-layer back">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bamboo-stalk" style={{
            left: `${5 + i * 8}%`,
            height: `${60 + Math.random() * 30}%`,
            animationDelay: `${i * 0.4}s`
          }} />
        ))}
      </div>
      <div className="bamboo-layer front">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bamboo-stalk" style={{
            left: `${2 + i * 10}%`,
            height: `${70 + Math.random() * 20}%`,
            animationDelay: `${i * 0.6}s`
          }} />
        ))}
      </div>

      {/* Clickable animals */}
      <div className="animal frog" title="ribbit!" onClick={() => playSound('frog')}>🐸</div>
      <div className="animal duck" title="quack!" onClick={() => playSound('duck')}>🦆</div>
      <div className="animal fish" title="blub!" onClick={() => playSound('fish')}>🐟</div>

      {/* Ground / water layer */}
      <div className="ground-layer">
        <div className="rock rock-1" />
        <div className="rock rock-2" />
        <div className="water-shimmer" />
      </div>

      {/* Clouds */}
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />
    </div>
  )
}

function playSound(animal: string) {
  console.log(`${animal} sound — wire up Howler here in Week 3`)
}
