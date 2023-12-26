import React from 'react'

import Buddha from '../image/Buddha_statue.png'
import Buddha_statue from '../image/Buddha-statue.jpg'
import temple2 from '../image/temple2.jpg'
import tree_in_temple from '../image/tree-in-temple.jpg'
import Buddha_Provincial from '../image/Buddha_Provincial.jpg'
import pagoda from '../image/pagoda.jpg'
import museum from '../image/museum.jpg'

function Location() {
  return (
    <>
      <div className='flex flex-col items-center'>    
          <p className=' font-bold pt-6 pb-3 text-2xl'>สถานที่ต่างๆภายในวัด</p>
          {/* div ครอบส่วนรูปภาพ */}
          <div className=' w-[700px] flex flex-wrap justify-center'>

            <div className='h-52 w-52 mt-3 mr-5 relative cursor-pointer'>
              <img className='object-cover absolute opacity-50 h-52 w-52' src={Buddha} />
              <p className='font-bold text-black tracking-wider relative text-center pt-24'>สถานที่ต่างๆภายในวัด</p>
            </div>

            <div className='h-52 w-52 mt-3 mr-5 relative cursor-pointer'>
              <img className='object-cover absolute opacity-50 h-52 w-52' src={temple2} />
              <p className='font-bold text-black tracking-wider relative text-center pt-24'>พระเจดีย์มุเตา</p>
            </div>

            <div className='h-52 w-52 mt-3 mr-5 relative cursor-pointer'>
              <img className='object-cover absolute opacity-50 h-52 w-52' src={tree_in_temple} />
              <p className='font-bold text-black tracking-wider relative text-center pt-24'>ต้นไม้สามกษัตริย์</p>
            </div>

            <div className='h-52 w-52 mt-5 mr-5 relative cursor-pointer'>
              <img className='object-cover absolute opacity-50 h-52 w-52' src={Buddha_statue} />
              <p className='font-bold text-black tracking-wider relative text-center pt-24'>วิหารพระพุทธไสยาสน์</p>
            </div>

            <div className='h-52 w-52 mt-5 mr-5 relative cursor-pointer'>
              <img className='object-cover absolute opacity-50 h-52 w-52' src={Buddha_Provincial} />
              <p className='font-bold text-black tracking-wider relative text-center pt-24'>พระนนทมุนินท์</p>
            </div>

            <div className='h-52 w-52 mt-5 mr-5 relative cursor-pointer'>
              <img className='object-cover absolute opacity-50 h-52 w-52' src={pagoda} />
              <p className='font-bold text-black tracking-wider relative text-center pt-24'>พระมหารามัญเจดีย์</p>
            </div>

            <div className='h-52 w-52 mt-5 mr-5 relative cursor-pointer'>
              <img className='object-cover absolute opacity-50 h-52 w-52' src={museum} />
              <p className='font-bold text-black tracking-wider relative text-center pt-24'>พิพิธภัณฑ์</p>
            </div>
          </div>
        </div>
      </>
  )
}

export default Location