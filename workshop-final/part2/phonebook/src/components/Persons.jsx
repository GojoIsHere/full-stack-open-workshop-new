const FilterShow = ({ note, filterName }) => {
  return (
    <span>
      {note.name.includes(filterName)
        ? note.name + " : " + note.number
        : console.log("not found")}{" "}
      <br />
    </span>
  );
};
const Persons = ({ person, filterName }) => {
  return (
    <span>
      {person.map((note, i) => (
        <FilterShow key={i} note={note} filterName={filterName}></FilterShow>
      ))}
    </span>
  );
};
export default Persons;
