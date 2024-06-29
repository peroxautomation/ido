import { useState, useEffect } from 'react';
import ProcessBar from "./ProcessBar";

/**
 * Uploading bar
 * @returns 
 */
const UploadBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100; // Stops at 100%
        }
        return newProgress;
      });
    }, 200); // Updates every 400ms

    return () => {
      clearInterval(timer); 
    };
  }, []);

  return (
    <div className="upload-bar">
      <ProcessBar progress={progress} />
      <div className="relative leading-[1rem]">{progress}%</div>
    </div>
  );
};

export default UploadBar;
