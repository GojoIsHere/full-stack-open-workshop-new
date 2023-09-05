import Total from "./Total";
// const Content = (props) => {
//   return props.parts.map((prop, index) => (
//     <Part part={prop.name} exercises={prop.exercise} key={index} />
//   ));
// };

// const Part = ({ part, exercises }) => {
//   return (
//     <p>
//       {part} {exercises}
//     </p>
//   );
// };
const Part = ({ cName, cExcercise }) => {
  return (
    <p>
      {cName} {cExcercise}
    </p>
  );
};

const Content = ({ content }) => {
  return (
    <>
      {content.map((value) => {
        return (
          <Part
            key={value.id}
            cName={value.name}
            cExcercise={value.exercises}
          />
        );
      })}
      <Total parts={content} />
    </>
  );
};
export default Content;
