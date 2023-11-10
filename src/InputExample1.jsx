import React, { useState } from "react";
import "./InputExample1.css";

const InputExample1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    favoritePet: "",
    email: "",
    password: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display form data in an alert with "no info" for empty fields
    const formDataString = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value || "no info"}`)
      .join("\n");

    alert(`Form Data:\n${formDataString}`);
  };

  return (
    <div className="form-section">
      <h1>Registruokitės</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Vardas:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Pavardė:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </label>
        <label>
          Mylimiausias augintinis:
          <select name="favoritePet" value={formData.favoritePet} onChange={handleChange}>
            <option value="">Pasirinkite</option>
            <option value="dog">Šikšnosparnis</option>
            <option value="cat">Usūrinis šuo</option>
            <option value="fish">Šamas</option>
            <option value="bird">Kranklys</option>
            <option value="bird">Iguana</option>
            <option value="bird">Kranklys</option>
          </select>
        </label>
        <label>
          El. paštas:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Slaptažodis:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Amžius:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <button type="submit">Pateikti</button>
      </form>
    </div>
  );
};

export default InputExample1;
