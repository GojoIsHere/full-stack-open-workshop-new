const PersonForm = ({
  newName,
  newNumber,
  handleChange,
  handleChangeNum,
  handleClick,
}) => {
  return (
    <form>
      <span>Name</span>
      <input type="text" value={newName} onChange={handleChange} />
      <span>Number</span>
      <input type="number" value={newNumber} onChange={handleChangeNum}></input>
      <button onClick={handleClick}>Add new</button>
    </form>
  );
};
export default PersonForm;
