import React from 'react'
import PoliceContacts from '../assets/PoliceContacts.pdf'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-transparent'>
      <h1 className='bg-transparent text-center mt-2vh text-4xl font-bold py-2 underline'>The Rajasthan Police is always at your Service</h1>
      <div className='flex flex-col items-center bg-transparent'>
        <h2 className='bg-transparen text-2xl py-2 font-bold'>Police Contacts</h2>
        <object data= {PoliceContacts} width="800" height="550"> </object> 
      </div>

      <div className='flex flex-row justify-evenly z-5 w-full'>
        <div className='flex flex-col items-center m-0 5px bg-transparent font-bold py-2 '>
          <h2 className='bg-transparent underline'>Important Contacts</h2>
          <div className='bg-transparent m-5'>
            <h3 className='bg-transparent'>Cyber Crime Cell</h3>
              <h4 className='bg-transparent'>Phone Number: 0141-2601122</h4>
              <h4 className='bg-transparent'>Email : ccps-raj@nic.in , ccps-raj@nic.in</h4>
          </div>
        </div>

        <div className='font-bold py-2'>
          <h2 className='underline'>Helpline Numbers</h2>
          <div className='info font-bold py-2'>
            <h4>Emergency No. : 112</h4>
            <h4>Garima Helpline : 1090</h4>
            <h4>Child Helpline : 1098</h4>
            <h4>Ambulance No. : 108</h4>
            <h4>CyberCrime Helpline : 1930</h4>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact