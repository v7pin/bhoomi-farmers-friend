import React, { useState, useEffect } from 'react';
import sendUserInputToBackend from './sendUserInputToBackend'; // Import your function
import { useSpring, animated } from 'react-spring';

const CropDetails = ({ cropName }) => {
  const [bestWayToGrow, setBestWayToGrow] = useState('');
  const [bestPractice, setBestPractice] = useState('');
  const [trendsAndCharts, setTrendsAndCharts] = useState('');
  const [priceAndMore, setPriceAndMore] = useState('');
  const [additionalInfo1, setAdditionalInfo1] = useState('');
  const [additionalInfo2, setAdditionalInfo2] = useState('');

  const fetchData = async (query) => {
    try {
      const generatedText = await sendUserInputToBackend(query, 'english');
      return generatedText;
    } catch (error) {
      console.error('Error fetching data:', error);
      return 'An error occurred while fetching data.';
    }
  };

  useEffect(() => {
    const fetchCardData = async (query, setter) => {
      const result = await fetchData(query);
      setter(result);
    };

    fetchCardData(`crop management practices ${cropName}`, setBestWayToGrow);
    fetchCardData(`crop market trends ${cropName}`, setBestPractice);
    fetchCardData(`chemical fertilizers recommended ${cropName}`, setTrendsAndCharts);
    fetchCardData(`eco-friendly fertilizers recommended for ${cropName}`, setPriceAndMore);
    fetchCardData(`pest control methods ${cropName}`, setAdditionalInfo1);
    fetchCardData(`benefits of organic farming for ${cropName}`, setAdditionalInfo2);
  }, [cropName]);

  const cardAnimation = useSpring({
    scale: 1, // Initial scale
    onHover: { scale: 1.1 }, // Scale on hover
    config: { mass: 1, tension: 250, friction: 40 }, // Adjust animation parameters
  });

  const cardProps = {
    style: {
      transform: cardAnimation.scale.to((s) => `scale(${s})`),
      transformOrigin: 'center center',
    },
    className: 'card p-6 bg-white rounded-xl shadow-md cursor-pointer', // Combine class names
    onClick: () => {
      console.log('Card clicked'); // Implement your desired action on click
    },
  };

  return (
    <div className="mt-8 grid grid-cols-2 gap-8">
      <animated.div {...cardProps}>
        <h3 className="text-xl font-semibold mb-4">Best crop management practices</h3>
        <p>{bestWayToGrow}</p>
      </animated.div>

      <animated.div {...cardProps}>
        <h3 className="text-xl font-semibold mb-4">crop market trends</h3>
        <p>{bestPractice}</p>
      </animated.div>

      <animated.div {...cardProps}>
        <h3 className="text-xl font-semibold mb-4">chemical fertilizers recommended</h3>
        <p>{trendsAndCharts}</p>
      </animated.div>

      <animated.div {...cardProps}>
        <h3 className="text-xl font-semibold mb-4">eco-friendly fertilizers recommended for {cropName}</h3>
        <p>{priceAndMore}</p>
      </animated.div>

      <animated.div {...cardProps}>
        <h3 className="text-xl font-semibold mb-4">Pest Control Methods</h3>
        <p>{additionalInfo1}</p>
      </animated.div>

      <animated.div {...cardProps}>
        <h3 className="text-xl font-semibold mb-4">Benefits of Organic Farming</h3>
        <p>{additionalInfo2}</p>
      </animated.div>
    </div>
  );
};

export default CropDetails;
