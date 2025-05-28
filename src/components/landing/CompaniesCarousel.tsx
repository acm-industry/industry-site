'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { comapnies, carouselTitle } from '@/data/CompaniesCarouselData'

export default function CompaniesCarousel() {
  const settings = {
    rtl: true,
    dots: false,
    infinite: true,
    slidesToShow: comapnies.length,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    draggable: false,
  }

  return (
    <motion.section 
      className="relative py-8 px-4 sm:py-12 sm:px-6 lg:py-20 lg:px-12 bg-black text-white overflow-hidden border-y border-white/10 smooth-element"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2 
          className="text-center text-sm sm:text-xl md:text-3xl font-extrabold mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] smooth-element"
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.7, 
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 0.5, ease: "easeOut" }
          }}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {carouselTitle}
        </motion.h2>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Left gradient mask */}
          <motion.div 
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
          />

          {/* Carousel */}
          <div className="smooth-element" style={{ willChange: 'transform' }}>
            <Slider {...settings}>
              {comapnies.map((logo, idx) => (
                <motion.div
                  key={`slider-${idx}`}
                  className="px-8 smooth-element"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 0.8, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.7 + idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    y: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                  }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1.05,
                    y: -5
                  }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="relative w-[15vw] h-[80px] mx-auto smooth-element">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain transition-all duration-300 ease-out"
                      style={{
                        filter: 'grayscale(0.3) brightness(0.9)',
                        transition: 'filter 0.3s ease-out, transform 0.3s ease-out'
                      }}
                      unoptimized={true}
                      priority
                    />
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* Right gradient mask */}
          <motion.div 
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
          />
        </motion.div>
      </div>

      {/* Add custom CSS for even smoother carousel */}
      <style jsx>{`
        .smooth-element {
          will-change: transform, opacity;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        :global(.slick-track) {
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
        
        :global(.slick-slide) {
          will-change: transform, opacity;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
      `}</style>
    </motion.section>
  )
}