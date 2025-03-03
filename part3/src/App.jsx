import { useState } from 'react';

const Display = ({ left, right, allClicks, total, handleLeftClick, handleRightClick, handleReset, setToValue }) => {
  console.log('Display component rendered with:', { left, right, allClicks, total });
  
  return (
    <div>
      {left} <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button> {right}
      <p>{allClicks.join(' ')}</p>
      <p>Total clicks: {total}</p>
      <button onClick={handleReset}>Reset</button>
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(total + 1)}>increment</button>
    </div>
  );
};

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  console.log('App component rendered with state:', { clicks, allClicks, total });

  const handleLeftClick = () => {
    const updatedLeft = clicks.left + 1;
    setAll(allClicks.concat('L'));
    setClicks({ ...clicks, left: updatedLeft });
    setTotal(updatedLeft + clicks.right);
    console.log('Left button clicked:', { updatedLeft, allClicks });
  };

  const handleRightClick = () => {
    const updatedRight = clicks.right + 1;
    setAll(allClicks.concat('R'));
    setClicks({ ...clicks, right: updatedRight });
    setTotal(clicks.left + updatedRight);
    console.log('Right button clicked:', { updatedRight, allClicks });
  };

  const handleReset = () => {
    setClicks({ left: 0, right: 0 });
    setAll([]);
    setTotal(0);
    console.log('Reset button clicked, state reset');
  };

  const setToValue = (newValue) => () => {
    console.log('value now', newValue);
    setTotal(newValue);
  };

  return (
    <div>
      <Display 
        left={clicks.left} 
        right={clicks.right} 
        allClicks={allClicks} 
        total={total} 
        handleLeftClick={handleLeftClick} 
        handleRightClick={handleRightClick} 
        handleReset={handleReset}
        setToValue={setToValue}
      />
    </div>
  );
};

export default App;