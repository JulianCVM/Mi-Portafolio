'use client'

import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    
    // Trail properties
    const trailLength = 25
    const points: { x: number; y: number }[] = []
    let mouse = { x: -1000, y: -1000 } // Start offscreen

    for (let i = 0; i < trailLength; i++) {
      points.push({ x: mouse.x, y: mouse.y })
    }

    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', updateSize)
    updateSize()

    const onMouseMove = (e: MouseEvent) => {
      // If mouse just entered, snap all points to cursor
      if (mouse.x === -1000) {
        for (let i = 0; i < trailLength; i++) {
          points[i].x = e.clientX
          points[i].y = e.clientY
        }
      }
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', onMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Keep first point at mouse position
      let currentX = mouse.x
      let currentY = mouse.y

      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        
        // Spring physics for trailing effect
        const dx = currentX - p.x
        const dy = currentY - p.y
        
        p.x += dx * 0.4 // spring stiffness
        p.y += dy * 0.4
        
        currentX = p.x
        currentY = p.y
      }

      // Draw the fluid trail
      if (points[0].x !== -1000) {
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2
          const yc = (points[i].y + points[i + 1].y) / 2
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
        }
        
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y)

        // Tapered end can be simulated with variable width if drawn segment by segment,
        // but mix-blend-difference with a bright color looks incredible natively.
        ctx.strokeStyle = '#FF2A2A' // jp-red
        ctx.lineWidth = 10
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        
        ctx.shadowBlur = 20
        ctx.shadowColor = '#FF2A2A'
        
        ctx.stroke()
        
        // Reset shadow
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', updateSize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ width: '100vw', height: '100vh' }}
    />
  )
}
