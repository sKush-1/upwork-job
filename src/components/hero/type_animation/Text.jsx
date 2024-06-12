import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import './text.css';

const Text = () => {
  const [loopCount, setLoopCount] = useState(0);

  const handleTypistLoop = () => {
    setLoopCount(loopCount + 1);
  };

  return (
    <div className="typist">
      <Typewriter
        loop
        words={['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'more other stack...']}
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={700}
        onLoopDone={handleTypistLoop}
        key={loopCount}
      />
    </div>
  );
};

export default Text;
