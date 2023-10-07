import { useEffect, useState } from 'react';
import { ShowCounter } from './ShowCounter';

export function Counter() {
  const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const handleClick = (oper) => {
    if (oper === '+') setCounter(counter + 1);
    else setCounter(counter - 1);
  };

  useEffect(() => {
    console.log('useEffect counter', counter);
    document.title = `counter ${counter}`;
  }, [counter]);

  useEffect(() => {
    console.log('1st render');
  }, []);

  useEffect(() => {
    console.log('useEffect image');
  }, [isShow]);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <br></br>
      {isShow ? (
        <img
          width={100}
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
        />
      ) : null}
      <ShowCounter counter={counter} handleClick={handleClick} />
    </div>
  );
}
