import React, { useState } from "react";

const InputExample1 = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [pet, setPet] = useState("");

  const handlePetChange = (event) => {
    setPet(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your logic to handle the form submission
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Pet:", pet);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Surname:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>
        <br />
        <label>
          Favorite Pet:
          <select value={pet} onChange={handlePetChange}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="fish">Fish</option>
            <option value="bird">Bird</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputExample1;
