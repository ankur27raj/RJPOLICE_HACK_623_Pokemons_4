import React, { useState } from 'react';
import './Form.css'
export default function Form() {

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        // You can perform additional validations or operations here
        if (file) {
        // Use FileReader to read the selected file as a data URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
        } else {
        setImage(null);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission with the image data (in 'image' state)
        console.log('Image Data:', image);
    };
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
            <label >Dist.</label>
            <input type="text" required/>

            <label >P.S</label>
            <input type="text" required/>
        </div>
        <div className='form-container'>
            <label >Year</label>
            <input type="text" required/>

            <label >F.I.R No</label>
            <input type="text" required/>

            <label >Date</label>
            <input type="date" required />
        </div>

            <label htmlFor="">Complaint / Informtion</label>
            <div>
                <div className='form-container'>
                    <label htmlFor="">Name</label>
                    <input type="text" required />

                    <label htmlFor="">Father's / Husband's Name</label>
                    <input type="text" required />
                </div>
                <div className='form-container'>
                    <label htmlFor="">D.O.B</label>
                    <input type="date" required />

                    <label htmlFor="">Nationality</label>
                    <input type="text" required />
                </div>
                <div className='form-container'>
                    <label htmlFor="">Passport No</label>
                    <input type="text" required />

                    <label htmlFor="">Date Of Issue</label>
                    <input type="date" required />
                </div>
                <div className='form-container'>
                    <label htmlFor="">Place Of Issue</label>
                    <input type="text" required />

                    <label htmlFor="">Occupation</label>
                    <input type="text" required />
                </div>
                <div className='form-container'>
                    <label htmlFor="">Address</label>
                    <text area name="" id="" cols="30" rows="4" required></text>
                </div>
                
            </div>

            <div className='form-container'>
                <label>F.I.R Image:
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </label>
            </div>

            <button type='submit'>Submit</button>
      </form>
    </div>
  )
}