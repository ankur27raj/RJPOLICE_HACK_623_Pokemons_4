import React, { useState } from 'react';
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


const FirForm = () => {
  const [crimeReport, setCrimeReport] = useState('');
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = process.env.OPENAI_APIKEY;
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant who responds with only list of 5 important acts with their sections of a crime as per indian law and no explanations.' },
            { role: 'user', content: crimeReport },
          ],
        }),
      });
      const data = await response.json();
      const content = data.choices[0].message.content;
      const outputList = content.split(/\d+\./).filter(item => item.trim() !== '');
      setResult(outputList);
      console.log(content);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      Tesseract.recognize(
        file,
        'eng+hin',
        { logger: info => console.log(info)}
      ).then(({ data: { text } }) => {
        setCrimeReport(text);
        console.log(text);
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
    Mobile:""
  })

  function changeHandler(event){
    const {name ,value} =event.target
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]:value
      }

    })
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

        <Section>3. Type of Information: <FormText>Written</FormText></Section>

        <Section>4.  Place of Occurance</Section>
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

        <Section>5.  Complainant's Information</Section>
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

        <Section>6.   Upload Image</Section>
        <FileInput type="file" id="image" name="image" onChange={handleImageUpload} accept="image/*" />

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
        <SubmitButton type="submit" > Submit</SubmitButton>
        </form>

        <Footer>© Pokemons</Footer>
      </FormContainer>
    </PageContainer>
  );
};

export default FirForm;