'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [typedLines, setTypedLines] = useState<string[]>([])
  
  const codeLines = [
    '<span class="keyword">public class</span> <span class="type">Developer</span> {',
    '  <span class="text-text">name</span> = <span class="string">"Julián Villamizar"</span>;',
    `  <span class="text-text">role</span> = <span class="string">"${t('hero.role')}"</span>;`,
    `  <span class="text-text">status</span> = <span class="string">"${t('hero.cta')}"</span>;`,
    '}'
  ]

  useEffect(() => {
    setTypedLines([]) // reset when language changes
    let timeoutIds: NodeJS.Timeout[] = []
    
    codeLines.forEach((line, index) => {
      const id = setTimeout(() => {
        setTypedLines(prev => {
          if (prev.length === index) {
            return [...prev, line]
          }
          return prev
        })
      }, 400 * (index + 1))
      timeoutIds.push(id)
    })
    
    return () => {
      timeoutIds.forEach(clearTimeout)
    }
  }, [t])

  return (
    <section id="home" className="min-h-screen pt-[100px] pb-[60px] flex flex-col justify-center opacity-0 animate-section-fade container-custom">
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 items-center w-full">
        <div className="flex flex-col">
          <div className="text-[clamp(1.2rem,2.5vw,2.5rem)] leading-relaxed font-sans font-medium bg-bg/50 backdrop-blur-sm p-4 rounded-md">
            {typedLines.map((line, i) => (
              <div key={i} className="flex mb-1">
                <span className="text-muted w-12 shrink-0 select-none">{i + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: line }} />
                {i === typedLines.length - 1 && i === codeLines.length - 1 && (
                  <span className="inline-block w-[10px] h-[1.1em] bg-text align-bottom animate-blink ml-1"></span>
                )}
                {i === typedLines.length - 1 && i < codeLines.length - 1 && (
                  <span className="inline-block w-[10px] h-[1.1em] bg-text align-bottom ml-1"></span>
                )}
              </div>
            ))}
            {typedLines.length === 0 && (
                <div className="flex mb-1">
                   <span className="text-muted w-12 shrink-0 select-none">1</span>
                   <span className="inline-block w-[10px] h-[1.1em] bg-text align-bottom animate-blink ml-1"></span>
                </div>
            )}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 relative z-10">
            <a href="#projects" className="btn btn-solid animate-pulse-glow">▶ Run {t('nav.projects')}</a>
            <a href="#contact" className="btn btn-outline">{t('hero.cta')}</a>
          </div>
        </div>
        
        <div className="hidden md:flex flex-col items-center gap-8 text-sm font-sans mt-12 md:mt-0 relative z-10">
          <div className="card w-fit !p-3 border-t-2 border-t-orange">
            <span className="type">[Client]</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-green text-xl leading-none">
            <div className="text-muted text-xs">GET /</div>
            <div>│</div>
            <div>▼</div>
          </div>
          <div className="card w-fit !p-3 border-t-2 border-t-blue animate-pulse-glow-blue">
            <span className="keyword">[Portfolio.App]</span>
          </div>
          
          <div className="flex justify-between w-full relative before:absolute before:-top-8 before:left-[15%] before:right-[15%] before:h-px before:bg-blue">
            <div className="flex flex-col items-center w-[30%] text-blue relative before:w-px before:h-8 before:bg-blue after:content-['▼'] after:text-[0.7rem] after:-mt-1">
              <span className="absolute -top-6 bg-bg px-1 text-xs text-muted">module</span>
            </div>
            <div className="flex flex-col items-center w-[30%] text-blue relative before:w-px before:h-8 before:bg-blue after:content-['▼'] after:text-[0.7rem] after:-mt-1">
              <span className="absolute -top-6 bg-bg px-1 text-xs text-muted">module</span>
            </div>
            <div className="flex flex-col items-center w-[30%] text-blue relative before:w-px before:h-8 before:bg-blue after:content-['▼'] after:text-[0.7rem] after:-mt-1">
              <span className="absolute -top-6 bg-bg px-1 text-xs text-muted">module</span>
            </div>
          </div>
          
          <div className="flex gap-4 w-full justify-between">
            <div className="card w-full text-center !p-2 text-xs !border-border hover:!border-orange transition-colors">[{t('nav.about')}]</div>
            <div className="card w-full text-center !p-2 text-xs !border-border hover:!border-orange transition-colors">[{t('nav.projects')}]</div>
            <div className="card w-full text-center !p-2 text-xs !border-border hover:!border-orange transition-colors">[{t('nav.skills')}]</div>
          </div>
        </div>
      </div>
    </section>
  )
}