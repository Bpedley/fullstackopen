import React from "react";

const PersonForm = ({
  handleSubmit,
  handleInputChange,
  newPerson: { name, number }
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input name="name" value={name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        number:
        <input name="number" value={number} onChange={handleInputChange} />
      </label>
      <br />
      <button>add</button>
    </form>
  );
};

export default PersonForm;
