'use client';

import React, { useRef, forwardRef } from 'react';
import Card from '@/components/landing/WhatWeDo/Card';
import { useScroll } from 'framer-motion';

interface WhatWeDoData {
  title: string;
  description: string;
  src: string;
  link: string;
  icon: React.ComponentType<{ size: number }>;
  link_value: {
    text: string;
    icon: React.ComponentType<{ size: number }>;
  };
}

interface CardStackProps {
  endCardStackRef: React.RefObject<HTMLDivElement | null>;
  whatwedo: WhatWeDoData[];
  headerHeight: number;
  firstCardRef?: React.RefObject<HTMLDivElement>;
}

const CardStack = forwardRef<HTMLDivElement, CardStackProps>(
  ({ endCardStackRef, whatwedo, headerHeight, firstCardRef }, cardStackRef) => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({target: container, offset: ['start start', 'end end']})
    return (
      <div ref={cardStackRef as React.RefObject<HTMLDivElement>} className="py-12 px-4">
        {whatwedo.map((item, i) => {
          const Icon = item.icon;
          const LinkIcon = item.link_value.icon;
          return (
            <Card
              key={`p_${i}`}
              firstCardRef={i === 0 ? firstCardRef : undefined}
              i={i}
              title={item.title}
              description={item.description}
              src={item.src}
              link={item.link}
              icon={Icon && <Icon size={28} />}
              actionText={item.link_value.text}
              actionIcon={LinkIcon && <LinkIcon size={28} />}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={1 - ((whatwedo.length - i) * 0.05)}
              headerHeight={headerHeight}
            />
          );
        })}
        <div ref={endCardStackRef}/>
      </div>
    );
  }
);
CardStack.displayName = 'CardStack';

export default CardStack;
