'use client'

import { createContext, useState, useEffect, useContext, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string // Función para traducir textos
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Diccionarios de traducciones 
const translations = {
  es: {
    // Header y navegación
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': '¡Hola! Soy',
    'hero.role': 'Programador Full Stack',
    'hero.cta': 'Contáctame',
    
    // About
    'about.title': 'Sobre Mí',
    'about.student': 'Estudiante',
    'about.fullstack': 'Full Stack',
    'about.music': 'Amante de la música',
    'about.intro1': '¡Hola! Soy',
    'about.intro2': 'tengo 20 años y soy estudiante de Tecnología en Desarrollo de Sistemas Informáticos en las Unidades Tecnológicas de Santander (UTS).',
    'about.intro3': 'Actualmente también formo parte del programa de formación intensiva en Campuslands, donde he tenido la oportunidad de aplicar mis conocimientos en entornos reales de desarrollo y colaborar activamente como programador dentro de un equipo multidisciplinario.',
    'about.intro4': 'Me apasiona el aprendizaje continuo, la investigación tecnológica y los desafíos que me permiten crecer tanto a nivel técnico como personal.',
    
    // Skills
    'skills.title': 'Mis Habilidades',
    'skills.frontend': 'Frontend',
    'skills.frameworks': 'Frameworks',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas',
    'skills.js.backend': 'JavaScript Backend',
    'skills.java.backend': 'Java Backend',
    'skills.php.backend': 'PHP Backend',
    'skills.databases': 'Bases de Datos',
    'skills.api': 'API Development',
    'skills.flutter': 'Flutter',
    'skills.dart': 'Dart',
    'skills.mobile': 'Desarrollo Móvil',
    
    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.filter.all': 'Todos',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    
    // Contact
    'contact.title': 'Contáctame',
    'contact.subtitle': 'Hablemos',
    'contact.desc': '¿Tienes alguna pregunta o proyecto en mente? Estaré encantado de ayudarte. Completa el formulario y me pondré en contacto contigo lo antes posible.',
    'contact.email': 'Email',
    'contact.location': 'Ubicación',
    'contact.socials': 'Redes Sociales',
    'contact.form.name': 'Nombre completo',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.',
    'contact.form.error': 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    
    // Config Menu
    'config.title': 'Configuración',
    'config.theme': 'Tema',
    'config.theme.light': 'Claro',
    'config.theme.dark': 'Oscuro',
    'config.language': 'Idioma',
    'config.language.es': 'Español',
    'config.language.en': 'English',
    'config.textSize': 'Tamaño de texto',
  },
  en: {
    // Header y navegación
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello! I am',
    'hero.role': 'Full Stack Developer',
    'hero.cta': 'Contact me',
    
    // About
    'about.title': 'About Me',
    'about.student': 'Student',
    'about.fullstack': 'Full Stack',
    'about.music': 'Music lover',
    'about.intro1': 'Hello! I am',
    'about.intro2': 'I am 19 years old and I am a student of Technology in Computer Systems Development at the Technological Units of Santander (UTS).',
    'about.intro3': 'I am also currently part of the intensive training program at Campuslands, where I have had the opportunity to apply my knowledge in real development environments and actively collaborate as a programmer within a multidisciplinary team.',
    'about.intro4': 'I am passionate about continuous learning, technological research, and challenges that allow me to grow both technically and personally.',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.frontend': 'Frontend',
    'skills.frameworks': 'Frameworks',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'skills.js.backend': 'JavaScript Backend',
    'skills.java.backend': 'Java Backend',
    'skills.php.backend': 'PHP Backend',
    'skills.databases': 'Databases',
    'skills.api': 'API Development',
    'skills.flutter': 'Flutter',
    'skills.dart': 'Dart',
    'skills.mobile': 'Mobile Development',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.filter.all': 'All',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Let\'s Talk',
    'contact.desc': 'Do you have a question or project in mind? I\'ll be happy to help. Fill out the form and I\'ll get back to you as soon as possible.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.socials': 'Social Networks',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! I will contact you soon.',
    'contact.form.error': 'There was an error sending the message. Please try again.',
    
    // Config Menu
    'config.title': 'Settings',
    'config.theme': 'Theme',
    'config.theme.light': 'Light',
    'config.theme.dark': 'Dark',
    'config.language': 'Language',
    'config.language.es': 'Español',
    'config.language.en': 'English',
    'config.textSize': 'Text Size',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es') // Español por defecto
  
  // Efecto para inicializar el idioma
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      // Detectar el idioma del navegador
      const browserLang = navigator.language.split('-')[0]
      setLanguage(browserLang === 'es' ? 'es' : 'en')
    }
  }, [])
  
  // Efecto para guardar el idioma seleccionado
  useEffect(() => {
    localStorage.setItem('language', language)
    // Puedes agregar aquí más lógica si necesitas cambiar algo en la aplicación cuando cambia el idioma
  }, [language])
  
  // Función para traducir textos
  const t = (key: string): string => {
    // @ts-ignore: El error es por tipado, pero la función funciona correctamente
    return translations[language][key] || key
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 