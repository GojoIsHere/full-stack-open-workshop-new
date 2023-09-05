const Filter = ({ handleFilter }) => {
  return (
    <span>
      Filter shown with :
      <input type="text" onChange={handleFilter} />
    </span>
  );
};
export default Filter;
