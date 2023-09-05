const FilterShow = ({ note, filterName }) => {
  const handleDelete = (id) => {
    console.dir(val);
    window.confirm("Are you sure?")
      ? axios.delete(
          `http://localhost:3001/persons/${val}`.then((response) => {
            console.log("data deleted");
          }),
        )
      : console.log("Not deleted !");
  };

  return (
    <span>
      {note.name.includes(filterName)
        ? note.name + " : " + note.number
        : console.log("not found")}{" "}
      <button onClick={handleDelete} id={note.id}>
        Delete
      </button>
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
