'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-jp-bg w-full border-t-2 border-jp-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-jp-black bg-white">
          
          {/* Left Side - Info */}
          <div className="p-8 md:p-12 bg-jp-black text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-jp-red opacity-10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-2 tracking-tight text-white relative z-10">Conectemos</h2>
            <div className="h-2 w-24 bg-jp-red mb-8 relative z-10"></div>
            
            <p className="text-lg text-gray-300 font-medium mb-12 relative z-10 leading-relaxed">
              ¿Tienes una idea, un proyecto o simplemente quieres decir hola? Llena el formulario o usa mis medios directos. Estoy listo para nuevos desafíos.
            </p>
            
            <div className="space-y-8 relative z-10">
              <div className="group border-l-4 border-jp-red pl-4">
                <p className="text-xs font-bold text-jp-red uppercase tracking-widest mb-1">Email Principal</p>
                <a href="mailto:juliancamilovm22@gmail.com" className="text-lg md:text-xl font-bold hover:text-jp-red transition-colors block text-white break-all">
                  juliancamilovm22@gmail.com
                </a>
              </div>
              <div className="group border-l-4 border-jp-red pl-4">
                <p className="text-xs font-bold text-jp-red uppercase tracking-widest mb-1">Email Secundario</p>
                <a href="mailto:juliancamilovm22@hotmail.com" className="text-lg md:text-xl font-bold hover:text-jp-red transition-colors block text-white break-all">
                  juliancamilovm22@hotmail.com
                </a>
              </div>
              <div className="group border-l-4 border-jp-red pl-4">
                <p className="text-xs font-bold text-jp-red uppercase tracking-widest mb-1">Ubicación</p>
                <p className="text-lg md:text-xl font-bold text-white">Bucaramanga, Colombia</p>
              </div>
            </div>
            
            {/* Japanese Text */}
            <div className="absolute bottom-4 right-4 text-white font-bold text-6xl opacity-5 select-none" style={{ writingMode: 'vertical-rl' }}>
              連絡先
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="p-8 md:p-12 relative bg-white">
             {/* Decorative Background grid lines */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
             
            <h3 className="text-2xl font-extrabold text-jp-black uppercase mb-8 relative z-10">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-jp-black uppercase tracking-widest mb-2">Nombre</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-white border-2 border-jp-black p-3 text-jp-black font-medium focus:outline-none focus:ring-0 focus:border-jp-red transition-colors rounded-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-jp-black uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-white border-2 border-jp-black p-3 text-jp-black font-medium focus:outline-none focus:ring-0 focus:border-jp-red transition-colors rounded-none"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-jp-black uppercase tracking-widest mb-2">Asunto</label>
                <input
                  type="text" id="subject" name="subject" required
                  value={formData.subject} onChange={handleChange}
                  className="w-full bg-white border-2 border-jp-black p-3 text-jp-black font-medium focus:outline-none focus:ring-0 focus:border-jp-red transition-colors rounded-none"
                  placeholder="El motivo de tu mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-jp-black uppercase tracking-widest mb-2">Mensaje</label>
                <textarea
                  id="message" name="message" required rows={4}
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-white border-2 border-jp-black p-3 text-jp-black font-medium focus:outline-none focus:ring-0 focus:border-jp-red transition-colors resize-none rounded-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-jp-red text-white border-2 border-jp-black font-extrabold uppercase tracking-widest py-4 hover:bg-jp-darkred transition-all duration-300 disabled:opacity-50 inline-block text-center shadow-[4px_4px_0_rgba(17,17,17,1)] hover:shadow-[2px_2px_0_rgba(17,17,17,1)] hover:-translate-y-1 active:shadow-none active:translate-y-1"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              
              {status === 'success' && (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 p-4 font-bold text-sm uppercase text-center mt-4">
                  ¡Mensaje enviado con éxito!
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-100 border-2 border-red-500 text-red-700 p-4 font-bold text-sm uppercase text-center mt-4">
                  Error. Inténtalo de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}