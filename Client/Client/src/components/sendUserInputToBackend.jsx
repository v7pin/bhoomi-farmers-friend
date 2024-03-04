// axios is assumed to be installed
import axios from 'axios';

const sendUserInputToBackend = async (userInput, selectedLanguage) => {
  try {
    // Replace 'http://127.0.0.1:5000/promt' with the actual endpoint of your backend
    const response = await axios.post('http://127.0.0.1:5000/promt', {
      query: userInput,
      language: selectedLanguage,
    });

    // Assuming the backend returns the 'generatedText' property in the response
    return response.data.output;
  } catch (error) {
    console.error('Error sending user input to the backend:', error);
    // Handle error or return a default value
    return 'An error occurred while processing the input.';
  }
};

export default sendUserInputToBackend;
