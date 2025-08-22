'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Programador Full Stack'
  const typingSpeed = 150
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isBrowser, setIsBrowser] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  // Verificar si estamos en el navegador
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  // Efecto para la animación de escritura
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  // Efecto para el seguimiento del ratón
  useEffect(() => {
    if (!isBrowser) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isBrowser])

  // Efecto para la animación del canvas - versión optimizada
  useEffect(() => {
    if (!isBrowser || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Configurar canvas con devicePixelRatio para mayor nitidez
    const dpr = window.devicePixelRatio || 1
    
    // Establecer tamaño del canvas para que cubra toda la sección
    const handleResize = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`
        ctx.scale(dpr, dpr)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)

    // Creación de partículas más eficiente
    const particles: {
      x: number,
      y: number,
      size: number,
      color: string,
      angle: number,
      speed: number,
      spin: number,
      opacity: number
    }[] = []

    // Colores adaptados al tema verde
    const particleColors = [
      '#48bb78', // Verde medio
      '#68d391', // Verde claro
      '#9ae6b4', // Verde muy claro
      '#38a169', // Verde oscuro
      '#31c48d'  // Verde-turquesa
    ]

    // Crear partículas más interesantes
    const createParticles = () => {
      particles.length = 0 // Limpiar partículas existentes
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      const totalParticles = Math.min(60, Math.floor((width * height) / 15000))
      
      for (let i = 0; i < totalParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.3 + 0.1,
          spin: (Math.random() - 0.5) * 0.01,
          opacity: Math.random() * 0.25 + 0.1
        })
      }
    }

    createParticles()

    // Función para dibujar líneas de conexión cuando las partículas están cerca
    const drawConnections = (p1: typeof particles[0], p2: typeof particles[0], distance: number, maxDistance: number) => {
      const opacity = 1 - distance / maxDistance
      ctx.strokeStyle = `rgba(100, 200, 150, ${opacity * 0.15})`
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)
      ctx.stroke()
    }
    
    // Variables para el efecto de ondas
    let waveTime = 0
    
    // Función de renderizado principal - más eficiente
    const render = () => {
      if (!canvas) return
      
      // Crear un efecto de estela más sutil con el tema verde oscuro
      ctx.fillStyle = 'rgba(13, 43, 13, 0.12)'
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)

      // Incrementar tiempo para animaciones
      waveTime += 0.01
      
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      const maxDistance = width * 0.15

      // Dibujar ondas tecnológicas en el fondo - ahora cubriendo más espacio
      const numWaves = 4
      const wavesSpacing = height / (numWaves - 1)
      
      for (let i = 0; i < numWaves; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(72, 187, 120, ${0.05 + (i * 0.01)})`
        ctx.lineWidth = 1
        
        for (let x = 0; x < width; x += 6) {
          // Calcular posición y para cada onda
          let yPos
          
          if (i === 0) {
            // Primera onda en la parte superior
            yPos = height * 0.15 + Math.sin(x * 0.01 + waveTime + i) * 20
          } else if (i === numWaves - 1) {
            // Última onda en la parte inferior
            yPos = height * 0.85 + Math.sin(x * 0.01 + waveTime + i + 2) * 20
          } else {
            // Ondas intermedias
            yPos = (height * (i / (numWaves - 1))) + 
                   Math.sin(x * 0.01 + waveTime + i) * 30 * 
                   Math.sin(waveTime * 0.2 + i * 2)
          }
          
          if (x === 0) {
            ctx.moveTo(x, yPos)
          } else {
            ctx.lineTo(x, yPos)
          }
        }
        ctx.stroke()
      }

      // Circuitos digitales simulados distribuidos en toda la pantalla
      const numCircuits = 6
      
      for (let i = 0; i < numCircuits; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(72, 187, 120, 0.07)`
        ctx.lineWidth = 1
        
        // Distribuir los circuitos por toda la pantalla
        let x, y
        
        if (i < 2) {
          // Superior
          x = width * (0.1 + (i * 0.8))
          y = height * 0.15
        } else if (i < 4) {
          // Medio
          x = width * (0.2 + ((i - 2) * 0.6))
          y = height * 0.5
        } else {
          // Inferior
          x = width * (0.1 + ((i - 4) * 0.8))
          y = height * 0.85
        }
        
        x += Math.sin(waveTime + i) * 20
        y += Math.cos(waveTime + i) * 20
        
        let lastDirection = -1
        
        ctx.moveTo(x, y)
        
        for (let j = 0; j < 5; j++) {
          // Evita que se vaya dos veces en la misma dirección
          let direction
          do {
            direction = Math.floor(Math.random() * 4)
          } while (direction === lastDirection)
          
          lastDirection = direction
          
          const length = 20 + Math.random() * 40
          
          switch (direction) {
            case 0: x += length; break; // derecha
            case 1: y += length; break; // abajo
            case 2: x -= length; break; // izquierda
            case 3: y -= length; break; // arriba
          }
          
          ctx.lineTo(x, y)
          
          // Añadir un "nodo" al final de cada segmento
          if (j < 4) {
            const nodeSize = 2 + Math.random() * 2
            ctx.stroke()
            ctx.beginPath()
            ctx.arc(x, y, nodeSize, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(72, 187, 120, 0.15)`
            ctx.fill()
            ctx.beginPath()
            ctx.moveTo(x, y)
          }
        }
        
        ctx.stroke()
      }
      
      // Dibujar patrones hexagonales fluidos distribuidos por la pantalla
      const hexSize = width * 0.05
      const numHexagons = 5
      
      for (let i = 0; i < numHexagons; i++) {
        // Distribuir los hexágonos por toda la pantalla
        let centerX, centerY
        
        switch (i % 5) {
          case 0: // Esquina superior izquierda
            centerX = width * 0.2
            centerY = height * 0.2
            break
          case 1: // Esquina superior derecha
            centerX = width * 0.8
            centerY = height * 0.2
            break
          case 2: // Centro
            centerX = width * 0.5
            centerY = height * 0.5
            break
          case 3: // Esquina inferior izquierda
            centerX = width * 0.2
            centerY = height * 0.8
            break
          case 4: // Esquina inferior derecha
            centerX = width * 0.8
            centerY = height * 0.8
            break
          default:
            centerX = width * 0.5
            centerY = height * 0.5
        }
        
        // Añadir movimiento suave
        centerX += Math.sin(waveTime * 0.3 + i * 2) * (width * 0.05)
        centerY += Math.cos(waveTime * 0.3 + i) * (height * 0.05)
        
        ctx.strokeStyle = `rgba(72, 187, 120, ${0.1 - i * 0.01})`
        ctx.lineWidth = 1
        
        // Dibujar hexágono
        ctx.beginPath()
        for (let j = 0; j < 6; j++) {
          const angle = j * Math.PI / 3
          const x = centerX + Math.cos(angle + waveTime * 0.1) * hexSize
          const y = centerY + Math.sin(angle + waveTime * 0.1) * hexSize
          
          if (j === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.stroke()
        
        // Líneas internas
        ctx.beginPath()
        for (let j = 0; j < 3; j++) {
          const angle1 = j * Math.PI / 3 + waveTime * 0.2
          const angle2 = ((j + 3) % 6) * Math.PI / 3 + waveTime * 0.2
          
          const x1 = centerX + Math.cos(angle1) * hexSize
          const y1 = centerY + Math.sin(angle1) * hexSize
          const x2 = centerX + Math.cos(angle2) * hexSize
          const y2 = centerY + Math.sin(angle2) * hexSize
          
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
        }
        ctx.stroke()
      }
      
      // Actualizar y dibujar partículas
      particles.forEach(p => {
        // Mover partículas en trayectorias más interesantes
        p.angle += p.spin
        p.x += Math.cos(p.angle) * p.speed
        p.y += Math.sin(p.angle) * p.speed
        
        // Ajuste basado en posición del mouse
        const dx = mousePosition.x - p.x
        const dy = mousePosition.y - p.y
        const mouseDistance = Math.sqrt(dx * dx + dy * dy)
        const mouseInfluence = 150
        
        if (mouseDistance < mouseInfluence) {
          const intensity = (1 - mouseDistance / mouseInfluence) * 0.5
          p.x -= dx * intensity * 0.01
          p.y -= dy * intensity * 0.01
          p.opacity = Math.min(0.35, p.opacity + 0.05)
        } else {
          p.opacity = Math.max(0.1, p.opacity - 0.005)
        }
        
        // Rebotar en los bordes
        if (p.x < 0) {
          p.x = 0
          p.angle = Math.PI - p.angle
        } else if (p.x > width) {
          p.x = width
          p.angle = Math.PI - p.angle
        }
        
        if (p.y < 0) {
          p.y = 0
          p.angle = -p.angle
        } else if (p.y > height) {
          p.y = height
          p.angle = -p.angle
        }
        
        // Dibujar partícula como punto brillante
        ctx.fillStyle = p.color + Math.floor(p.opacity * 99).toString(16).padStart(2, '0')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })
      
      // Dibujar conexiones entre partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxDistance) {
            drawConnections(particles[i], particles[j], distance, maxDistance)
          }
        }
      }
      
      // Programar el siguiente frame
      animationFrameRef.current = requestAnimationFrame(render)
    }
    
    // Iniciar animación
    animationFrameRef.current = requestAnimationFrame(render)
    
    // Limpiar
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [isBrowser, mousePosition])

  return (
    <section 
      ref={sectionRef}
      className="min-h-[100vh] w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Canvas para patrones tecnológicos */}
      {isBrowser && (
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0 w-full h-full"
          style={{ backgroundColor: 'rgba(13, 43, 13, 0.98)' }}
        />
      )}
      
      {/* Elementos pulsantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute -bottom-32 right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-10"
          style={{
            filter: 'blur(80px)',
            transform: isBrowser ? `translate(${30 - (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 40}px, ${50 - (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 40}px)` : 'translate(0px, 0px)',
            animation: 'pulse-slow 12s infinite alternate'
          }}
        ></div>
        <div 
          className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-gradient-to-r from-green-600 to-green-300 rounded-full opacity-10"
          style={{
            filter: 'blur(80px)',
            transform: isBrowser ? `translate(${-30 - (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 50}px, ${-50 - (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 50}px)` : 'translate(0px, 0px)',
            animation: 'pulse-slow 15s infinite alternate-reverse'
          }}
        ></div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hola, soy{' '}
              <span className="text-green-400 relative">
                Julian
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-400 opacity-70 rounded"></span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              <span>{typedText}</span>
              <span className="animate-blink ml-1">|</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              Desarrollador Full Stack especializado en crear aplicaciones web robustas, desde la arquitectura del backend hasta interfaces dinámicas y escalables.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">Contáctame</span>
                <span className="absolute inset-0 bg-white opacity-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
              <a 
                href="#projects" 
                className="bg-transparent border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">Ver proyectos</span>
                <span className="absolute inset-0 bg-green-400 opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500 shadow-2xl group">
              {/* Efectos de brillo en la imagen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500 to-transparent opacity-20"
                style={{
                  transform: isBrowser ? `rotate(${45 + (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 50}deg)` : 'rotate(45deg)',
                  transition: 'transform 0.5s ease-out'
                }}
              ></div>
              
              {/* Máscara de circuitos sobre la imagen */}
              <div className="absolute inset-0 opacity-30 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage: 'url("/circuit-pattern.png")',
                  backgroundSize: 'cover',
                  animation: 'circuit-shift 20s infinite linear'
                }}
              ></div>
              
              {/* Reemplaza esta imagen con tu foto profesional */}
              <Image
                src="/foto-perfil.jpeg"
                alt="Julian - Programador Full Stack"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Borde brillante */}
              <div className="absolute inset-0 border-8 border-green-500 opacity-10"
                style={{
                  animation: 'border-pulse 2s infinite ease-in-out'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 