import React, { useState, useEffect } from 'react';
import "../App.css";

const randomFacts = [
  "Did you know? Apples float in water because they are 25% air.",
  "Bananas are berries, but strawberries aren't!",
  "There are over 7,500 varieties of apples in the world.",
  "Cucumbers are technically fruits, not vegetables!",
  "Tangerines are a hybrid of mandarin orange and pomelo.",
  "FruitAI was designed to help you learn fun facts about fruits and stay healthy!",
  "Some fruits can taste different depending on how ripe they are, and AI can help track that!",
  "The AI behind FruitAI can even recognize different fruit types through images!",
  "In Japan, watermelons can be square-shaped to save space while shipping.",
  "The largest fruit in the world is a jackfruit, which can weigh up to 100 pounds!"
];

function AboutPage() {
  const [randomFact, setRandomFact] = useState('');

  // Set a random fact when the component mounts
  useEffect(() => {
    const getRandomFact = () => {
      const fact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
      setRandomFact(fact);
    };

    getRandomFact();
  }, []);

  return (
    <div className="about-page">
      <h2>About FruitAI</h2>
      <p>
        FruitAI is your intelligent assistant designed to help you learn fun facts about fruits,
        stay healthy, and answer your fruit-related queries. Whether you're curious about fruit
        facts or want to track your fruit intake, FruitAI has you covered!
      </p>

      <h3>Random Fun Fact:</h3>
      <p>{randomFact}</p>

      <h3>Our Vision:</h3>
      <p>
        We believe that staying healthy should be fun and easy. By combining the power of AI
        with the beauty of nature, FruitAI aims to make learning about fruits and making healthier
        choices more engaging and accessible to everyone.
      </p>
    </div>
  );
}

export default AboutPage;
