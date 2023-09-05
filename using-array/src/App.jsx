import SayHello from "./SayHello";

let App = () => {
  let peopleArray = [
    // { firstName: "Ram", lastName: "math", id: 201 },
    // { firstName: "shyam", lastName: "science", id: 301 },
    // { firstName: "hari", lastName: "english ", id: 401 },
  ];
  return (
    <div>
      {peopleArray.length > 0 ? (
        peopleArray
          .filter((person) => person.id > 250)
          .map((value) => <SayHello person={value} key={value.id} />)
      ) : (
        <h1>No records found</h1>
      )}
    </div>
  );
};
export default App;
