import { useEffect, useState } from 'react';

export function Watch() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timoutOut = setTimeout(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearTimeout(timoutOut);
    };
  }, [time]);

  return (
    <div>
      <h2>time: {time}</h2>
    </div>
  );
}
