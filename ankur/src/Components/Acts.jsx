const fetchCrimeData = async (crimeReport, setResult) => {
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
      console.log(outputList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

export default fetchCrimeData;
