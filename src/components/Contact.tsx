'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseStatus, setResponseStatus] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResponseStatus(null)
    
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setResponseStatus(200)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    setTimeout(() => setResponseStatus(null), 5000)
  }

  return (
    <section id="contact" className="min-h-screen pt-[100px] pb-[60px] flex flex-col justify-center container-custom">
      <div className="mb-12">
        <span className="comment block mb-2">// ContactController.sendMessage()</span>
        <h2 className="section-title"><span className="type">@PostMapping</span>(<span className="string">"/api/v1/contact"</span>)</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8">
        
        <div className="flex flex-col gap-6">
          <div className="card !p-0 overflow-hidden">
            <div className="bg-muted/10 p-3 border-b border-border text-sm font-sans flex justify-between">
              <span>{t('contact.headers')}</span>
              <span className="text-muted">{t('contact.items')}</span>
            </div>
            <div className="p-4 text-sm font-sans flex flex-col gap-2">
              <div className="flex"><span className="w-24 text-blue">Host:</span><span className="text-text">portfolio.julian.dev</span></div>
              <div className="flex"><span className="w-24 text-blue">Content-Type:</span><span className="text-orange">application/json</span></div>
              <div className="flex"><span className="w-24 text-blue">Authorization:</span><span className="text-muted">Bearer [Hidden]</span></div>
            </div>
          </div>
          
          <div className="card !p-0 overflow-hidden">
            <div className="bg-muted/10 p-3 border-b border-border text-sm font-sans">
              {t('contact.info')}
            </div>
            <div className="p-4 text-sm font-sans flex flex-col gap-4">
              <a href="mailto:juliancamilovm22@gmail.com" className="flex items-center gap-3 text-text hover:text-orange transition-colors">
                <span className="bg-bg-card p-2 border border-border rounded-sm">✉</span>
                <span>juliancamilovm22@gmail.com</span>
              </a>
              <a href="https://github.com/JulianCVM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text hover:text-orange transition-colors">
                <span className="bg-bg-card p-2 border border-border rounded-sm">⌨</span>
                <span>github.com/JulianCVM</span>
              </a>
              <a href="https://www.linkedin.com/in/julian-camilo-villamizar-montañez-a65ab9232/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text hover:text-orange transition-colors">
                <span className="bg-bg-card p-2 border border-border rounded-sm">💼</span>
                <span>LinkedIn Profile</span>
              </a>
              <div className="flex items-center gap-3 text-muted">
                <span className="bg-bg-card p-2 border border-border rounded-sm">📍</span>
                <span>Bucaramanga, Colombia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card !p-0 overflow-hidden flex flex-col">
          <div className="bg-muted/10 p-3 border-b border-border flex items-center justify-between text-sm font-sans">
            <div className="flex items-center gap-2">
              <span className="text-green font-bold">POST</span>
              <span className="text-muted">/api/v1/contact/send</span>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-border cursor-pointer hover:bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-border cursor-pointer hover:bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-border cursor-pointer hover:bg-green"></span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 flex-grow font-sans">
            <div className="text-muted text-sm mb-2">{'{'}</div>
            
            <div className="pl-6 flex flex-col gap-4">
              <div className="flex items-start md:items-center flex-col md:flex-row gap-2">
                <label className="text-blue w-24 shrink-0">"name":</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="bg-bg-card border border-border px-3 py-1.5 w-full focus:outline-none focus:border-orange text-string placeholder:text-muted/50 rounded-sm"
                  placeholder={`"${t('contact.form.name')}"`}
                />
                <span className="text-muted hidden md:inline">,</span>
              </div>
              
              <div className="flex items-start md:items-center flex-col md:flex-row gap-2">
                <label className="text-blue w-24 shrink-0">"email":</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="bg-bg-card border border-border px-3 py-1.5 w-full focus:outline-none focus:border-orange text-string placeholder:text-muted/50 rounded-sm"
                  placeholder={`"${t('contact.form.email')}"`}
                />
                <span className="text-muted hidden md:inline">,</span>
              </div>
              
              <div className="flex items-start md:items-center flex-col md:flex-row gap-2">
                <label className="text-blue w-24 shrink-0">"subject":</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  className="bg-bg-card border border-border px-3 py-1.5 w-full focus:outline-none focus:border-orange text-string placeholder:text-muted/50 rounded-sm"
                  placeholder={`"${t('contact.form.subject')}"`}
                />
                <span className="text-muted hidden md:inline">,</span>
              </div>
              
              <div className="flex items-start flex-col md:flex-row gap-2">
                <label className="text-blue w-24 shrink-0 pt-1.5">"message":</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows={4}
                  className="bg-bg-card border border-border px-3 py-1.5 w-full focus:outline-none focus:border-orange text-string placeholder:text-muted/50 rounded-sm resize-none"
                  placeholder={`"${t('contact.form.message')}"`}
                ></textarea>
              </div>
            </div>
            
            <div className="text-muted text-sm mt-2">{'}'}</div>
            
            <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-3">
                {responseStatus === 200 && (
                  <span className="text-green text-sm flex items-center gap-2 animate-pulse-glow">
                    <span className="w-2 h-2 rounded-full bg-green"></span>
                    {t('contact.delivered')}
                  </span>
                )}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-solid flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </section>
  )
}