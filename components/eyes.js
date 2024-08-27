'use client';

import moveEyes from '../lib/moveEyes';
import { useEffect } from 'react';


const Eyes = () => {

  useEffect(() => {
    document.addEventListener('mousemove', moveEyes);
    return () => {
      document.removeEventListener('mousemove', moveEyes)
    }
  }, [])

  return (
    <div className='w-full flex justify-center items-center'>
      <div className="flex gap-2 mt-5">
        <div className="border bg-white rounded-full size-20 p-3 relative flex justify-center items-center overflow-hidden eye" id="eye1">
          <div className="size-8 bg-black rounded-full absolute pupil" id='pupil1'>
          </div>
        </div>
        <div className="border bg-white rounded-full size-20 p-3 relative flex justify-center items-center overflow-hidden eye" id="eye2">
          <div className="size-8 bg-black rounded-full absolute pupil" id='pupil2'>
          </div>
        </div>
      </div>
    </div>
  )

};
export default Eyes;