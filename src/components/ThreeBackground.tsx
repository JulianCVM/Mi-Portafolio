'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, TorusKnot, Icosahedron } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function BrutalistGeometry() {
  const outerGroup = useRef<THREE.Group>(null)
  const innerGroup = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (outerGroup.current) {
      outerGroup.current.rotation.y = state.clock.elapsedTime * 0.05
      outerGroup.current.rotation.x = state.clock.elapsedTime * 0.02
    }
    if (innerGroup.current) {
      innerGroup.current.rotation.y = -state.clock.elapsedTime * 0.1
      innerGroup.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <>
      <group ref={outerGroup}>
        {/* Massive wireframe torus knot framing the scene */}
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <TorusKnot args={[10, 1.5, 100, 16]} position={[0, 0, -20]}>
            <meshBasicMaterial color="#111111" wireframe={true} transparent opacity={0.1} />
          </TorusKnot>
        </Float>
      </group>

      <group ref={innerGroup}>
        {/* Floating aggressive geometric core */}
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Icosahedron args={[3, 0]} position={[-5, 2, -15]}>
            <meshStandardMaterial color="#FF2A2A" emissive="#550000" emissiveIntensity={0.5} roughness={0.4} />
          </Icosahedron>
        </Float>
        
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
          <Icosahedron args={[2, 0]} position={[6, -4, -12]}>
            <meshBasicMaterial color="#FF2A2A" wireframe={true} transparent opacity={0.5} />
          </Icosahedron>
        </Float>
      </group>

      {/* Scattered particles for depth */}
      <Sparkles count={200} scale={40} size={3} speed={0.5} opacity={0.3} color="#FF2A2A" />
      <Sparkles count={100} scale={30} size={2} speed={0.2} opacity={0.5} color="#111111" />
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <fog attach="fog" args={['#F5F5F5', 10, 40]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FF2A2A" />
        <directionalLight position={[-5, -5, -5]} intensity={1} color="#ffffff" />
        <BrutalistGeometry />
      </Canvas>
    </div>
  )
}
