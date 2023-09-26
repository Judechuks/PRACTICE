import React from "react";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt="thumbnail" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <i className="fa fa-phone"></i>
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <i className="fa fa-envelope"></i>
        <p>{props.email}</p>
      </div>
    </div>
  )
}