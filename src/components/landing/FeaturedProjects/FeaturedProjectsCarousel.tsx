'use client'

import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedProjectsCarouselProps {
  projects: Project[]
}

export default function FeaturedProjectsCarousel({
  projects,
}: FeaturedProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Carousel */}
      <div className="overflow-hidden w-full max-w-5xl rounded-xl shadow-xl" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-0 flex-grow-0 flex-shrink-0 w-full transition-all duration-500 ease-in-out opacity-0 scale-95 embla__slide"
              style={{ position: 'relative' }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center flex-wrap gap-3 mt-4">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-20 h-14 rounded-md overflow-hidden border-2 transition-opacity duration-300 ${
              index === selectedIndex
                ? 'opacity-100 border-yellow-500'
                : 'opacity-50 border-transparent hover:opacity-80'
            }`}
          >
            <img
              src={project.image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
