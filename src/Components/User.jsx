import React, { useState } from 'react';

const User = ({ user, handleDelete }) => {
  const { id, name, username, email } = user;
  const [name2, setName2] = useState(name);
  const [userName2, setUserName2] = useState(username);
  const [email2, setEmail2] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName2(e.target.name2.value);
    setUserName2(e.target.userName2.value);
    setEmail2(e.target.email2.value);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{id}</th>
            <td>{name2}</td>
            <td>{userName2}</td>
            <td>{email2}</td>
            <td>
              <label htmlFor="my-modal" className="btn">
                Edit
              </label>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="name2" defaultValue={name2} />
                    <input type="text" name="userName2" defaultValue={userName2} />
                    <input type="email" name="email2" defaultValue={email2} />
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </form>
                  <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">
                      Close
                    </label>
                  </div>
                </div>
              </div>
              <button onClick={() => handleDelete(id)} className="btn btn-secondary">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;