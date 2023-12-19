// import React, { useState } from 'react';

// const CrimeReportForm = () => {
//   const [crimeReport, setCrimeReport] = useState('');
//   const [result, setResult] = useState('');

//   const handleInputChange = (e) => {
//     setCrimeReport(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const apiKey = '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';
//     const apiUrl = 'https://api.openai.com/v1/chat/completions';

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           model: 'gpt-3.5-turbo',
//           messages: [
//             { role: 'system', content: 'You are a helpful assistant who responds with only 5 important sections/acts of a crime as per indian law and no explanations.' },
//             { role: 'user', content: crimeReport },
//           ],
//         }),
//       });
//       // method: 'POST',
//       //         headers: {
//       //           'Content-Type': 'application/json',
//       //           'Authorization': `Bearer ${apiKey}`,
//       //         },
//       //         body: JSON.stringify({
//       //           model: 'gpt-3.5-turbo',
//       //           messages: [
//       //             { role: 'system', content: 'You are a helpful assistant who just give name of accused in the crime report.' },
//       //             { role: 'user', content: crimeReport },
//       //           ],
//       //         }),
//       //       });

//       const data = await response.json();
//       setResult(data.choices[0].message.content);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="crimeReport">Crime Report:</label>
//         <textarea
//           id="crimeReport"
//           name="crimeReport"
//           value={crimeReport}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {result && (
//         <div>
//           <h2>Related Sections/Acts as per Indian Law:</h2>
//           <p>{result}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CrimeReportForm;


import './App.css';
import Login from './Components/Login'
import Form from './Components/Form'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Form />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;