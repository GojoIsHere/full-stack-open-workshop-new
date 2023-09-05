const App = () => {
  const handleClick = (e) => {
    console.log("button has been clicked ! ");
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <p>Name</p>
        <input type="text" />
        <button type="submit" onClick={handleClick()}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default App;
