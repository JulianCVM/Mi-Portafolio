'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="min-h-screen pt-[100px] pb-[60px] flex flex-col justify-center container-custom">
      <div className="mb-12">
        <span className="comment block mb-2">// Developer.java</span>
        <h2 className="section-title">class About extends Human</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-16">
        <div className="flex flex-col">
          <div className="relative w-[250px] h-[250px] mx-auto group">
            {/* Corner brackets */}
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-orange z-10 transition-all duration-300 group-hover:-top-4 group-hover:-left-4"></div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-orange z-10 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4"></div>
            
            <div className="w-full h-full bg-bg-card/80 border border-border rounded-full flex items-center justify-center font-display text-4xl font-extrabold text-muted relative z-[2]">
              JV
            </div>
            
            {/* Spinning decor */}
            <div className="absolute inset-0 rounded-full border border-dashed border-muted animate-spin-slow z-[1]"></div>
          </div>
          
          <div className="mt-8 flex flex-col gap-4">
            <div className="inline-flex bg-muted/10 border-l-2 border-orange py-2 px-4 text-sm font-sans">
              📍 Ubicación: Colombia
            </div>
            <div className="inline-flex bg-muted/10 border-l-2 border-orange py-2 px-4 text-sm font-sans">
              ☕ Combustible: Café++
            </div>
            <div className="inline-flex bg-muted/10 border-l-2 border-orange py-2 px-4 text-sm font-sans">
              🌐 Stack: Java, PHP, Node.js, C#
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          {/* UML Diagram */}
          <div className="card !p-0 overflow-hidden">
            <div className="bg-orange text-bg p-2 text-center font-display font-bold border-b border-border">
              «Developer»<br/>Julián Villamizar
            </div>
            <div className="p-4 border-b border-border font-sans text-sm">
              <div className="mb-1.5">- name: String = "Julián Villamizar"</div>
              <div className="mb-1.5">- role: String = "Backend Developer"</div>
              <div className="mb-1.5">- passion: String = "{t('about.intro4')?.substring(0, 30) || 'clean arch'}..."</div>
            </div>
            <div className="p-4 font-sans text-sm">
              <div className="mb-1.5">+ buildAPI(): RestResponse</div>
              <div className="mb-1.5">+ designSystem(): Architecture</div>
              <div className="mb-1.5">+ solveProblems(): Solution ∞</div>
            </div>
          </div>
          
          {/* Git Log */}
          <div className="mt-12 border-l-2 border-border pl-8 flex flex-col gap-8 relative before:content-['git'] before:absolute before:-left-10 before:top-1/2 before:-translate-y-1/2 before:-rotate-90 before:text-muted before:tracking-[2px]">
            
            <div className="relative before:absolute before:-left-[2.1rem] before:top-1 before:w-3 before:h-3 before:bg-bg before:border-2 before:border-orange before:rounded-full">
              <div className="text-muted text-sm font-sans">commit a3f92b1</div>
              <div className="text-text font-bold font-display my-1">Desarrollador Backend</div>
              <div className="text-orange font-sans text-sm mb-1">Proyectos FinTech & GIS</div>
              <div className="text-muted text-sm font-sans">2021 - Presente</div>
              <div className="comment mt-2 text-sm font-sans">"Implementación de Clean Architecture, microservicios y bases de datos"</div>
            </div>

            <div className="relative before:absolute before:-left-[2.1rem] before:top-1 before:w-3 before:h-3 before:bg-bg before:border-2 before:border-orange before:rounded-full">
              <div className="text-muted text-sm font-sans">commit 7d421e0</div>
              <div className="text-text font-bold font-display my-1">Practicante - Programador</div>
              <div className="text-orange font-sans text-sm mb-1">SOLVO S.A.S</div>
              <div className="text-muted text-sm font-sans">Enero 2024 - Presente</div>
              <div className="comment mt-2 text-sm font-sans">"Desarrollo de módulos con Node.js, TypeScript y Prisma ORM"</div>
            </div>

            <div className="relative before:absolute before:-left-[2.1rem] before:top-1 before:w-3 before:h-3 before:bg-bg before:border-2 before:border-orange before:rounded-full">
              <div className="text-muted text-sm font-sans">commit 1a89c3d</div>
              <div className="text-text font-bold font-display my-1">Tecnología en Desarrollo</div>
              <div className="text-orange font-sans text-sm mb-1">UTS & Campuslands</div>
              <div className="text-muted text-sm font-sans">En curso</div>
              <div className="comment mt-2 text-sm font-sans">"Formación en sistemas informáticos y desarrollo avanzado"</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}