import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";

export default function App() {
  const [id, setId] = useState(0);
  const [person, setPerson] = useState({
    name: "",
    email: "@email.com",
    age: "",
    referral: "",
  });
  // where the property is same as the name attribute of each form element
  const [users, setUsers] = useState([]);

  const generateId = (userId) => {
    userId = userId + 1;
    setId(userId);
    return userId;
  };
  // Using a single state and onchange handler for form submit
  // this will be helpful when the form element are many

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { ...props } = person; // rest operator/ groups all the props as array
    if (person.name && person.email && person.age) {
      const user = { id: generateId(id), ...props }; //sread operator/ unpack the props from the array
      // alternatively: you can use this to generate a unique id
      // setPeople([...people, {id: new Date().getTime().toString(), ...props} ])setUsers([...users, user]);
      setPerson({ name: "", email: "@email.com", age: "", referral: "" });
    } else {
      alert("No fields should be empty");
    }
  };

  const removeItem = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
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
            value={person.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name="age"
            id="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="referral">Referral: </label>
          <input
            type="text"
            name="referral"
            id="referral"
            value={person.referral}
            onChange={handleChange}
          />
        </div>
        <button className="btn">Add User</button>
      </form>

      {users.length ? (
        <table>
          <thead>
            <tr>
              <th colSpan={5}>Subscribers</th>
              <th>{users.length}</th>
            </tr>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>REFERRAL</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.referral}</td>
                  <td>
                    <FaTrash
                      className="removeBtn"
                      onClick={() => removeItem(user.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </main>
  );
}
