import { useState } from 'react';

export function ShowCounter({ counter, handleClick }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {' '}
      <input placeholder="Enter no" value={value} onChange={handleChange} />
      <h2>{counter}</h2>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('-')}>-</button>
    </div>
  );
}
