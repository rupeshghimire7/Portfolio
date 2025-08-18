import React, { useState, useEffect } from 'react';

const Hero = () => {
  const fullText = "Hello, I am Rupesh Ghimire";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && index <= fullText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 150);
    } else if (!deleting && index > fullText.length) {
      // Wait for 5s at full text
      timeout = setTimeout(() => setDeleting(true), 5000);
    } else if (deleting && index >= 0) {
      // Deleting instantly
      setDisplayedText('');
      setIndex(0);
      setDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, fullText]);

  return <span className="text-primary">{displayedText}</span>;
};

export default Hero;
