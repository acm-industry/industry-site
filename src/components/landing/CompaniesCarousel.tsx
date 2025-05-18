'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { comapnies, carouselTitle } from '@/data/CompaniesCarouselData'


export default function CompaniesCarousel() {
  const settings = {
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
    <section className="py-20 bg-[var(--background)] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="ml-18 text-2xl font-bold text-white mb-18 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
          {carouselTitle}
        </h2>

        <div className="relative">
          {/* Left gradient mask */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          
          {/* Carousel */}
          <Slider {...settings}>
            {comapnies.map((logo, idx) => (
              <div
                key={idx}
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

          {/* Right gradient mask */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}