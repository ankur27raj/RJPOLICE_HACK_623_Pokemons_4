import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

import {
  PageContainer,
  FormContainer,
  Header,
  Footer,
  Section,
  FormRow,
  FormText,
  FormField,
  SubmitButton,
  FileInput,
  Result,
} from './FormStyle';
import fetchCrimeData from './Acts';
import translate from './translate';
import summerizeData from './summrizer';

const FirForm = () => {
  const [translatedText, setTranslatedText] = useState('');
  const [textToSummerize, setTextToSummerize] = useState('');
  const [crimeReport, setCrimeReport] = useState('');
  const [result, setResult] = useState([]);
  // const [sec, setSec] = useState(true);
  // const [toggle, setToggle] = useState(false);
  const [option, setOption]=useState("Image");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(option==="Image") await translate(translatedText,setTextToSummerize);
    else setTextToSummerize(formData.Info);
    console.log(textToSummerize);
    await summerizeData(textToSummerize,setCrimeReport);
    await fetchCrimeData(crimeReport,setResult);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // const response = await axios.get('https://drive.google.com/file/d/19BCMDZsQ8bEvO3NAvgDSfktw_6l1HEJm/view?usp=drive_link');
  //   if(option==="Image") await translate(translatedText,setTextToSummerize);
  //   else setTextToSummerize(formData.Info);
  // };
  
  // useEffect(()=>{
  //   async function f1() {
  //     await summerizeData(textToSummerize,setCrimeReport);
  // }
  // f1();
  // },[textToSummerize])
  
  // useEffect(async ()=>{
  //   async function f2() {
  //     const res1 = await fetchCrimeData(crimeReport,setResult);
  // }
  // f2();
  // },[crimeReport])
  // useEffect(()=>{formData.Sections = result; console.log(formData.Sections)},[result])
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      Tesseract.recognize(
        file,
        'eng+hin',
        {logger:info=> info}
      ).then(({ data: { text } }) => {
        setTranslatedText(text);
      });
    }
  };


  const [formData, setFormData] = useState({
    district:"",
    Police_Station:"",
    year:"",
    Day:"",
    DateFrom:"",
    DateTo:"",
    Period:"1",
    TimeFrom:"00:00",
    TimeTo:"00:00",
    EntryNo:"",
    BeatNo:"",
    Address:"",
    Name:"",
    FName:"",
    BirthYear:"",
    Nationality:"Indian",
    aadhar:"",
    Passport:"",
    Mobile:"",
    Info:"",
    Sections:[],
  })

  function changeHandler(event) {
    const {name ,value} =event.target
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]:value
      }
    })
  }

    function onTypeChange(event){
      setOption(event.target.value);
    }

  async function submitHandler(e){
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/v1/filefir",{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const abc = await response.json();
  }
  

  return (
    <PageContainer>
      <FormContainer>

        <Header>
          <h1>First Information Report</h1>
          <p>(Under Section 154 Bhartiya Dand Sanhita)</p>
        </Header>

        <form onSubmit={handleSubmit}>
        <FormRow>
          <FormField>
          <label htmlFor='district'>1. District</label>
          <input type="text" name="district" onChange={changeHandler} value={formData.district} required/>
          </FormField>

          <FormField>
          <label>Police Station</label>
          <input type="text" name="Police_Station" onChange={changeHandler} value={formData.Police_Station} required/>
          </FormField>

          <FormField>
          <label>Year</label>
          <input type="number" id="year" name="year" list="yearList" onChange={changeHandler} value={formData.year} required/>
          <datalist id="yearList">
          <option value="2023" />
          <option value="2022" />
          <option value="2021" />
          <option value="2020" />
          </datalist>
          </FormField>
        </FormRow>

        <Section>2.(a) Occurence of Offence</Section>
        <FormRow>  
          <FormField>
          <label>1.   Day</label>
          <input type="text" id="Day" name="Day" list="dayList"  onChange={changeHandler} value={formData.Day} required/>
            <datalist id="dayList">
            <option value="" disabled>Select a day</option>
            <option value="Monday"/>
            <option value="Tuesday"/>
            <option value="Wednesday"/>
            <option value="Thursday"/>
            <option value="Friday"/>
            <option value="Saturday"/>
            <option value="Sunday"/>
            </datalist>
          </FormField>

          <FormField>
          <label>   Date From: </label>
          <input type="date" name="DateFrom" onChange={changeHandler} value={formData.DateFrom} required/>
          </FormField>

          <FormField>
          <label>   Date To: </label>
          <input type="date" name="DateTo" onChange={changeHandler} value={formData.DateTo} required/>
          </FormField>
        </FormRow>
        
        <FormRow>
          <FormField>
          <label>2.  Time Period</label>
          <input type="number" name="Period" onChange={changeHandler} value={formData.Period} required/>
          </FormField>

          <FormField>
          <label>Time From</label>
          <input type="time" name="TimeFrom" onChange={changeHandler} value={formData.TimeFrom} required/>
          </FormField>

          <FormField>
          <label>Time To</label>
          <input type="time" name="TimeTo" onChange={changeHandler} value={formData.TimeTo} required/>
          </FormField>
        </FormRow>

        <Section>(b) General Diary Reference</Section>
        <FormRow>  
          <FormField>
          <label>Entry Number</label>
          <input type="text" name="EntryNo" onChange={changeHandler} value={formData.EntryNo} required/>
          </FormField>

          <FormField>
          <label>Date & Time</label>
          <input type="number" name="year" onChange={changeHandler} value={formData.year} required/>
          </FormField>
        </FormRow>

       

        <Section>3.  Place of Occurance</Section>
        <FormRow>
          <FormField>
          <label>Beat Number</label>
          <input type="text" name="BeatNo" onChange={changeHandler} value={formData.BeatNo} required/>
          </FormField>

          <FormField>
          <label>Address</label>
          <input type="text" name="Address" onChange={changeHandler} value={formData.Address} required/>
          </FormField>
        </FormRow>

        <Section>4.  Complainant's Information</Section>
        <FormRow>
          <FormField>
          <label>Name</label>
          <input type="text"name="Name" onChange={changeHandler} value={formData.Name} required/>
          </FormField>

          <FormField>
          <label>Father's Name</label>
          <input type="text" name="FName" onChange={changeHandler} value={formData.FName} required/>
          </FormField>

          <FormField>
          <label>Birth of Year</label>
          <input type="number" name="BirthYear" onChange={changeHandler} value={formData.BirthYear} required/>
          </FormField>

          <FormField>
          <label>Nationality</label>
          <input type="text" name="Nationality" onChange={changeHandler} value={formData.Nationality}required/>
          </FormField>

          <FormField>
          <label>Aadhar Number</label>
          <input type="text" name="aadhar" onChange={changeHandler} value={formData.aadhar} required/>
          </FormField>

          <FormField>
          <label>Passport Number</label>
          <input type="text" name="Passport" onChange={changeHandler} value={formData.Passport} required/>
          </FormField>

          <FormField>
          <label>Mobile Number</label>
          <input type="tel" name="Mobile" onChange={changeHandler} value={formData.Mobile} required/>
          </FormField>
        </FormRow>
        <Section>5. Type of Information: 
          <FormText>
            <form className='flex flex-row space-x-1'>
              <div>
              <label className='flex mx-5 ml-5 '>
                  <input
                type="radio"
               
                value="Image"
                onChange={onTypeChange}
                checked={option==="Image"}
                /><p  className='text-black '>Image</p>
            </label>
            <label className='flex mx-5 ml-5' >
            <input
            // className='flex mx-1'
              type="radio"
              checked={option==='Text'}
              onChange={onTypeChange}
              value="Text"
            /><p  className='text-black '>Text</p>
            </label>
             </div>
             </form>
             </FormText>
             </Section>
          <div>
            {option==="Image" ? (
              <div>
              <Section> Upload Image</Section>
               <FileInput type="file" id="image" name="image" onChange={handleImageUpload} accept="image/*" />
               </div>
            ) 
            : 
            (
              <div>
                <FormField className=' ml-5 mr-5'>
                <label className='bold '>Enter the Information</label>
                  <input type="textarea" name="Info" onChange={changeHandler} value={formData.Info} required/>
              </FormField>
              </div>
            )}
          </div>
       

        <Result>
        {result.length>0 && (
          <>
            <Section>7. Sections/Acts</Section>
              {result.map((acts, index) => (
              <li key={index}>{`${index + 1}. ${acts}`}</li>
            ))}
            
          </>
        )}
        </Result>
        {result.length===0 && (
          <SubmitButton type="submit" > Submit </SubmitButton>
        )}
        </form>
        {result.length!==0 && (
          <SubmitButton type="submit"  onClick={submitHandler}>Save</SubmitButton>
        )}
        <Footer>© Pokemons</Footer>
      </FormContainer>
    </PageContainer>
  );
};

export default FirForm;
