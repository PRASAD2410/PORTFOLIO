export default function PixelatedHacker() {
  return (
    <svg 
      viewBox="0 0 128 128" 
      width="200" 
      height="200" 
      className="pixelated-avatar"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Background */}
      <rect width="128" height="128" fill="#0a0e27" opacity="0.2" />
      
      {/* Head */}
      <rect x="48" y="16" width="32" height="32" fill="#ff9500" stroke="#1a2847" strokeWidth="1" />
      
      {/* Hair/Top */}
      <rect x="40" y="12" width="48" height="8" fill="#ff7700" stroke="#1a2847" strokeWidth="1" />
      
      {/* Eyes */}
      <rect x="56" y="24" width="4" height="4" fill="#0a0e27" />
      <rect x="68" y="24" width="4" height="4" fill="#0a0e27" />
      
      {/* Glow effect on eyes */}
      <rect x="56" y="24" width="4" height="4" fill="#00ff00" opacity="0.6" />
      <rect x="68" y="24" width="4" height="4" fill="#00ff00" opacity="0.6" />
      
      {/* Mouth */}
      <rect x="60" y="36" width="8" height="2" fill="#ff7700" />
      
      {/* Body */}
      <rect x="44" y="48" width="40" height="36" fill="#ff9500" stroke="#1a2847" strokeWidth="1" />
      
      {/* Shirt details - stripes */}
      <rect x="44" y="52" width="40" height="2" fill="#1a2847" opacity="0.5" />
      <rect x="44" y="60" width="40" height="2" fill="#1a2847" opacity="0.5" />
      <rect x="44" y="68" width="40" height="2" fill="#1a2847" opacity="0.5" />
      
      {/* Left Arm */}
      <rect x="20" y="52" width="24" height="12" fill="#ff9500" stroke="#1a2847" strokeWidth="1" />
      
      {/* Right Arm */}
      <rect x="84" y="52" width="24" height="12" fill="#ff9500" stroke="#1a2847" strokeWidth="1" />
      
      {/* Left Hand */}
      <rect x="12" y="60" width="8" height="12" fill="#ffb347" stroke="#1a2847" strokeWidth="1" />
      
      {/* Right Hand - holding keyboard */}
      <rect x="108" y="58" width="12" height="14" fill="#ffb347" stroke="#1a2847" strokeWidth="1" />
      
      {/* Keyboard */}
      <rect x="88" y="56" width="24" height="12" fill="#1a2847" stroke="#ff9500" strokeWidth="2" />
      <rect x="92" y="60" width="16" height="2" fill="#ff9500" opacity="0.7" />
      <rect x="92" y="64" width="16" height="2" fill="#ff9500" opacity="0.7" />
      
      {/* Legs */}
      <rect x="52" y="84" width="12" height="32" fill="#0a0e27" stroke="#1a2847" strokeWidth="1" />
      <rect x="64" y="84" width="12" height="32" fill="#0a0e27" stroke="#1a2847" strokeWidth="1" />
      
      {/* Shoes */}
      <rect x="52" y="116" width="12" height="8" fill="#1a2847" stroke="#ff9500" strokeWidth="1" />
      <rect x="64" y="116" width="12" height="8" fill="#1a2847" stroke="#ff9500" strokeWidth="1" />
      
      {/* Tech aura - circles around figure */}
      <circle cx="64" cy="64" r="60" fill="none" stroke="#ff9500" strokeWidth="1" opacity="0.3" />
      <circle cx="64" cy="64" r="50" fill="none" stroke="#ff9500" strokeWidth="1" opacity="0.2" />
    </svg>
  )
}
