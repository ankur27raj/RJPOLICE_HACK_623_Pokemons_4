const summerizeData = async (crimeReport, setResult) => {
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
            { role: 'system', content:
            "Your task is to design an effective text extraction system that accurately identifies and extracts the primary details related to the crime from the given crime report. The system should provide a concise summary, emphasizing the type of crime, key events, and any additional relevant information for filing an FIR."
            },
            { role: 'user', content: crimeReport },
          ],
        }),
      });
      const data = await response.json();
      const content = data.choices[0].message.content;
      setResult(content);
      console.log(content);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

export default summerizeData;
