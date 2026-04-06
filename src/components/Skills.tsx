"use client";

import { useState, useEffect, useRef } from 'react';

const CATEGORY_COLORS = {
  Backend: '#F89820',
  Infrastructure: '#00D4FF',
  Frontend: '#39FF14',
  Other: '#8b949e'
};

const radarDots = [
  // Languages & Runtimes (Top-Right: 0 to 90) -> SVG angle starts at top (270)
  { id: 'java', name: 'Java 21', category: 'Backend', angle: 45, distance: 30, note: '7 years · Production use', color: CATEGORY_COLORS.Backend },
  { id: 'ts', name: 'TypeScript', category: 'Backend', angle: 25, distance: 55, note: '6 years · Expert', color: CATEGORY_COLORS.Backend },
  { id: 'python', name: 'Python', category: 'Other', angle: 70, distance: 80, note: '3 years · Utilities', color: CATEGORY_COLORS.Other },
  
  // Frameworks (Top-Left: 270 to 360)
  { id: 'spring', name: 'Spring Boot', category: 'Backend', angle: 315, distance: 40, note: '5 years · Microservices', color: CATEGORY_COLORS.Backend },
  { id: 'react', name: 'React', category: 'Frontend', angle: 340, distance: 65, note: '4 years · Advanced', color: CATEGORY_COLORS.Frontend },
  { id: 'hibernate', name: 'Hibernate', category: 'Backend', angle: 290, distance: 50, note: '5 years · Advanced', color: CATEGORY_COLORS.Backend },

  // Infrastructure (Bottom-Right: 90 to 180)
  { id: 'postgres', name: 'PostgreSQL', category: 'Infrastructure', angle: 135, distance: 50, note: '6 years · Expert', color: CATEGORY_COLORS.Infrastructure },
  { id: 'docker', name: 'Docker / GCP', category: 'Infrastructure', angle: 160, distance: 75, note: '5 years · Advanced', color: CATEGORY_COLORS.Infrastructure },
  { id: 'linux', name: 'Linux', category: 'Infrastructure', angle: 110, distance: 60, note: '7 years · Daily driver', color: CATEGORY_COLORS.Infrastructure },

  // Tools & Practices (Bottom-Left: 180 to 270)
  { id: 'vibecoding', name: 'Vibecoding', category: 'Backend', angle: 225, distance: 40, note: '3 years · Advanced', color: CATEGORY_COLORS.Backend },
  { id: 'prompt_eng', name: 'Prompt Eng', category: 'Infrastructure', angle: 200, distance: 65, note: '2 years · Advanced', color: CATEGORY_COLORS.Infrastructure },
  { id: 'n8n', name: 'n8n', category: 'Frontend', angle: 250, distance: 85, note: '4 years · Expert', color: CATEGORY_COLORS.Frontend },
];

