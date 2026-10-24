import { useEffect, useRef } from 'react'

const Snowfall = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let flakes = []

    // mouse er obostha
    const mouse = { x: -9999, y: -9999, vx: 0, vy: 0 }
    const RADIUS = 70

    const makeSprite = () => {
      const s = document.createElement('canvas')
      s.width = s.height = 64
      const c = s.getContext('2d')
      const g = c.createRadialGradient(32, 32, 0, 32, 32, 32)
      g.addColorStop(0, 'rgba(255,255,255,1)')
      g.addColorStop(0.5, 'rgba(255,255,255,0.8)')
      g.addColorStop(1, 'rgba(255,255,255,0)')
      c.fillStyle = g
      c.fillRect(0, 0, 64, 64)
      return s
    }
    const sprite = makeSprite()

    const createFlake = (randomY) => {
      const depth = Math.random()
      const baseSpeed = 0.25 + Math.random() * 1.1
      const isFast = Math.random() < 0.15
      return {
        x: Math.random() * canvas.width,
        y: randomY ? Math.random() * canvas.height : -10,
        size: 1.5 + depth * depth * 5,
        speed: isFast ? baseSpeed * (2 + Math.random() * 1.5) : baseSpeed,
        alpha: 0.3 + depth * 0.6,
        sway: Math.random() * 0.8 + 0.3,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.008 + Math.random() * 0.015,
        boost: 0,
        boostTimer: 100 + Math.random() * 500,
        px: 0,
        py: 0,
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const count = window.innerWidth < 768 ? 140 : 300
      flakes = Array.from({ length: count }, () => createFlake(true))
    }

    const onMove = (e) => {
      const point = e.touches ? e.touches[0] : e
      mouse.vx = point.clientX - mouse.x
      mouse.vy = point.clientY - mouse.y
      if (mouse.x === -9999) { mouse.vx = 0; mouse.vy = 0 }
      mouse.x = point.clientX
      mouse.y = point.clientY
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
      mouse.vx = 0
      mouse.vy = 0
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      flakes.forEach((f) => {
        // hothat speed barano
        f.boostTimer -= 1
        if (f.boostTimer <= 0) {
          f.boost = 1 + Math.random() * 2.5
          f.boostTimer = 150 + Math.random() * 700
        }
        f.boost *= 0.97

        // cursor dhakka
        const dx = f.x - mouse.x
        const dy = f.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < RADIUS && dist > 0.1) {
          const force = 1 - dist / RADIUS
          const lightness = 1.4 - f.size / 10
          f.px += (dx / dist) * force * 2.2 * lightness
          f.py += (dy / dist) * force * 2.2 * lightness
          f.px += mouse.vx * force * 0.12 * lightness
          f.py += mouse.vy * force * 0.12 * lightness
        }

        f.px *= 0.93
        f.py *= 0.93

        // shudhu nijer halka dolon, hawa nei
        f.phase += f.phaseSpeed
        f.x += Math.sin(f.phase) * f.sway * 0.5 + f.px
        f.y += f.speed + f.boost + f.py

        if (f.y > canvas.height + 10) Object.assign(f, createFlake(false))
        if (f.y < -30) f.y = -10
        if (f.x > canvas.width + 10) f.x = -10
        if (f.x < -10) f.x = canvas.width + 10

        ctx.globalAlpha = f.alpha
        ctx.drawImage(sprite, f.x - f.size / 2, f.y - f.size / 2, f.size, f.size)
      })

      mouse.vx *= 0.8
      mouse.vy *= 0.8

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('mouseout', onLeave)
    window.addEventListener('touchend', onLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('touchend', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}

export default Snowfall