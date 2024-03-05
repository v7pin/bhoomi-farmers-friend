// axios is assumed to be installed
import axios from 'axios';

const sendUserInputToBackend = async (inputValue, selectedLanguage) => {
    console.log(inputValue);
    try {
      
      // generative_prompt = `${inputValue}  give info (write me the response in ${selectedLanguage} language, and the answer should not exceed 40 words)`;
      const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCOtJRo7AQS0Y7uy2tT0Hgl0KqzBQ11K-A'; // Replace with your API key
      const response = await axios.post(apiUrl, {
        "contents": [{"parts": [{"text": `${inputValue}  give info (write me the response in ${selectedLanguage} language, and the answer should not exceed 40 words)`}]}]
      });
      // generative_prompt = `${inputValue}  give info (write me the response in ${selectedLanguage} language, and the answer should not exceed 40 words)`;
      const generatedTextParts = response.data.candidates[0].content.parts;
  
      // Extracting text from parts and joining them
      const generatedText = generatedTextParts.map(part => part.text).join('\n');
  
      return generatedText;
    } catch (error) {
      console.error('Error generating content:', error);
      // Handle error or return a default value
      return 'An error occurred while generating content.';
    
}}

export default sendUserInputToBackend;
