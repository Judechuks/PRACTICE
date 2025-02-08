import React from "react";
import ContactCard from "./components/ContactCard";

/*
function App(){
  return (
    <div className="contacts">
      <ContactCard
        name="Mr. Evans"
        imgUrl="./src/assets/team1.jpg"
        phone="+234 814 463 8926"
        email="evans@email.com"
      />
      <ContactCard
        name="Mrs. Eve"
        imgUrl="./src/assets/team-2.jpg"
        phone="+234 814 463 4951"
        email="eve@email.com"
      />
      <ContactCard
        name="Mr. Richards"
        imgUrl="./src/assets/team-3.jpg"
        phone="+234 814 493 4221"
        email="richard@email.com"
      />
      <ContactCard
        name="Mrs. Martha"
        imgUrl="./src/assets/team-4.jpg"
        phone="+234 814 243 2234"
        email="martha@email.com"
      />
    </div>
  )
}
Can also be replaced using an object (contact) as shown below:
*/

function App() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Mr. Evans",
          imgUrl: "./src/assets/team1.jpg",
          phone: "+234 814 463 8926",
          email: "evans@email.com",
        }}
        /*These details may not be hard coded, rather gottens from JSON file*/
      />
      <ContactCard
        contact={{
          name: "Mrs. Eve",
          imgUrl: "./src/assets/team-2.jpg",
          phone: "+234 814 463 4951",
          email: "eve@email.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Mr. Richards",
          imgUrl: "./src/assets/team-3.jpg",
          phone: "+234 814 493 4221",
          email: "richard@email.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Mrs. Martha",
          imgUrl: "./src/assets/team-4.jpg",
          phone: "+234 814 243 2234",
          email: "martha@email.com",
        }}
      />
    </div>
  );
}

export default App;
