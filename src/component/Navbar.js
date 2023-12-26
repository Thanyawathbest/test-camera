import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Newslide from './Slideovers_new'
import thai from "../assets/image/flagthai.jpg";

function Navbar() {
  const [showSlide, setShowSlide] = useState(false);
  const openSlide = () => {
    setShowSlide(true);
  };
  const closeSlide = () => {
    setShowSlide(false);
  };
  return (
    <>
      <nav className='flex h-14 bg-cyan-200'>

        <button className='lg:hidden w-16 h-16 pl-1' onClick={openSlide}>
          <svg xmlns="http://www.w3..org/2000/svg"
            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div className=" flex flex-col justify-center">
          <p className="font-serif lg:pl-5">tourist attractions map</p>
        </div>

        <div className=" hidden lg:w-96 lg:flex lg:justify-between lg:ml-auto lg:mr-10 lg:items-center">
          
          <Link className="" to="">หน้าแรก</Link>
          <Link className="" to="/location">สถานที่ภายในวัด</Link>
          <Link className="" to="/upload">อัพโหลดรูป</Link>
          {/* <Link className="" to="/contact">ติดต่อ</Link> */}
        
        </div>

        <div className=" w-24 flex items-center ml-auto lg:ml-0">
          <button className="w-20 flex">
            <img className=" h-8 mr-3" src={thai} alt="" />
            <p className="">TH</p>
          </button>
        </div>

      </nav>
      <Newslide visible={showSlide} onClose={closeSlide} />
    </>
  );
}
export default Navbar;