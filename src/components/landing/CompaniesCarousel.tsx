'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { comapnies, carouselTitle } from '@/data/CompaniesCarouselData';

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
  };

  return (
    <motion.section
      className="relative py-8 px-4 sm:py-12 sm:px-6 lg:py-15 lg:px-12 bg-black text-white border-y border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ overflow: 'visible', willChange: 'transform, opacity' }}
    >
      <div className="relative z-[20] max-w-7xl mx-auto" style={{ overflow: 'visible' }}>
        <motion.h2
          className="text-center text-sm sm:text-xl md:text-3xl font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] pb-2 sm:pb-2 md:pb-8"
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 0.5, ease: 'easeOut' },
          }}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {carouselTitle}
        </motion.h2>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ overflow: 'visible', willChange: 'transform, opacity' }}
        >
          {/* Left mask */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-50" />

          {/* Carousel */}
          <div style={{ overflow: 'visible' }}>
            <Slider {...settings}>
              {comapnies.map((logo, idx) => (
                <div
                  key={`logo-${idx}`}
                  className="px-8 pt-4 lg:pt-6"
                  style={{ overflow: 'visible' }}
                >
                  <div
                    className="relative w-[15vw] h-[80px] mx-auto z-[9999]"
                    style={{
                      overflow: 'visible',
                      willChange: 'transform',
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      unoptimized
                      priority
                      className="object-contain transition-transform duration-300 ease-out"
                      style={{
                        filter: 'grayscale(0.3) brightness(0.9)',
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05) translateY(-5px)';
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLImageElement).style.transform = 'scale(1) translateY(0)';
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right mask */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-0" />
        </motion.div>
      </div>

      <style jsx global>{`
        .slick-slider,
        .slick-track,
        .slick-slide > div {
          overflow: visible !important;
        }

        html,
        body,
        main,
        #__next {
          overflow-y: visible !important;
        }
      `}</style>
    </motion.section>
  );
}