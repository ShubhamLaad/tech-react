import axios from 'axios';
import { useEffect, useState } from 'react';

export function Users() {
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState('Loading');

  const getUsers = async () => {
    try {
      setUsers('Loading');
      const response = await axios.get('https://api.github.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      setUsers('Error');
    }
  };

  useEffect(() => {
    getUsers();
  }, [visible]);

  const renderUser = () => {
    if (users === 'Loading') return <h2>Loading...</h2>;
    if (users === 'Error') return <h2>Error </h2>;
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
