import React from 'react'
import logo from "../assets/logo.png"
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-router-dom';
// import Search from './Search';


const Home = () => {
  return (
    <div className=' bg-richblack-900 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] '>
        <div className="flex flex-col items-center mt-[24vh] ">
            <img src={logo} alt="" className=' bg-transparent w-25vw h-35vh shadow-[10px_-5px_50px_-5px] shadow-blue-200'/>
           
           
            {/* <h1 className='font-bold font-mono pr-1>Welcome to Rajasthan Police Online FIR Portal Powered With AI and ML</h1> */}
              <div className='mt-5 text-[33px] bg-gradient-to-b from-[#7ea6c2] via-[#dbd237] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
              <TypeAnimation
            sequence={["Welcome to Rajasthan Police Online FIR Portal Powered With AI and ML", 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />  
              </div>        
         </div>
              <div className='flex flex-col'>
              <div className='items-center flex justify-center mt-5'>
                <Link to={"/FirForm"}>
              <button  className='font-semibold mt-2 h-10 w-[150px]  bg-yellow-100 rounded-xl text-white '>
                  Generate a FIR  
              </button>
                </Link>
            </div>

            <div className='items-center flex justify-center mt-5'>
                <Link to={"/DisplayFirForm"}>
              <button  className='font-semibold mt-2 h-10 w-[150px]  bg-yellow-100 rounded-xl text-white '>
                  Search an FIR 
              </button>
                </Link>
            </div>
              
              </div>
            

         <div className=' text-black mt-[160px]'>© Pokemons</div>
       
    </div>
  )
}

export default Home