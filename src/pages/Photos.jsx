import { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import photos from '../data/photos.js';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

export default function Photos({ type }) {
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
    return [...photos[type]].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className={type === 'sifrina' ? 'sifrina-container' : ''}>
      <Header />
      {type === 'normal' ? (
        <div className="banner">
          <h1>Galería</h1>
          <p>Fotos que atesoro</p>
        </div>
      ) : (
        <div className="banner">
          <h1>Nuestras fotos</h1>
          <p>Algunas de los momentos tan lindos que tenemos juntos</p>
        </div>
      )}
      <LayoutGroup>
        <div className="photos-grid">
          {shuffledPhotos.map((photo) => {
            return (
              <motion.div
                key={photo.id}
                layoutId={`photo-${photo.id}`}
                className="photo-preview"
                onClick={() => setSelectedPhoto(photo)}
                style={{
                  visibility:
                    selectedPhoto?.id === photo.id ? 'hidden' : 'visible',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={photo.type === 'video' ? photo.thumbnail : photo.src}
                  className="photo-preview"
                  loading="lazy"
                  alt={photo.description}
                />

                {photo.type === 'video' && (
                  <span className="video-play-icon">▶</span>
                )}
              </motion.div>
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
              {selectedPhoto.type === 'video' ? (
                <motion.video
                  layout
                  layoutId={`photo-${selectedPhoto.id}`}
                  src={selectedPhoto.src}
                  poster={selectedPhoto.thumbnail}
                  className="fullscreen-photo"
                  controls
                  playsInline
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
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
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}
