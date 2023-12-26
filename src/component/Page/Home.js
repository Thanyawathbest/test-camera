import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import temple2 from '../image/temple2.jpg'
import Buddha from '../image/Buddha_statue.png'
import map from '../image/map.png'
// import ''
function Home() {
  const slides = [
    {
      url: require('../image/temple.jpg'),
    },
    {
      url: require('../image/temple1.jpg'),
    },
    {
      url: require('../image/temple2.jpg'),
    },
    {
      url: require('../image/Buddha-statue.jpg'),
    },
    {
      url: require('../image/tree-in-temple.jpg'),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className='max-w-[1000px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className=' pb-10 bg-slate-300'>
        <div className='flex justify-center mb-10 pt-10'>
          <img className=' h-60 ' src={temple2} />
          <div className=' ml-16 flex flex-col justify-around'>
            <p className=' text-2xl'>พระเจดีย์มุเตา เจดีย์เอียง เกาะเกร็ด จังหวัด นนทบุรี</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>ดูเพิ่มเติม</button>
          </div>


        </div>

        <div className='flex justify-center '>
          <div className=' flex flex-col justify-around mr-48 w-96'>
            <p className=' text-2xl text-center'>พระอุโบสถ</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>ดูเพิ่มเติม</button>
          </div>
          <img className=' h-60 ' src={Buddha} />

        </div>
      </div>

      <div className=' w-[950px]  ml-auto mr-auto mb-4'>
        <p className=' text-2xl pt-3 pb-2' >แผนที่</p>
        <div className=' bg-red-50 border-2 border-black h-80'>
          <p className=' ml-8 text-xl mt-2 mb-2'>วัดปรมัยยิกาวาส</p>
          <div className='border-t-2 border-black flex justify-center h-80'>
            <p className=' mt-7 ml-3'>51 หมู่ 7 ถนนแจ้งวัฒนะ เกาะเกร็ด ปากเกร็ด นนทบุรี 11120</p>
            <img className='h-60 mt-5 ml-5' src={map} />
          </div>
        </div>
      </div>

      <div className=' h-96 bg-slate-400'>

      </div>

    </>
  )
}

export default Home