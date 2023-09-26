import React from 'react';
import Contact from './components/Contact';
import ContactData from './components/ContactData';

function App() {

  const data = ContactData.map(item => {
    return (
      <Contact img={item.img} name={item.name} phone={item.phone} email={item.email} />
    )
  })
  
  return (
    <div className="contacts">
      {data}
    </div>
  )
}

export default App
//6:15:10