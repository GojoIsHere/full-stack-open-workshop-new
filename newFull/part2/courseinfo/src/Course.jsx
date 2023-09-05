import Header from "./components/Header";
import Content from "./components/Content";

const Courses = ({ course }) => {
  return (
    <div>
      {course.map((value) => {
        return (
          <div key={value.id}>
            <Header header={value.name} />
            <Content content={value.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
