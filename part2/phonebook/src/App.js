import React, { useEffect } from "react";
import AddPersonForm from "./components/AddPersonForm";
import PersonsList from "./components/PersonsList";
import SearchBox from "./components/SearchBox";
import { handleError } from "./services/errorHandlers";
import {
  addPerson,
  deletePerson,
  getAll,
  updateNumber,
} from "./services/phoneBook";

const App = () => {
  const [persons, setPersons] = React.useState([]);

  useEffect(() => {
    handleGetAllPersons();
  }, []);

  const handleGetAllPersons = () =>
    getAll().then(
      (response) => setPersons(response),
      (error) => handleError(error)
    );

  const [searchText, setSearchText] = React.useState("");

  const filteredPersons = React.useMemo(
    () =>
      persons.filter((person) =>
        person.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    [persons, searchText]
  );

  const handleChangeSearchText = (e) => setSearchText(e.target.value);

  const handleAddPerson = (person) => (successCallback) => {
    addPerson(person).then(
      (res) => {
        setPersons([...persons, res]);
        successCallback();
      },
      (error) => handleError(error)
    );
  };

  const handleUpdatePerson = (id, newPhone) => (successCallback) => {
    updateNumber(id, newPhone).then(
      (_) => {
        handleGetAllPersons();
        successCallback();
      },
      (error) => handleError(error)
    );
  };

  const showDeleteWarningDialog = (person) => {
    const { id, name } = person;
    const isDeleting = window.confirm(`Delete ${name}?`);
    if (isDeleting) {
      deletePerson(id).then((_res) => handleGetAllPersons());
    }
  };

  const handleDeletePerson = (person) => () => {
    showDeleteWarningDialog(person);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBox value={searchText} onChange={handleChangeSearchText} />
      <h2>Add a new</h2>
      <AddPersonForm
        persons={persons}
        onAddPerson={handleAddPerson}
        onUpdatePerson={handleUpdatePerson}
      />
      <h2>Numbers</h2>
      <PersonsList persons={filteredPersons} onDelete={handleDeletePerson} />
    </div>
  );
};

export default App;
