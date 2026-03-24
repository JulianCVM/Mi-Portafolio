'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-12 bg-jp-bg w-full border-t-2 border-jp-black mt-12 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-jp-black mb-8 uppercase">
          Sobre Mí
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portrait Image */}
          <div className="lg:col-span-1 border-2 border-jp-black bg-jp-black aspect-[3/4] relative overflow-hidden group">
            <Image src="/neon_portrait.png" alt="Neon Portrait" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute top-4 left-4 bg-jp-red text-white font-bold px-3 py-1 text-xs tracking-widest border-2 border-jp-black">
              PERFIL
            </div>
            {/* Japanese Text Vertical */}
            <div className="absolute top-1/4 right-2 text-white font-bold text-2xl opacity-70 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]" style={{ writingMode: 'vertical-rl' }}>
              開発者
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:col-span-2 flex flex-col justify-center border-2 border-jp-black bg-white p-8 md:p-12 relative overflow-hidden">
             {/* Decorative Background grid lines */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-jp-black mb-4 uppercase relative z-10">Julián Villamizar</h3>
            <div className="flex gap-2 mb-6 relative z-10">
              <span className="bg-jp-black text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">Backend</span>
              <span className="bg-jp-red text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">Arquitectura</span>
            </div>
            
            <p className="text-lg text-jp-black font-semibold mb-6 leading-relaxed relative z-10">
              Soy estudiante de Tecnología en Desarrollo de Sistemas y me apasiona resolver problemas complejos con código. Me adapto súper rápido a nuevos desafíos y siempre estoy buscando la forma más creativa de hacer que las cosas funcionen mejor.
            </p>
            <p className="text-lg text-gray-700 font-medium mb-6 leading-relaxed relative z-10">
              Me especializo en desarrollo backend: me encanta trabajar con <span className="text-jp-red font-bold underline decoration-2 underline-offset-4">Docker y Kubernetes</span> para containerización, manejar bases de datos como <span className="text-jp-red font-bold underline decoration-2 underline-offset-4">MySQL y PostgreSQL</span>, y construir aplicaciones robustas con <span className="text-jp-red font-bold underline decoration-2 underline-offset-4">Spring Boot, Laravel y .NET</span>.
            </p>
            <p className="text-lg text-gray-700 font-medium leading-relaxed relative z-10">
              Desarrollo de módulos de software en equipos ágiles con Node.js, TypeScript y Prisma ORM. Aplicación de mejores prácticas, optimizaciones de rendimiento y arquitectura backend escalable.
            </p>
            
            <div className="mt-8 pt-6 border-t-2 border-jp-black grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              <div>
                <p className="text-4xl font-extrabold text-jp-red drop-shadow-[2px_2px_0_rgba(17,17,17,1)]">3+</p>
                <p className="text-xs font-bold text-jp-black uppercase tracking-widest mt-1">Años Exp.</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-jp-red drop-shadow-[2px_2px_0_rgba(17,17,17,1)]">20+</p>
                <p className="text-xs font-bold text-jp-black uppercase tracking-widest mt-1">Proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}