'use client'

import { useState } from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProductGallery({ images }: { images: string[] }) {
  // Filter out empty or falsy image strings
  const validImages = images.filter(Boolean)
  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % validImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + validImages.length) % validImages.length)
  }

  // If no valid images, show a placeholder
  if (!validImages.length) {
    return (
      <div className="flex items-center justify-center h-80 bg-gray-100 rounded-lg">
        <span className="text-gray-400">No image available</span>
      </div>
    )
  }

  return (
    <div className='flex flex-col lg:flex-row gap-4'>
      {/* Thumbnails */}
      <div className='flex lg:flex-col gap-2 order-2 lg:order-1'>
        {validImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Image 
              src={image} 
              alt={`Product image ${index + 1}`} 
              width={80} 
              height={80}
              className="w-16 h-16 lg:w-20 lg:h-20 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className='relative flex-1 order-1 lg:order-2'>
        <Zoom>
          <div className='relative h-80 lg:h-[500px] bg-gray-50 rounded-lg overflow-hidden'>
            <Image
              src={validImages[selectedImage]}
              alt={`Product image ${selectedImage + 1}`}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-contain'
              priority
            />
          </div>
        </Zoom>
        
        {/* Navigation arrows for multiple images */}
        {validImages.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
        
        {/* Image counter */}
        {validImages.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {selectedImage + 1} / {validImages.length}
          </div>
        )}
      </div>
    </div>
  )
}