function RadarSVG() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = () => setActiveTooltip(null);
    window.addEventListener('scroll', handleClickOutside, { passive: true });
    return () => window.removeEventListener('scroll', handleClickOutside);
  }, []);

  return (
    <div className="radar-container relative w-full aspect-square mx-auto" onMouseLeave={() => setActiveTooltip(null)}>
       {/* Responsive SVG Background */}
       <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
         <defs>
           <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0, 212, 255, 0.1)"></stop>
              <stop offset="100%" stopColor="transparent"></stop>
           </radialGradient>
         </defs>

         <circle cx="50" cy="50" r="50" fill="url(#radarGlow)" />
         
         {/* Grid Spokes */}
         <line x1="14.6" y1="14.6" x2="85.4" y2="85.4" stroke="rgba(0,212,255,0.15)" strokeWidth="0.3" />
         <line x1="85.4" y1="14.6" x2="14.6" y2="85.4" stroke="rgba(0,212,255,0.15)" strokeWidth="0.3" />
         
         {/* Quadrants */}
         <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(0,212,255,0.4)" strokeWidth="0.4" strokeDasharray="1,1" />
         <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(0,212,255,0.4)" strokeWidth="0.4" strokeDasharray="1,1" />
         
         {/* Rings */}
         <circle cx="50" cy="50" r="50" fill="none" className="ring-stroke" />
         <circle cx="50" cy="50" r="37.5" fill="none" className="ring-stroke" />
         <circle cx="50" cy="50" r="25" fill="none" className="ring-stroke" />
         <circle cx="50" cy="50" r="12.5" fill="none" className="ring-stroke opacity-75" strokeWidth="0.6" />
       </svg>

       {/* Ring Labels - Only visible using CSS media queries */}
       <div className="absolute inset-0 pointer-events-none ring-labels">
          {[
            { r: 50, text: 'HOLD' },
            { r: 37.5, text: 'ASSESS' },
            { r: 25, text: 'TRIAL' },
            { r: 12.5, text: 'ADOPT' }
          ].map((ring, i) => (
             <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: `${ring.r * 2}%`, height: `${ring.r * 2}%` }}>
                <span className="label top-label">{ring.text}</span>
                <span className="label bottom-label">{ring.text}</span>
                <span className="label left-label">{ring.text}</span>
                <span className="label right-label">{ring.text}</span>
             </div>
          ))}
       </div>

       {/* Quadrant Labels (Hidden on tablet portrait & mobile) */}
       {[
          { text: '"LANGUAGES & RUNTIMES"', rotate: 45 },
          { text: '"INFRASTRUCTURE"', rotate: 135 },
          { text: '"TOOLS & PRACTICES"', rotate: 225 },
          { text: '"FRAMEWORKS"', rotate: 315 },
       ].map(q => (
          <div key={q.text} className="absolute inset-0 pointer-events-none quad-labels" style={{ transform: `rotate(${q.rotate}deg)` }}>
             <span className="absolute top-[-5%] left-1/2 -translate-x-1/2 text-blue font-mono whitespace-nowrap">
               {q.text}
             </span>
          </div>
       ))}

       {/* Center JAVA Logo scaling with container */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 w-[25%] h-[25%] pointer-events-none">
          <div className="absolute inset-0 rounded-full radar-pulse bg-[#F89820]/40"></div>
          <div className="absolute inset-[-15%] rounded-full radar-pulse delay-1000 bg-[#F89820]/20"></div>
          
          <div className="w-[85%] h-[85%] rounded-full bg-[#050A18] border-2 border-[#F89820]/80 flex items-center justify-center shadow-[0_0_2vw_rgba(248,152,32,0.5)] z-10 relative">
             <svg className="w-[60%] h-[60%] text-[#F89820] drop-shadow-[0_0_5px_#F89820]" viewBox="0 0 24 24" fill="currentColor">
               <path d="M19.34,11.5c-0.12,0.95-0.62,1.38-1.55,1.75V11.5L19.34,11.5z M17.07,14c0.91,1.15,1.93,1.67,2.83,1.39  c1.19-0.37,1.67-1.59,1.63-3.15c0-0.42-0.21-0.78-0.63-1.07c-0.56-0.38-1.29-0.55-2.07-0.54v2h-1.76V8.92c1.94,0.01,3.29,0.56,4.02,1.55  c0.68,0.92,0.92,2.07,0.72,3.46c-0.35,2.44-1.92,4-4.74,4.24V14z"/>
               <path d="M15.42,18.06c-1.63,0.74-3.55,1.13-5.67,1.13c-3.12,0-5.74-0.81-7.7-2.34l0.41-0.91c1.86,1.44,4.35,2.2,7.31,2.2  c2.1,0,3.95-0.37,5.5-1.07L15.42,18.06z"/>
               <path d="M13.4,7.02c-0.82-0.66-1.57-0.97-2.33-1c-0.76-0.03-1.46,0.24-2.22,0.85c-0.76,0.61-1.41,0.96-2.09,1.11  C6.08,8.13,5.32,7.96,4.39,7.56L4.7,6.61c0.75,0.32,1.34,0.47,1.83,0.47c0.49,0,1.01-0.27,1.67-0.8C8.86,5.75,9.58,5.42,10.37,5.4  c0.79-0.02,1.63,0.33,2.6,1.12L13.4,7.02z"/>
               <path d="M14.28,4.72c-0.82-0.66-1.57-0.97-2.33-1c-0.76-0.03-1.46,0.24-2.22,0.85C8.97,5.18,8.32,5.53,7.64,5.68  C6.96,5.83,6.2,5.66,5.27,5.26L5.58,4.31C6.33,4.63,6.92,4.78,7.41,4.78c0.49,0,1.01-0.27,1.67-0.8c0.66-0.53,1.38-0.86,2.17-0.88  c0.79-0.02,1.63,0.33,2.6,1.12L14.28,4.72z"/>
               <path d="M15.1,9.39H4.11v1.94C4.11,15.2,7.49,18,10.87,18c3.38,0,5.92-2.8,5.92-6.68V9.39H15.1z M15,11.33c0,3.2-2.12,5.6-4.52,5.6  S5.95,14.53,5.95,11.33v-0.95H15V11.33z"/>
             </svg>
          </div>
          <div className="font-display font-bold text-[clamp(0.8rem,1.5vw,1.3rem)] tracking-wider text-white mt-[2%] z-10 drop-shadow-[0_0_5px_#F89820] bg-[#050A18] px-1 rounded">JAVA</div>
       </div>

       {/* Overlay Radar Dots logic using HTML percentages */}
       {radarDots.map((dot, i) => {
          const rad = (dot.angle - 90) * (Math.PI / 180);
          const x = Math.cos(rad) * (dot.distance / 2); // -50% to +50% from center
          const y = Math.sin(rad) * (dot.distance / 2);
          const isActive = activeTooltip === dot.id;
          
          return (
            <div key={dot.id} 
                 className={`absolute z-20 radar-dot-container ${isActive ? 'active' : ''}`}
                 style={{ 
                   top: `calc(50% + ${y}%)`,
                   left: `calc(50% + ${x}%)`,
                   '--x-offset': `${x}%`,
                   '--y-offset': `${y}%`,
                   '--delay': `${i * 25}ms`,
                   '--desktop-delay': `${i * 50}ms`
                 } as any}>
               
               <div className="relative flex items-center justify-center w-8 h-8 md:w-6 md:h-6 outline-none" 
                    tabIndex={0}
                    onMouseEnter={() => matchMedia('(hover: hover)').matches && setActiveTooltip(dot.id)}
                    onFocus={() => setActiveTooltip(dot.id)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTooltip(isActive ? null : dot.id);
                    }}>
                  {/* Visual Dot */}
                  <div className="radar-dot w-3.5 h-3.5 md:w-3.5 md:h-3.5 rounded-full" 
                       style={{ backgroundColor: dot.color, boxShadow: `0 0 10px ${dot.color}` }}></div>
                  
                  {/* Tooltip Card (Clamped Mobile + Desktop) */}
                  <div className="radar-tooltip">
                    <div className="font-display font-bold text-white text-[13px] md:text-sm flex items-center gap-2 mb-1">
                       <span className="w-2.5 h-2.5 md:w-2.5 md:h-2.5 rounded-full flex-shrink-0" style={{backgroundColor: dot.color, boxShadow: `0 0 5px ${dot.color}`}}></span>
                       <span>{dot.name}</span>
                    </div>
                    <div className="text-muted text-[11px] md:text-xs mb-1.5">{dot.category}</div>
                    <div className="text-muted text-[11px] border-t border-blue/20 pt-1.5 whitespace-nowrap overflow-hidden text-ellipsis">{dot.note}</div>
                  </div>
               </div>
            </div>
          )
       })}
    </div>
  )
}

