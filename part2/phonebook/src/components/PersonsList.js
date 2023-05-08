const PersonsList = ({ persons = [], onDelete }) => {
  return (
    <div>
      {persons.map((person) => (
        <div key={`${person.name}-${person.id}`}>
          <span>{`${person.name} - ${person.number}`}</span>
          <button onClick={onDelete(person)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default PersonsList;
