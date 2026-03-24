'use client'

const skillsData = [
  { category: 'BACKEND & APIs', items: ['Java', 'PHP', 'C#', 'Node.js', 'Spring Boot', 'Laravel', '.NET', 'Slim'] },
  { category: 'BASE DE DATOS', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'] },
  { category: 'DEVOPS', items: ['Docker', 'Kubernetes', 'DevContainers', 'Git'] },
  { category: 'ARQUITECTURA', items: ['Clean Architecture', 'Hexagonal', 'Microservicios', 'SOLID'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-jp-bg w-full border-b-2 border-jp-black mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-4 border-jp-black bg-jp-red p-8 md:p-12 relative overflow-hidden group">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent bg-[length:20px_20px]"></div>

          {/* Japanese decorative text */}
          <div className="absolute -top-10 -right-10 opacity-10 font-bold text-jp-black text-9xl leading-none rotate-12 select-none group-hover:rotate-6 transition-all duration-700">
            技術・スキル
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-12 uppercase relative z-10 drop-shadow-[2px_2px_0_rgba(17,17,17,1)]">
            Habilidades <br/> Técnicas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {skillsData.map((skillGroup, idx) => (
              <div key={idx} className="bg-jp-black p-6 border-2 border-white transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[4px_4px_0_rgba(255,255,255,1)]">
                <h3 className="text-white font-extrabold text-lg mb-4 uppercase tracking-widest border-b-2 border-jp-red pb-2">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-gray-300 font-bold text-sm tracking-wide flex items-center">
                      <span className="w-1.5 h-1.5 bg-jp-red mr-2 inline-block"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}