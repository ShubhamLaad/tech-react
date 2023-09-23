export function ShowCounter({ counter, handleClick }) {
  return (
    <div>
      {' '}
      <h2>{counter}</h2>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('-')}>-</button>
    </div>
  );
}
