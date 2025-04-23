'use client'

import { FaGraduationCap, FaBriefcase, FaCode, FaMusic, FaLaptopCode, FaDatabase, FaJava, FaPython, FaServer, FaPhp, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiPostgresql, SiJavascript, SiTailwindcss, SiExpress, SiTypescript, SiBootstrap, SiDjango, SiLaravel } from 'react-icons/si'
import { TbBrandCodesandbox, TbBrandNextjs } from 'react-icons/tb'
import { IoLayersOutline } from 'react-icons/io5'
import { GiCubeforce } from 'react-icons/gi'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-900 rounded-full -mr-32 -mt-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 dark:bg-green-900 rounded-full -ml-32 -mb-32 opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title text-center mb-12 text-gray-800 dark:text-white">{t('about.title')}</h2>
        
        {/* Diseño tipo dashboard con grid - mejorada la distribución */}
        <div className="max-w-6xl mx-auto">
          
          {/* Fila principal - Perfil e introducción */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Tarjeta de perfil */}
            <div className="lg:col-span-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-5">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 mb-5 shadow-md">
                    <img 
                      src="/placeholder-profile.jpg"
                      alt="Julián Villamizar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-200/70 dark:bg-gray-700 rounded-lg shadow-sm">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-2 rounded-full flex-shrink-0">
                        <FaGraduationCap className="h-5 w-5" />
                      </span>
                      <div className="text-base font-semibold text-gray-800 dark:text-white">{t('about.student')}</div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-200/70 dark:bg-gray-700 rounded-lg shadow-sm">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-2 rounded-full flex-shrink-0">
                        <FaBriefcase className="h-5 w-5" />
                      </span>
                      <div className="text-base font-semibold text-gray-800 dark:text-white">{t('about.fullstack')}</div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-200/70 dark:bg-gray-700 rounded-lg shadow-sm">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 p-2 rounded-full flex-shrink-0">
                        <FaMusic className="h-5 w-5" />
                      </span>
                      <div className="text-base font-semibold text-gray-800 dark:text-white">{t('about.music')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tarjeta de introducción */}
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg h-full flex flex-col justify-center p-8">
                <div className="space-y-5">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {t('about.intro1')} <span className="font-bold text-green-600 dark:text-green-400">Julián Villamizar</span>, {t('about.intro2')}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {t('about.intro3')}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {t('about.intro4')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Encabezado de Habilidades Técnicas */}
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl mb-8">
            <div className="flex items-center gap-3">
              <FaCode className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Habilidades Técnicas</h3>
            </div>
          </div>
          
          {/* Habilidades técnicas - Diseño mejorado con cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Paradigmas y Patrones */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-l-4 border-green-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <IoLayersOutline className="text-green-600 dark:text-green-400" />
                  <span>Paradigmas y Patrones</span>
                </h4>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Programación Orientada a Objetos</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Encapsulamiento, Herencia, Polimorfismo</div>
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Patrón MVC</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Modelo-Vista-Controlador</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lenguajes de Programación */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-l-4 border-blue-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <FaCode className="text-blue-600 dark:text-blue-400" />
                  <span>Lenguajes de Programación</span>
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <FaJava className="text-3xl text-red-600 dark:text-red-400 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">Java</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-red-600 h-1.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <SiJavascript className="text-3xl text-yellow-500 dark:text-yellow-400 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">JavaScript</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <FaPhp className="text-3xl text-indigo-600 dark:text-indigo-400 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">PHP</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <FaPython className="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">Python</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arquitecturas */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-3 border-l-4 border-purple-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <GiCubeforce className="text-purple-600 dark:text-purple-400" />
                  <span>Arquitecturas</span>
                </h4>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Arquitectura Hexagonal</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Ports & Adapters, aislamiento del dominio</div>
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Clean Architecture</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Capas independientes, reglas de dependencia</div>
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Vertical Slicing</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Organización por capacidades de negocio</div>
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">MVW</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Model-View-Whatever, arquitectura flexible</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Frameworks */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 px-4 py-3 border-l-4 border-indigo-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <FaServer className="text-indigo-600 dark:text-indigo-400" />
                  <span>Frameworks</span>
                </h4>
              </div>
              <div className="p-5">
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm mb-3">
                  <SiSpringboot className="text-3xl text-green-600 dark:text-green-400 mr-3" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-white">Spring Boot</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Desarrollo de aplicaciones Java</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full">
                      <div className="bg-green-600 h-1.5 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <FaReact className="text-3xl text-blue-500 dark:text-blue-400 mr-3" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-white">React</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Desarrollo de interfaces de usuario</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bases de Datos */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-cyan-100 dark:bg-cyan-900/30 px-4 py-3 border-l-4 border-cyan-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <FaDatabase className="text-cyan-600 dark:text-cyan-400" />
                  <span>Bases de Datos</span>
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <SiMysql className="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">MySQL</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <SiPostgresql className="text-3xl text-blue-800 dark:text-blue-500 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">PostgreSQL</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-blue-800 h-1.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tecnologías Frontend */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-3 border-l-4 border-orange-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <FaHtml5 className="text-orange-600 dark:text-orange-400" />
                  <span>Tecnologías Frontend</span>
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <FaHtml5 className="text-3xl text-orange-500 dark:text-orange-400 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">HTML5</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-orange-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <FaCss3Alt className="text-3xl text-blue-500 dark:text-blue-400 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">CSS3</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <SiTailwindcss className="text-3xl text-cyan-500 dark:text-cyan-400 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">Tailwind</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-cyan-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                    <SiBootstrap className="text-3xl text-purple-500 dark:text-purple-400 mb-2" />
                    <div className="font-medium text-center text-gray-800 dark:text-white">Bootstrap</div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                      <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Perfil Personal */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="bg-green-100 dark:bg-green-900/30 px-5 py-3 border-l-4 border-green-500">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
                <FaLaptopCode className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span>Perfil Personal</span>
              </h3>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-5">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Soy una persona con gran capacidad de adaptabilidad, comunicación efectiva y una visión analítica que me permite entender y resolver problemas desde diferentes perspectivas. Me interesa profundamente el desarrollo full stack, con una proyección clara hacia el liderazgo técnico y la gestión de proyectos tecnológicos, áreas en las que aspiro consolidar mi carrera como futuro ingeniero de sistemas.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-4">
                  Más allá del mundo del código, me encanta la música clásica, ya que me ayuda a concentrarme y mantenerme enfocado. Siempre estoy en búsqueda de nuevas tecnologías que pueda aprender y aplicar para crear soluciones reales que impacten positivamente.
                </p>
              </div>
            </div>
          </div>
          
          {/* Educación y Experiencia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Educación */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-5 py-3 border-l-4 border-blue-500">
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-white">
                  <FaGraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>Educación</span>
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-gray-800 dark:text-white">Tecnología en Desarrollo de Sistemas Informáticos</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Unidades Tecnológicas de Santander (UTS)</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">En curso</div>
                  </li>
                  <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-gray-800 dark:text-white">Programa de Formación</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Campuslands</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">En curso</div>
                  </li>
                  <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-gray-800 dark:text-white">Certificación de Inglés B1</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Curso de Inglés</div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Experiencia */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-5 py-3 border-l-4 border-green-500">
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-white">
                  <FaBriefcase className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span>Experiencia</span>
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-gray-800 dark:text-white">Desarrollador - Solvo Global</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Enero 2024 - Presente</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Trabajo como desarrollador en una célula de desarrollo, aplicando conocimientos técnicos en proyectos reales.</div>
                  </li>
                  <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-gray-800 dark:text-white">Proyecto Académico</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Prototipo de Aplicación Móvil</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Desarrollo de un prototipo de aplicación móvil como proyecto de grado.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 