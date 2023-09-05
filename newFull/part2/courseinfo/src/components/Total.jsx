// for (let i = 0; i < props.total.length; i++) {
//   totalExe += props.total[i].exercise;
// }
// return (
//   <p>
//     <b>Total of {totalExe} exercises </b>
//   </p>
// );
const Total = ({ parts }) => {
  let totalVal = parts.reduce((a, c) => (a = a + c.exercises), 0);
  return (
    <p>
      <b>Total of {totalVal} excercises</b>.
    </p>
  );
};

export default Total;
