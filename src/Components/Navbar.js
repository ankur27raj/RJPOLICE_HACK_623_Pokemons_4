import React  from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <div>
     <nav className=' items-center flex flex-row text-1xl font-bold  text-centre  bg-[#2980B9] '>
       <Link to="/">
         <img src={Logo} alt="Logo" width={120} height={30} ></img>
       </Link>
       
         <ul >
          <div className='flex flex-row px-5 text-centre py-3'>
           <li className='flex-auto px-3'>
                 <Link to="/">Home</Link>
             </li>
             <li className='flex-auto px-5'>
                 <Link to="/ContactForm">Contact</Link>
           </li>
           </div>
         </ul>  
       </nav>
    </div>
  )
}

export default Navbar