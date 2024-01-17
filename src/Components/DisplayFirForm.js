import React,{useState,useEffect} from 'react'
 import {
  Header,
  Footer,
  Section,
  FormRow,
  FormText,
  FormField,
  FormContainer,
  PageContainer
} from './FormStyle';
import Loadpage from './Loadpage';
 
 const Search = () => {
  const [search ,setSearch] = useState("");
  const [firdata, setfirdata] = useState({});
  const [x,setX] = useState("");
  const [lenx, setlenx] = useState(false);
  const [loading, setloading] = useState(false);
  function searchHandler(event){
    setSearch(event.target.value);
  }
  const submitContactForm = async (e) => {
    e.preventDefault();
    setX(search);
    setlenx(true);
    console.log(search);
    
  }
  function fc() {
    return (
      <div><Loadpage/></div>
    )
  }
    useEffect (()=>{
      setloading(true);
      const getdata = async () => {   
        try{
          const res=await fetch(`http://localhost:8000/api/v1/getfir/${x}`);
          const data = await res.json();
          console.log(data.data[0]);
          setfirdata(data.data[0]);
        }
        catch(err){
          console.error(err);
        }
      }
      getdata();
      setloading(false);
    },[x])
return (
  <div>
    <div className='flex flex-row items-center justify-center mx-14'>
    <form className="mt-4 mb-2 py-1 px-5 rounded-full bg-black-5 border flex focus-within:border-gray-800" onSubmit={submitContactForm }>
            <input type="text" placeholder="Enter FIR Number" class="bg-transparent w-full focus:outline-none pr-1 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic" onChange={searchHandler} value={search}/>
            <input type="submit" placeholder='search' className="flex flex-row firdatas-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white border-transparent py-1.5 h-[38px] -mr-3" >
                
            </input>
      </form>
    </div>
      {firdata&&Object.keys(firdata).length !== 0 && x ? (
        <div>
        <PageContainer>
       <FormContainer>
        <FormRow>
           <FormField>
             <label>District:</label>
            <p>{firdata.district}</p>
          </FormField>

           <FormField>
            <label>Police Station:</label>
            <p>{firdata.Police_Station}</p>
           </FormField>
         </FormRow>

         <Section>2.(a) Occurrence of Offence</Section>
         <FormRow>
           <FormField>
             <label>Date From:</label>
             <p>{firdata.DateFrom}</p>
           </FormField>

           <FormField>
             <label>Date To:</label>
             <p>{firdata.DateTo}</p>
           </FormField>
         </FormRow>

         <Section>(b) General Diary Reference</Section>
         <FormRow>
           <FormField>
             <label>Entry Number:</label>
             <p>{firdata.EntryNo}</p>
           </FormField>
         </FormRow>

        <Section>3. Type of Information: <FormText>Written</FormText></Section>

         <Section>4. Place of Occurrence</Section>
         <FormRow>
           <FormField>
             <label>Beat Number:</label>
             <p>{firdata.BeatNo}</p>
           </FormField>
           <FormField>
             <label>Address:</label>
             <p>{firdata.Address}</p>
           </FormField>
         </FormRow>

         <Section>5. Complainant's Information</Section>
         <FormRow>
           <FormField>
             <label>Name:</label>
             <p>{firdata.Name}</p>
           </FormField>

           <FormField>
             <label>Father's Name:</label>
             <p>{firdata.FName}</p>
           </FormField>

           <FormField>
             <label>Birth of Year:</label>
             <p>{firdata.BirthYear}</p>
           </FormField>

           <FormField>
             <label>Aadhar Number:</label>
             <p>{firdata.aadhar}</p>
           </FormField>

           <FormField>
             <label>Passport Number:</label>
             <p>{firdata.Passport}</p>
           </FormField>

           <FormField>
             <label>Mobile Number:</label>
             <p>{firdata.Mobile}</p>
           </FormField>
           <FormField>
            <label>Acts and Sections</label>
             {/* {ListOfActs(firdata.Sections)} */}
           </FormField>
         </FormRow>
       </FormContainer>
       <Footer>© Pokemons</Footer>
     </PageContainer>
      </div>
      ):
      (lenx && fc())}
  </div>
)
}

export default Search