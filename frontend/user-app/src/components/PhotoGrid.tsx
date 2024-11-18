import { ArrowBack, Close } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Grip } from 'lucide-react';
import { Typography } from '@mui/material';

interface PhotoSectionProps {
  photos: string[];
}

const PhotoSectionWithModal: React.FC<PhotoSectionProps> = ({ photos }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const handleShowAll = () => {
    setShowAllPhotos(true);
  };

  const handleCloseModal = () => {
    setShowAllPhotos(false);
  };

  useEffect(() => {
    if (showAllPhotos) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showAllPhotos]);
  return (
    <div className="relative">
      {/* Photo Grid */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Part 1: Full Photo */}
        <div className="w-full lg:w-1/2 h-80 lg:h-full">
          <img
            src={photos[0]}
            alt="Main "
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Part 2: Four Smaller Photos */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full lg:w-1/2 h-full lg:h-full">
          {photos.slice(1, 5).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={` ${index + 2}`}
              className="w-full h-full object-cover rounded-lg"
            />
          ))}
        </div>
        <button className="absolute bottom-8 right-8 flex bg-white text-[#222222] rounded text-opacity-90 justify-center items-center mt-4 px-4 py-2">
          <Grip className="h-full" size={19} />
          <div
            onClick={handleShowAll}
            className="text-sm antialiased ml-2 pt-1"
          >
            Show all photos
          </div>
        </button>
      </div>

      {/* See All Photos Button */}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {showAllPhotos && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen fixed left-1/2 transform -translate-x-[50vw] w-screen overflow-y-auto inset-0 bg-white flex justify-center pt-16 z-50 l-0"
          >
            <div className="bg-white max-w-6xl w-full p-4 rounded-lg  max-h-screen">
              <button
                onClick={handleCloseModal}
                className="mb-4 text-gray-500 hover:text-gray-700 "
              >
                <ArrowBack fontSize="small" />
              </button>
              <div className="flex-col gap-4">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={` ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoSectionWithModal;
