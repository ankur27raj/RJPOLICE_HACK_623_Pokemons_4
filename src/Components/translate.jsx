const translate = async (orgText, setTranslatedtext) => {
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
            { role: 'system', content: "You are an intelligent assistant translator equipped with automatic language detection. Translate the following text into English. Simply enter or paste the text in any language, and I will provide you with the accurate English translation. Your goal is to ensure seamless communication by delivering precise and natural translations."
           },
            { role: 'user', content: orgText},
          ],
        }),
      });
      const data = await response.json();
      const content = data.choices[0].message.content;
      setTranslatedtext(content);
      console.log(content);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

export default translate;
