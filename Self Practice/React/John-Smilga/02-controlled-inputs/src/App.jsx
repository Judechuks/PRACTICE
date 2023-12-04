import React, { useState } from "react";

export default function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("@email.com");
  const [users, setUsers] = useState([]);

  const generateId = (userId) => {
    userId = userId + 1;
    setId(userId);
    return userId;
  };

  const handleInput = (e) => {
    if (e.target.type === "text") {
      setName(e.target.value);
    }
    if (e.target.type === "email") {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const user = { id: generateId(id), name, email };
      setUsers([...users, user]);
      setName("");
      setEmail("@email.com");
    } else {
      alert("name or email can not be empty");
    }
  };

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="text-center">newsletter</h1>
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInput}
          />
        </div>
        <button className="btn">Add User</button>
      </form>

      {users.length ? (
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Subscribers</th>
            </tr>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </main>
  );
}