function SkillGroup({ title, defaultOpen = true, children }: { title: string, defaultOpen?: boolean, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="mb-6 font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 text-white font-bold text-[clamp(0.9rem,3vw,1rem)] mb-3 w-full text-left tracking-wide min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 rounded transition-colors"
      >
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`}>▼</span> {title}
      </button>
      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-top overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0">
          <div className="flex flex-col gap-5 md:gap-4 pt-1">
             {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, icon, value, level, color, delay }: { name: string, icon: string, value: number, level: string, color: string, delay: number }) {
   const [visible, setVisible] = useState(false);
   const [count, setCount] = useState(0);
   const [isInteracting, setIsInteracting] = useState(false);
   const barRef = useRef(null);
   
   useEffect(() => {
     const obs = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
           setTimeout(() => setVisible(true), delay);
        }
     }, { threshold: 0.1 });
     if(barRef.current) obs.observe(barRef.current);
     return () => obs.disconnect();
   }, [delay]);

   useEffect(() => {
      if (!visible) return;
      let startTimestamp: number | null = null;
      const duration = 1500;
      const finalValue = value;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOutExpo * finalValue));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      const anim = window.requestAnimationFrame(step);
      return () => cancelAnimationFrame(anim);
   }, [visible, value]);

   return (
     <div className="group relative w-full skill-row" ref={barRef}>
       <div className="row-wrapper flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-2 gap-1 sm:gap-4">
           {/* Label Area */}
           <div className="flex items-center gap-2 text-text font-medium text-[clamp(0.75rem,2vw,0.85rem)] rounded transition-colors group-hover:text-white">
             {icon.length > 2 ? <span className="text-[10px] font-bold bg-[#0a1128] border border-blue/30 px-1 py-0.5 rounded text-blue w-6 text-center shadow-[0_0_8px_rgba(0,212,255,0.2)] whitespace-nowrap">{icon}</span> : <span className="w-6 text-center text-sm md:text-base whitespace-nowrap">{icon}</span>}
             <span className="truncate">{name}</span>
           </div>
           
           {/* Percentage label */}
           <div className="flex justify-end shrink-0 sm:ml-auto percentage-box">
             <span className="text-white font-mono font-bold text-xs md:text-sm bg-[#050A18] sm:pl-2 z-10">{count}%</span>
           </div>
       </div>
       
       <div className="relative w-full h-2 bg-[#0a1128] border border-blue/10 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" 
            tabIndex={0}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setTimeout(() => setIsInteracting(false), 2000)}
            onMouseEnter={() => matchMedia('(hover: hover)').matches && setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onFocus={() => setIsInteracting(true)}
            onBlur={() => setIsInteracting(false)}>
            
         {/* The fill mask */}
         <div className="absolute top-0 left-0 h-full rounded-full overflow-hidden skill-fill" 
              style={{ width: visible ? `${value}%` : '0%' }}>
            <div className="absolute inset-0 w-full h-full" 
                 style={{
                   background: `linear-gradient(90deg, ${color}22 0%, ${color} 100%)`,
                   boxShadow: `inset 0 0 4px ${color}`
                 }}>
               <div className={`absolute top-0 left-0 w-[50px] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent ${isInteracting ? 'animate-shimmer-sweep' : 'opacity-0'}`}></div>
            </div>
         </div>
         
         <div className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 bg-white rounded-full z-10 animate-[pulse_2s_infinite] skill-glow-dot"
              style={{ 
                left: visible ? `calc(${value}% - 5px)` : '0%', 
                opacity: visible ? 1 : 0,
                boxShadow: `0 0 10px 2px ${color}` 
              }}></div>
       </div>
       
       <div className="hidden min-[480px]:block absolute right-0 -bottom-[1.1rem] text-right text-[0.6rem] text-muted font-mono opacity-50 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
         {level}
       </div>
     </div>
   )
}

export default function Skills() {
  return (
    <section id="skills" className="relative pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-[#050A18]">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>
       
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
           
           {/* Header Area */}
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-4 md:gap-6">
              <div>
                 <div className="text-[clamp(0.7rem,2vw,0.9rem)] text-green font-mono mb-2 md:mb-3 opacity-80">// analyze technical capabilities</div>
                 <h2 className="text-[clamp(2rem,6vw,5rem)] leading-none font-display font-extrabold tracking-tighter text-white drop-shadow-lg">
                    SkillMatrix<span className="text-blue">.analyze()</span>
                    <span className="animate-blink text-blue font-light">_</span>
                 </h2>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-x-3 gap-y-2 bg-[#0a1128]/90 border border-blue/20 px-3 py-2 rounded-md font-mono text-[clamp(0.6rem,1.5vw,0.75rem)] text-muted shadow-lg items-center w-max mt-2 md:mt-0">
                 <span className="flex items-center gap-1.5 text-white/90">
                   <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"></span> 12 technologies
                 </span>
                 <span className="hidden md:block w-px h-3 bg-blue/30"></span>
                 <span className="flex items-center gap-2"><span className="md:hidden text-blue/40">•</span> 7 years avg</span>
                 <span className="hidden md:block w-px h-3 bg-blue/30"></span>
                 <span className="flex items-center gap-2"><span className="md:hidden text-blue/40">•</span> 3 categories</span>
              </div>
           </div>

           {/* Layout Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
              
              <RadarSVG />

              <div className="flex flex-col gap-4 sm:gap-6 relative w-full lg:max-w-lg xl:pl-16">
                 <SkillGroup title="Backend Core" defaultOpen={true}>
                    <SkillBar name="Java / Spring Architecture" icon="☕" value={95} level="7 yrs · Expert" color="#F89820" delay={0} />
                    <SkillBar name="TypeScript / Node.js" icon="TS" value={90} level="6 yrs · Expert" color="#F89820" delay={100} />
                    <SkillBar name="Hibernate / JPA" icon="💾" value={85} level="5 yrs · Advanced" color="#F89820" delay={200} />
                 </SkillGroup>
                 
                 <SkillGroup title="Infrastructure & DBs" defaultOpen={true}>
                    <SkillBar name="PostgreSQL / Linux Operations" icon="🐘" value={90} level="6 yrs · Expert" color="#00D4FF" delay={300} />
                    <SkillBar name="Docker / GCP Deployments" icon="🐳" value={85} level="5 yrs · Advanced" color="#00D4FF" delay={400} />
                 </SkillGroup>

                 <SkillGroup title="Frontend" defaultOpen={true}>
                    <SkillBar name="TypeScript / React" icon="⚛️" value={70} level="4 yrs · Advanced" color="#39FF14" delay={500} />
                    <SkillBar name="CSS / Tailwind" icon="🎨" value={75} level="5 yrs · Advanced" color="#39FF14" delay={600} />
                 </SkillGroup>

                 <SkillGroup title="Vibecoding & AI" defaultOpen={true}>
                    <SkillBar name="Vibecoding / AI Prompts" icon="⚡" value={85} level="3 yrs · Advanced" color="#F89820" delay={700} />
                    <SkillBar name="Prompt Engineering" icon="🤖" value={80} level="2 yrs · Advanced" color="#F89820" delay={800} />
                    <SkillBar name="n8n / Workflow Automation" icon="⚙️" value={90} level="4 yrs · Expert" color="#F89820" delay={900} />
                 </SkillGroup>
              </div>

           </div>

           {/* Mobile Grid Legend */}
           <div className="mt-16 md:mt-24 lg:mt-32 w-full lg:w-1/2 lg:mr-auto mx-auto lg:ml-0">
             <div className="grid grid-cols-2 lg:flex lg:flex-nowrap justify-items-start sm:justify-center lg:justify-start gap-x-4 gap-y-3 sm:gap-6 text-[clamp(0.6rem,1.5vw,0.8rem)] font-mono text-white/70 max-w-xs sm:max-w-none mx-auto">
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#F89820] shadow-[0_0_5px_#F89820] shrink-0"></span> Backend</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#00D4FF] shadow-[0_0_5px_#00D4FF] shrink-0"></span> Infra</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#39FF14] shadow-[0_0_5px_#39FF14] shrink-0"></span> Frontend</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#8b949e] shadow-[0_0_5px_#8b949e] shrink-0"></span> Other</span>
             </div>
           </div>
       </div>

       {/* INLINE CORE STYLES - Mobile First */}
       <style dangerouslySetInnerHTML={{__html: `
        /* RADAR SCALING & SHAPES */
        .radar-container {
           max-width: 380px; 
           width: 100%;
        }
        .ring-stroke {
           stroke: rgba(0,212,255,0.25);
           stroke-width: 0.4;
        }

        /* LABEL POSITIONING */
        .label {
          position: absolute;
          font-size: 8px;
          color: rgba(0,212,255,0.7);
          font-family: monospace;
          background: #050A18;
          padding: 0 4px;
          z-index: 10;
          letter-spacing: 0.1em;
        }
        .top-label { top: 0; left: 50%; transform: translate(-50%, -50%); }
        .bottom-label, .left-label, .right-label { display: none; }
        
        .quad-labels { opacity: 0; visibility: hidden; }

        /* DOTS AND OFFSET FLIGHT ANIMATION */
        .radar-dot-container {
          transform: translate(-50%, -50%);
          animation: radar-fly-in 0.6s cubic-bezier(0.19,1,0.22,1) both;
          animation-delay: var(--delay);
        }
        .radar-dot-container:focus-visible .radar-dot {
          outline: 2px solid white; outline-offset: 3px;
        }

        /* TOOLTIP - Fixed bottom on mobile for 100% visibility */
        .radar-tooltip {
          position: fixed;
          bottom: 24px;
          left: 16px;
          right: 16px;
          background: #0a1128;
          border: 1px solid rgba(0,212,255,0.3);
          padding: 12px 16px;
          border-radius: 8px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.2s ease-out;
          box-shadow: 0 20px 40px rgba(0,0,0,0.9);
          pointer-events: none;
          z-index: 1000;
        }
        .radar-dot-container.active .radar-tooltip,
        .radar-dot-container:focus-visible .radar-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* HOVER STATES - applied carefully for non-touch */
        @media (hover: hover) and (pointer: fine) {
           .radar-dot-container:hover .radar-dot { transform: scale(1.8); }
           .radar-dot-container:hover .radar-tooltip {
              opacity: 1; visibility: visible; transform: translateY(0);
           }
        }
        /* Mobile tap states */
        .radar-dot-container.active .radar-dot { transform: scale(1.6); }

        /* SKILL BARS */
        .skill-fill, .skill-glow-dot {
           transition-duration: 1.5s;
           transition-timing-function: cubic-bezier(0.19,1,0.22,1);
        }

        /* ANIMATIONS */
        @keyframes shimmer-sweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(400%) skewX(-15deg); }
        }
        .animate-shimmer-sweep { animation: shimmer-sweep 2.5s infinite linear; }
        
        /* Fly in from center using margin offsets */
        @keyframes radar-fly-in {
          0% { 
            margin-top: calc(-1 * var(--y-offset, 0%));
            margin-left: calc(-1 * var(--x-offset, 0%));
            transform: translate(-50%, -50%) scale(0); 
            opacity: 0; 
            filter: blur(4px); 
          }
          100% { 
            margin-top: 0;
            margin-left: 0;
            transform: translate(-50%, -50%) scale(1); 
            opacity: 1; 
            filter: blur(0); 
          }
        }

        /* TABLET PORTRAIT (md) */
        @media (min-width: 768px) {
           .radar-container { max-width: 450px; }
           .row-wrapper { flex-direction: row; margin-bottom: 8px; }
           .percentage-box { margin-left: auto; }
           
           /* On tablet, keep tooltips absolute relative to the dot to stay natural */
           .radar-tooltip {
              position: absolute;
              bottom: auto;
              top: 150%;
              left: 50%;
              right: auto;
              transform: translateX(-50%);
              width: 200px;
           }
        }

        /* DESKTOP (lg) */
        @media (min-width: 1024px) {
           .radar-container { max-width: 550px; }
           .bottom-label { display: block; bottom: 0; left: 50%; transform: translate(-50%, 50%); }
           .left-label { display: block; top: 50%; left: 0; transform: translate(-50%, -50%); }
           .right-label { display: block; top: 50%; right: 0; transform: translate(50%, -50%); }
           .quad-labels { opacity: 1; visibility: visible; }
           .quad-labels span { font-size: 0.65rem; letter-spacing: 0.2em; top: -7%; }
           .radar-dot-container { animation-delay: var(--desktop-delay); }
        }

        /* A11Y REDUCED MOTION */
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
             animation-duration: 0.01ms !important;
             animation-iteration-count: 1 !important;
             transition-duration: 0.01ms !important;
             scroll-behavior: auto !important;
          }
          .radar-dot-container {
             margin-top: 0 !important;
             margin-left: 0 !important;
             transform: translate(-50%, -50%) !important;
             opacity: 1 !important;
          }
          .skill-fill { width: var(--final-width) !important; }
          .radar-pulse { display: none !important; }
        }
       `}} />
    </section>
  )
}