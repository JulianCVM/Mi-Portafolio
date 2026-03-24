'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-bar')
          bars.forEach(bar => {
            const width = bar.getAttribute('data-width')
            if (width) {
              ;(bar as HTMLElement).style.width = width
            }
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen pt-[100px] pb-[60px] flex flex-col justify-center container-custom">
      <div className="mb-12">
        <span className="comment block mb-2">// analyze technical capabilities</span>
        <h2 className="section-title">SkillMatrix.<span className="keyword">analyze</span>()</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Tech Radar */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto rounded-full border border-border overflow-hidden flex items-center justify-center font-sans bg-bg/50 backdrop-blur-sm">
          {/* Rings */}
          <div className="absolute w-[30%] h-[30%] rounded-full border border-border"></div>
          <div className="absolute w-[60%] h-[60%] rounded-full border border-border"></div>
          <div className="absolute w-[85%] h-[85%] rounded-full border border-border"></div>
          <div className="absolute w-[98%] h-[98%] rounded-full border border-border"></div>
          
          {/* Crosshairs */}
          <div className="absolute w-full h-px bg-border top-1/2"></div>
          <div className="absolute h-full w-px bg-border left-1/2"></div>
          
          {/* Labels */}
          <div className="absolute text-[0.7rem] tracking-[2px] text-orange top-[60%] left-[52%]">ADOPT</div>
          <div className="absolute text-[0.7rem] tracking-[2px] text-blue top-[75%] left-[52%]">TRIAL</div>
          <div className="absolute text-[0.7rem] tracking-[2px] text-muted top-[88%] left-[52%]">ASSESS</div>
          <div className="absolute text-[0.7rem] tracking-[2px] text-muted top-[2%] left-[52%]">HOLD</div>
          
          {/* Center */}
          <div className="relative z-10 text-orange text-2xl font-bold font-display text-center bg-bg rounded-full p-3">
            ☕<br/>JAVA
          </div>
          
          {/* Dots */}
          {/* Adopt (Orange) */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-orange shadow-[0_0_10px_var(--orange)] -translate-x-1/2 -translate-y-1/2 top-[35%] left-[65%] before:content-['Spring_Boot'] before:absolute before:left-3.5 before:-top-1 before:text-[0.7rem] before:whitespace-nowrap before:text-text"></div>
          <div className="absolute w-2.5 h-2.5 rounded-full bg-orange shadow-[0_0_10px_var(--orange)] -translate-x-1/2 -translate-y-1/2 top-[45%] left-[35%] before:content-['PHP/Laravel'] before:absolute before:left-3.5 before:-top-1 before:text-[0.7rem] before:whitespace-nowrap before:text-text"></div>
          <div className="absolute w-2.5 h-2.5 rounded-full bg-orange shadow-[0_0_10px_var(--orange)] -translate-x-1/2 -translate-y-1/2 top-[65%] left-[40%] before:content-['PostgreSQL'] before:absolute before:-left-20 before:-top-1 before:text-[0.7rem] before:whitespace-nowrap before:text-text"></div>
          <div className="absolute w-2.5 h-2.5 rounded-full bg-orange shadow-[0_0_10px_var(--orange)] -translate-x-1/2 -translate-y-1/2 top-[30%] left-[45%] before:content-['Node.js'] before:absolute before:-left-16 before:-top-1 before:text-[0.7rem] before:whitespace-nowrap before:text-text"></div>
          
          {/* Trial (Blue) */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-blue shadow-[0_0_10px_var(--blue)] -translate-x-1/2 -translate-y-1/2 top-[75%] left-[65%] before:content-['.NET_Core'] before:absolute before:left-3.5 before:-top-1 before:text-[0.7rem] before:whitespace-nowrap before:text-text"></div>
          <div className="absolute w-2.5 h-2.5 rounded-full bg-blue shadow-[0_0_10px_var(--blue)] -translate-x-1/2 -translate-y-1/2 top-[80%] left-[40%] before:content-['Docker'] before:absolute before:-left-12 before:-top-1 before:text-[0.7rem] before:whitespace-nowrap before:text-text"></div>
          <div className="absolute w-2.5 h-2.5 rounded-full bg-blue shadow-[0_0_10px_var(--blue)] -translate-x-1/2 -translate-y-1/2 top-[25%] left-[75%] before:content-['React/Next'] before:absolute before:left-3.5 before:-top-1 before:text-[0.7rem] before:whitespace-nowrap before:text-text"></div>
          
          {/* Assess/Hold (Muted) */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-muted -translate-x-1/2 -translate-y-1/2 top-[15%] left-[20%] before:content-['Kubernetes'] before:absolute before:-left-20 before:-top-1 before:text-[0.7rem] before:whitespace-nowrap before:text-text"></div>
          <div className="absolute w-2.5 h-2.5 rounded-full bg-muted -translate-x-1/2 -translate-y-1/2 top-[85%] left-[15%] before:content-['Python'] before:absolute before:left-3.5 before:-top-1 before:text-[0.7rem] before:whitespace-nowrap before:text-text"></div>
        </div>
        
        {/* Terminal Progress Bars */}
        <div className="flex flex-col gap-8 font-sans">
          <div>
            <div className="text-muted text-sm mb-4">▼ Backend Core</div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Java / Spring Boot</span>
                <span className="type">95%</span>
              </div>
              <div className="w-full h-2 bg-bg-card border border-border rounded-full overflow-hidden">
                <div className="skill-bar h-full w-0 bg-orange shadow-[0_0_8px_var(--orange)] transition-all duration-1000 ease-out" data-width="95%"></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>PHP / Laravel</span>
                <span className="type">90%</span>
              </div>
              <div className="w-full h-2 bg-bg-card border border-border rounded-full overflow-hidden">
                <div className="skill-bar h-full w-0 bg-orange shadow-[0_0_8px_var(--orange)] transition-all duration-1000 ease-out delay-100" data-width="90%"></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Node.js / Express</span>
                <span className="type">85%</span>
              </div>
              <div className="w-full h-2 bg-bg-card border border-border rounded-full overflow-hidden">
                <div className="skill-bar h-full w-0 bg-orange shadow-[0_0_8px_var(--orange)] transition-all duration-1000 ease-out delay-200" data-width="85%"></div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-muted text-sm mb-4">▼ Infrastructure & DBs</div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>SQL (MySQL / PostgreSQL)</span>
                <span className="string">90%</span>
              </div>
              <div className="w-full h-2 bg-bg-card border border-border rounded-full overflow-hidden">
                <div className="skill-bar h-full w-0 bg-blue shadow-[0_0_8px_var(--blue)] transition-all duration-1000 ease-out delay-300" data-width="90%"></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Docker / DevOps</span>
                <span className="string">80%</span>
              </div>
              <div className="w-full h-2 bg-bg-card border border-border rounded-full overflow-hidden">
                <div className="skill-bar h-full w-0 bg-blue shadow-[0_0_8px_var(--blue)] transition-all duration-1000 ease-out delay-400" data-width="80%"></div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-muted text-sm mb-4">▼ Frontend</div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>TypeScript / React</span>
                <span className="comment">70%</span>
              </div>
              <div className="w-full h-2 bg-bg-card border border-border rounded-full overflow-hidden">
                <div className="skill-bar h-full w-0 bg-green shadow-[0_0_8px_var(--green)] transition-all duration-1000 ease-out delay-500" data-width="70%"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}