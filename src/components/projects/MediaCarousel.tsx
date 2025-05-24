import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MediaCarousel({ media }: { media?: string[] | null }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!Array.isArray(media) || media.length === 0) {
    return (
      <div className="w-full min-h-[60vh] bg-gray-700/50 backdrop-blur flex items-center justify-center rounded-2xl">
        <span className="text-white text-lg font-medium">Coming Soon</span>
      </div>
    );
  }  

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.endsWith('.mp4') || currentMedia.endsWith('.webm') || currentMedia.endsWith('.mov');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!isVideo) {
      timeoutId = setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % media.length);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, media, isVideo]);

  const handleVideoEnded = () => {
    setCurrentIndex((i) => (i + 1) % media.length);
  };

  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-h-full z-10 flex items-start justify-center"
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={`/projects/${currentMedia}`}
          className="max-h-full w-auto h-auto object-contain"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
        />
      ) : (
        <Image
          src={`/projects/${currentMedia}`}
          alt={`Project media ${currentIndex + 1}`}
          className="max-h-full w-auto h-auto object-contain"
          width={800}
          height={600}
          unoptimized
        />
      )}
    </motion.div>
  );
}