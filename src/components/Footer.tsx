'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeStr(new Date().toISOString())
    }, 1000)
    setTimeStr(new Date().toISOString())
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-bg border-t border-border py-6 font-sans text-xs">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-col gap-1 text-muted">
          <div className="flex gap-2">
            <span className="text-green">➜</span>
            <span>~/portfolio</span>
            <span className="text-blue">git:(</span><span className="text-orange">main</span><span className="text-blue">)</span>
            <span className="text-text">✗</span>
          </div>
          <div>
            [SYSTEM] Process finished with exit code 0
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-1 text-muted">
          <div className="text-blue font-bold">Julián Villamizar's Backend Portfolio v2.0-blueprint</div>
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <span>|</span>
            <span>UPTIME: {timeStr || 'Loading...'}</span>
          </div>
        </div>

      </div>
    </footer>
  )
}