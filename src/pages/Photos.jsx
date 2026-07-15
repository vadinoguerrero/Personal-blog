import { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import photos from '../data/photos.js';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedPhoto]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    }

    window.addEventListener('keydown', handleKey);

    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const shuffledPhotos = useMemo(() => {
    return [...photos].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <>
      <Header />
      <div className="banner">
        <h1>Galería</h1>
        <p>Fotos que atesoro</p>
      </div>
      <LayoutGroup>
        <div className="photos-grid">
          {shuffledPhotos.map((photo) => {
            return (
              <motion.img
                key={photo.id}
                layoutId={`photo-${photo.id}`}
                src={photo.src}
                className="photo-preview"
                loading="lazy"
                transition={{
                  layout: {
                    duration: 0.1,
                    ease: 'easeInOut',
                  },
                }}
                onClick={() => setSelectedPhoto(photo)}
                style={{
                  visibility:
                    selectedPhoto?.id === photo.id ? 'hidden' : 'visible',
                }}
              />
            );
          })}
        </div>

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              layout
              className="photo-overlay"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                layout: {
                  duration: 0.1,
                  ease: 'easeInOut',
                },
              }}
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.img
                layout
                layoutId={`photo-${selectedPhoto.id}`}
                transition={{
                  layout: {
                    duration: 0.25,
                  },
                }}
                src={selectedPhoto.src}
                className="fullscreen-photo"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}
