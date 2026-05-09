import { useEffect, useRef } from 'react'

export default function PixelatedPhoto({ src = '/profile.jpg' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const width = 180
      const height = 220
      
      canvas.width = width
      canvas.height = height

      // Draw image
      ctx.drawImage(img, 0, 0, width, height)
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, width, height)
      const data = imageData.data

      // Convert to grayscale and increase contrast
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        
        // Convert to grayscale
        let gray = (r * 0.299 + g * 0.587 + b * 0.114)
        
        // Increase contrast
        gray = gray > 128 ? 255 : 0
        
        data[i] = gray
        data[i + 1] = gray
        data[i + 2] = gray
      }

      ctx.putImageData(imageData, 0, 0)
    }

    img.src = src
  }, [src])

  return (
    <div className="flex justify-end items-start">
      <div className="relative">
        {/* Black and White Photo */}
        <canvas
          ref={canvasRef}
          className="border-2 border-terminal-text block"
          style={{
            boxShadow: '0 0 20px rgba(255, 149, 0, 0.3)',
            imageRendering: 'pixelated'
          }}
        />
      </div>
    </div>
  )
}
