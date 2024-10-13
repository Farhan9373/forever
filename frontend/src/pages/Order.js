import React from 'react';
import video from '../assest/404.mp4';

const Order = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className=' flex justify-center items-center mt-52'>
        <video 
          preload="auto" 
          width="600" 
          className='mix-blend-multiply' 
          loop 
          autoPlay 
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Order;
