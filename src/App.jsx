import { useEffect, useState } from 'react';
import './App.css';
import User from './Components/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  const handleDelete = (id) => {
    const confirmed = window.confirm('Proceed Yes To Delete The User');
    if (confirmed) {
      const remainaingUsers = users.filter((user) => user.id !== id);
      setUsers(remainaingUsers );
    }
  };

  return (
    <>
      {
        users.map(user => 
          <div key={user?.id}>
            <User user={user} handleDelete={handleDelete}/>
          </div>
        )
      }
      {/* <UserTable/> */}
    </>
  )
}

export default App
