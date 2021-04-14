import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleState(event) {
    const { value, name } = event.target;

    setContact((previousValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value
        };
      } else if (name === "email") {
        return {
          fName: previousValue.fName,
          lName: previousValue.fName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleState}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleState}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleState}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
