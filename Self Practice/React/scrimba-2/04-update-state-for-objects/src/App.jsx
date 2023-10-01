import React, { useState } from 'react';

function App() {

  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+234 (814) 454-8764",
    email: "example@email.com",
    isFavorite: false
  });

  function toggleFavorite() {
    setContact(prevContact => {
      return {
        ...prevContact, // the destructured object
        isFavorite: !prevContact.isFavorite // changes made to the object will be updated as new object
      }
    })
  }
  
  // const starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';
  const starIcon = contact.isFavorite ? <i className="fa fa-star starred"></i> : <i className="fa fa-star"></i>;

  return (
    <div className="card">
      <img src="./src/assets/team-1.jpg" alt="team" className='card-img'/>
      <div className="card-info">
        <div onClick={toggleFavorite}>{starIcon}</div>
        {/* <img src=`./src./assest/${starIcon}` alt="Star Icon" /> */}
        <h2 className="card-name">{contact.firstName} {contact.lastName}</h2>
        <p className="card-contact">{contact.phone}</p>
        <p className="card-contact">{contact.email}</p>
      </div>
    </div>
  )
}

export default App