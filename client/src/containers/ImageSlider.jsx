import React, { useState } from 'react';
import { HeroTypeWritter } from '../components';
import { Video, a } from '../assets';

const Carousel = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div className='gap-5 flex flex-col lg:flex-row'>
      {/* Left Column */}
      <div className='w-full text-center justify-center'>
        <div className='mb-12'>
          <h2 className='relative lg:py-44 lg:text-5xl font-bold xs:mt-[50px] gap-2 xs:text-3xl text-black'>
            <HeroTypeWritter 
              speed={100}
              words={[
                'गुणस्तरीय र सुरक्षित शिक्षण संस्था, आजको आवश्यकता'
              ]}
            />
          </h2>
        </div>
        <div>
          <button className='absolute px-4 py-2 bg-white rounded-full'>
            <a href='#' className='text-black'>
              Download App
            </a>
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className='w-full lg:ml-0 ml-[20px] py-[90px] relative'>
        <div className='aspect-w-16 aspect-h-9'>
          {!playing && (
            <img
              src={a} 
              alt='Thumbnail'
              className='w-full h-full object-cover'
            />
          )}
          {!playing && (
            <button
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-4 bg-white rounded-full'
              onClick={handlePlay}
            >
              Play
            </button>
          )}
        </div>
        {playing && (
          <div className=''>
            <video
              controls
              autoPlay
              loop
              muted
              src={Video}
              className='w-[1550px] h-[450px] xs:w-[450px] xs:h-[250px] object-cover'
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
