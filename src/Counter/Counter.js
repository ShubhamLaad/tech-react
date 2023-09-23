import { useState } from 'react';
import { ShowCounter } from './ShowCounter';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = (oper) => {
    if (oper === '+') setCounter(counter + 1);
    else setCounter(counter - 1);
  };

  return (
    <div>
      <ShowCounter counter={counter} handleClick={handleClick} />
    </div>
  );
}
