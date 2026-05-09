import { motion } from 'framer-motion'

export default function NameASCII() {
  const nameArt = `
  ██████╗ ██████╗  █████╗ ███████╗ █████╗ ██████╗ 
  ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗
  ██████╔╝██████╔╝███████║███████╗███████║██║  ██║
  ██╔═══╝ ██╔══██╗██╔══██║╚════██║██╔══██║██║  ██║
  ██║     ██║  ██║██║  ██║███████║██║  ██║██████╔╝
  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ 
                                                   
      █████╗ ██████╗ ██████╗ ███████╗
     ██╔══██╗██╔══██╗██╔══██╗██╔════╝
     ███████║██████╔╝██║  ██║█████╗  
     ██╔══██║██╔══██╗██║  ██║██╔══╝  
     ██║  ██║██║  ██║██████╔╝███████╗
     ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝
  `;

  return (
    <div className="flex justify-end items-start pr-4 pt-6 relative">
      <style>{`
        @keyframes glitch {
          0% {
            text-shadow: 0 0 0 rgba(255, 149, 0, 0.5);
            transform: translateX(0px);
          }
          20% {
            text-shadow: -2px 0 0 rgba(255, 0, 0, 0.7), 2px 0 0 rgba(0, 255, 0, 0.7);
            transform: translateX(-2px);
          }
          40% {
            text-shadow: 2px 0 0 rgba(0, 255, 255, 0.7), -2px 0 0 rgba(255, 0, 255, 0.7);
            transform: translateX(2px);
          }
          60% {
            text-shadow: -1px 0 0 rgba(255, 149, 0, 0.5), 1px 0 0 rgba(0, 255, 255, 0.5);
            transform: translateX(-1px);
          }
          80% {
            text-shadow: 0 0 0 rgba(255, 149, 0, 0.5);
            transform: translateX(0px);
          }
          100% {
            text-shadow: 0 0 0 rgba(255, 149, 0, 0.5);
            transform: translateX(0px);
          }
        }
        
        .glitch-text {
          animation: glitch 3s infinite;
          filter: brightness(1.2);
        }
      `}</style>
      
      <motion.pre 
        className="text-terminal-text text-xs leading-tight font-mono filter drop-shadow-lg whitespace-pre glitch-text"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {nameArt}
      </motion.pre>
    </div>
  )
}
