const fetchCrimeData = async (crimeReport, setResult) => {
  const apiKey = process.env.REACT_APP_APIKEY;
  const apiUrl = process.env.REACT_APP_APIURL;

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
            { role: 'system', content: 'You are an efficient assistant specialized in legal information who is working in cyber crime for 20 years. Respond with a exact list of less than 5 important Indian Penal Code (IPC) acts and their corresponding sections based on the provided crime report. Avoid explanations and provide only the exactly relevant acts and sections directly related to the report. Your goal is to present the legal information succinctly and precisely.'
            },
            { role: 'user', content: crimeReport },
          ],
        }),
      });
      const data = await response.json();
      const content = data.choices[0].message.content;
      const outputList = content.split(/\d+\./).filter(item => item.trim() !== '');
      setResult(outputList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

export default fetchCrimeData;
