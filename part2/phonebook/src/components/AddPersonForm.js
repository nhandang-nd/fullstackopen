import React, { useCallback } from "react";

const AddPersonForm = ({ persons, onAddPerson, onUpdatePerson }) => {
  const [newName, setNewName] = React.useState("");
  const [newPhone, setNewPhone] = React.useState("");

  const resetFormValues = useCallback(() => {
    setNewName("");
    setNewPhone("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existedPerson = persons.find((person) => person.name === newName);

    if (!!existedPerson) {
      const { name, id } = existedPerson;
      const isUpdating = window.confirm(
        `${name} is already added to phonebook, replace the old number with a new one?`
      );
      if (isUpdating)
        onUpdatePerson(id, {
          ...existedPerson,
          number: newPhone,
        })(resetFormValues);
    } else
      onAddPerson({
        name: newName,
        number: newPhone,
        id: persons.length + 1,
      })(resetFormValues);
  };

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
