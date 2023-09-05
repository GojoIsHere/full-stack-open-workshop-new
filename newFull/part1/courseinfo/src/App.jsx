let App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamental React Devalopment", exercise: 10 },
      {
        name: "using props to pass data",
        exercise: 7,
      },
      {
        name: "state of component",
        exercise: 14,
      },
    ],
  };
  const Header = (props) => {
    return <h1>{props.header}</h1>;
  };
  // const Content = ({ parts }) => {
  //   // let content = props.parts.map((elem) => {
  //   //   elem;
  //   // });
  //   // console.log("this is test", content);

  //   // let content = [];
  //   // let exercise = [];
  //   // for (let i = 0; i < props.parts.length; i++) {
  //   //   // console.log("this is test", props.parts[i].name);
  //   //   content.push(props.parts[i].name);
  //   //   content.push(props.parts[i].exercise);
  //   // }
  //   // // console.log(content);
  //   // return <Part name={content} exercise={exercise}></Part>;
  //   const arrName = [];
  //   const arrExer = [];
  //   parts.map((elem) => {
  //     arrName.push(elem.name);
  //     arrExer.push(elem.exercise);
  //     // return (
  //     //   <div>
  //     //     {console.log(elem.name, elem.exercise)}
  //     //     <Part part={elem.name} exer={elem.exercise} key={index}></Part>
  //     //   </div>
  //     // );
  //   });
  //   console.log(arrName, arrExer);
  //   return <Part name={arrName} exer={arrExer}></Part>;
  // };
  // const Part = ({ name, exer }) => {
  //   const display = [];
  //   for (let index = 0; index < name.length; index++) {
  //     let element = {};
  //     element.content = name[index];
  //     element.exercise = exer[index];
  //     display.push(element);
  //   }

  //   return <div>display</div>;
  // };
  const Content = (props) => {
    return props.parts.map((prop, index) => (
      <Part part={prop.name} exercises={prop.exercise} key={index} />
    ));
  };

  const Part = ({ part, exercises }) => {
    return (
      <p>
        {part} {exercises}
      </p>
    );
  };

  const Total = (props) => {
    let totalExe = 0;
    // console.log(props.total[0].exercise);

    for (let i = 0; i < props.total.length; i++) {
      totalExe += props.total[i].exercise;
      // console.log("this is testing", totalExe);
    }
    return <p>Number of exercises {totalExe}</p>;
  };

  return (
    <div>
      <Header header={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total total={course.parts}></Total>
    </div>
  );
};

export default App;
