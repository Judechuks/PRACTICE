import React from "react"
/*
function ContactCard(props){
  return (
    <div className="contact-card">
      <img src={props.imgUrl} alt="picture" />
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}
Should also be replaced since the props has been replaced with an object (contact)
*/

function ContactCard(props){
  return (
    <div className="contact-card">
      <img src={props.contact.imgUrl} alt="picture" />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCard