import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import '../style/PageGoal.css';
import '../style/Home.css';

function PageGoal() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setProgress(75), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-goal">
      <h1 className='of-prose'>Page Goal Component</h1>
      <ProgressBar
        completed={progress}
        bgColor="#4caf50"
        transitionDuration="2s"
        transitionTimingFunction="ease-in-out"/>
    </div>
  );
}

export default PageGoal;