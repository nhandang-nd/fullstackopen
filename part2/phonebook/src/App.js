import React from "react";
import SearchBox from "./components/SearchBox";
import AddPersonForm from "./components/AddPersonForm";
import PersonsList from "./components/PersonsList";

const INITIAL_PERSONS = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

const App = () => {
  const [persons, setPersons] = React.useState(INITIAL_PERSONS);
  console.log("🚀 ~ file: App.js:15 ~ App ~ persons:", persons);
  const [searchText, setSearchText] = React.useState("");

  const filteredPersons = React.useMemo(
    () =>
      persons.filter((person) =>
        person.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    [persons, searchText]
  );

  const handleChangeSearchText = (e) => setSearchText(e.target.value);

  const handleAddPerson = (person) => {
    setPersons([...persons, person]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBox value={searchText} onChange={handleChangeSearchText} />
      <h2>Add a new</h2>
      <AddPersonForm persons={persons} onAddPerson={handleAddPerson} />
      <h2>Numbers</h2>
      <PersonsList persons={filteredPersons} />
    </div>
  );
};

export default App;
