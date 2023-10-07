import { useEffect, useState } from 'react';

export function Watch() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timoutOut = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearTimeout(timoutOut);
    };
  }, []);

  return (
    <div>
      <h2>time: {time}</h2>
    </div>
  );
}
