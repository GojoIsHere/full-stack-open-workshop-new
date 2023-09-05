const App = () => {
  const handleClick = () => {
    console.log("button has been clicked! ");
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleClick()}>
        <p>
          Name:
          <input /> <br />
          <button>ADD</button>
        </p>
      </form>
    </div>
  );
};
export default App;
