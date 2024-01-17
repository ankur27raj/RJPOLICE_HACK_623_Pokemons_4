import React, { useEffect, useState } from 'react'
import  Spinner  from './Spinner';
import Error from './Error';

const Loadpage = () => {
  const [var1,setVar1]=useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setVar1(false);
    },10000)
    return ()=> clearTimeout(timer);
},[])
  return (
    <div>
        <div className='bg-white '>
          {var1?(
            <div className='flex flex-row justify-centre items-centre'>
              <Spinner/>
            </div>
          ):(
            <div>
             <Error/>
            </div>
          )}
      
      </div>
      
    </div>
  )
}

export default Loadpage