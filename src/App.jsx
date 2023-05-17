import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './Components/Pagination';
import User from './Components/User';

function App() {
  const [users, setUsers] = useState([]);
  
  //Added after 12:00 AM
  const [currentPage, setCurrentPage] = useState(1);
  const size = 5; // if size=10 then no page will be shown except page 1
  const totalPages = Math.ceil(users.length / size);
  const currentUsers = users.slice((currentPage - 1) * size, currentPage * size);
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  //Added after 12:00 AM
 
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
        currentUsers.map(user => 
         <div key={user?.id}>
           <User user={user} handleDelete={handleDelete}/>
         </div>
        )
      }
      {/* Added after 12:00 AM */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={handlePaginate}
      />
      {/* Added after 12:00 AM */}
    </>
  )
}

export default App
