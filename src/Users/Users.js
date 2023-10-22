import axios from 'axios';
import { useEffect, useState } from 'react';

export function Users() {
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get('https://api.github.com/users');
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, [visible]);

  const renderUser = () => {
    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>Error </h2>;
    return users.map((user) => (
      <section key={user.id}>
        <h3>{user.login}</h3>
        <img src={user.avatar_url} alt="user" />
      </section>
    ));
  };

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        reload
      </button>
      {renderUser()}
    </>
  );
}
