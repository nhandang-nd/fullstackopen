import React from "react";

const AddPersonForm = ({ persons, onAddPerson }) => {
  const [newName, setNewName] = React.useState("");
  const [newPhone, setNewPhone] = React.useState("");
  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      const isExisted = persons.some((person) => person.name === newName);
      if (isExisted) return alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewPhone("");
      onAddPerson({ name: newName, number: newPhone, id: persons.length + 1 });
    },
    [newName, newPhone, persons, onAddPerson]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name-input">Name: </label>
        <input
          id="name-input"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <div>
          <label htmlFor="phone-input">Number: </label>
          <input
            id="phone-input"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default AddPersonForm;
