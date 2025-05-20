'use client'

import React from 'react'
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
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    draggable: false,
  }

  return (
    <section className="relative py-10 px-6 bg-black text-white overflow-hidden border-y border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {carouselTitle}
        </h2>

        <div className="relative">
          {/* Left gradient mask */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />

          {/* Carousel */}
          <div>
            <Slider {...settings}>
              {comapnies.map((logo, idx) => (
                <div
                  key={`slider-${idx}`}
                  className="px-8 opacity-80 hover:opacity-100 transition-all"
                >
                  <div className="relative w-[180px] h-[80px] mx-auto">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain hover:grayscale-0 transition duration-300"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right gradient mask */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}