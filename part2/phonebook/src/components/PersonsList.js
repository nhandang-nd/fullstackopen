const PersonsList = ({ persons = [] }) => {
  return (
    <div>
      {persons.map((person) => (
        <p
          key={`${person.name}-${person.id}`}
        >{`${person.name} - ${person.number}`}</p>
      ))}
    </div>
  );
};

export default PersonsList;
