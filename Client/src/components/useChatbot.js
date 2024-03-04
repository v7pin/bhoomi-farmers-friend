import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';
import q from 'q';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!input) return;

    // Load the Universal Sentence Encoder model
    const model = await use.load();

    // Embed the input message
    const inputEmbedding = await model.embed([input]);

    // Replace this array with your custom responses
    const responses = ['Hello!', 'How can I help you?', 'Nice to meet you!'];

    // Find the closest response based on cosine similarity
    const closestResponse = findClosestResponse(inputEmbedding.arraySync(), responses);

    setResponse(closestResponse);
  };

  const findClosestResponse = (inputEmbedding, responses) => {
    let closestResponse = '';
    let closestScore = -1;

    for (const response of responses) {
      const responseEmbedding = tf.tidy(() => model.embed([response]).arraySync());
      const score = calculateCosineSimilarity(inputEmbedding, responseEmbedding);

      if (score > closestScore) {
        closestScore = score;
        closestResponse = response;
      }
    }

    return closestResponse;
  };

  const calculateCosineSimilarity = (embedding1, embedding2) => {
    const dotProduct = tf.matMul(embedding1, tf.transpose(embedding2));
    const norm1 = tf.norm(embedding1);
    const norm2 = tf.norm(embedding2);

    return dotProduct.div(tf.mul(norm1, norm2)).arraySync()[0][0];
  };

  return (
    <div className="chatbot">
      <div className="chat-container">
        <div className="chat-output">
          {response && <div className="response">{response}</div>}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
