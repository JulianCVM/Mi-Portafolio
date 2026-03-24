'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
        
        {/* Left Column - Bento Box Title */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-5/12 flex flex-col pt-8"
        >
          <div className="relative flex">
            
            {/* Main title box with thick borders */}
            <div className="flex bg-white border-2 border-jp-black h-full relative z-10 w-full">
              
              {/* Red vertical bar */}
              <div className="bg-jp-red text-jp-black font-bold flex flex-col items-center justify-center p-4 border-r-2 border-jp-black w-20 text-3xl leading-snug">
                <span>技</span>
                <span>創</span>
                <span>品</span>
                <span>質</span>
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                {/* PORTAFOLIO ARTISTICO */}
                <div className="p-4 sm:p-6 border-b-2 border-jp-black">
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter leading-none text-jp-black break-words">
                    PORTAFOLIO<br />ARTÍSTICO
                  </h1>
                </div>
                
                {/* DISEÑO INNOVADOR */}
                <div className="p-4 sm:p-6 border-b-2 border-jp-black">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-jp-black">
                    DISEÑO<br />INNOVADOR
                  </h2>
                </div>
                
                {/* ESPIRITU / IMPE */}
                <div className="grid grid-cols-3 flex-grow">
                  <div className="col-span-2 flex flex-col border-r-2 border-jp-black">
                    <div className="p-4 border-b-2 border-jp-black h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold tracking-tight text-jp-black">ESPÍRITU<br />IMPERIAL</h3>
                    </div>
                    <div className="p-4 h-full flex items-center">
                      <h3 className="text-4xl font-extrabold tracking-tighter text-jp-black">IMPE <span className="italic">U1</span></h3>
                    </div>
                  </div>
                  
                  {/* Right small vertical text boxes */}
                  <div className="col-span-1 flex flex-col">
                    <div className="flex-grow border-b-2 border-jp-black flex items-center justify-center p-2">
                       <span className="writing-vertical text-lg font-bold">決断</span>
                    </div>
                    <div className="flex-grow flex items-center justify-center p-2">
                       <span className="writing-vertical text-lg font-bold">中華</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical text outside the box to the right */}
            <div className="hidden lg:flex flex-col ml-4 mt-2 h-full">
               <span className="writing-vertical text-xl font-light tracking-widest text-jp-black">に川の介</span>
               <div className="w-[1px] bg-jp-black h-32 mx-auto mt-4"></div>
            </div>
          </div>
          
          {/* TRABAJOS DESTACADOS Title placed right below */}
          <div className="mt-12 lg:mt-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-jp-black mb-1">
              TRABAJOS DESTACADOS
            </h2>
            <p className="text-jp-black text-sm tracking-widest">
              にっぽえ・本に他目
            </p>
          </div>
        </motion.div>

        {/* Right Column - Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-7/12 mt-8 lg:mt-0"
        >
          <div className="w-full aspect-square relative border-2 border-jp-black bg-jp-black overflow-hidden group">
            {/* The neon dragon will go here. Temporary placeholder styling in case image fails */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-red-900 flex items-center justify-center z-0">
               <div className="text-white opacity-50 text-2xl">Neon Dragon</div>
            </div>
            
            <Image
              src="/neon_dragon.png"
              alt="Neon Dragon"
              fill
              className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
} 