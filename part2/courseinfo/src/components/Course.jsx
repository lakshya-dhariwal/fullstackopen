import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

const Course = (props) => {
  const { course } = props;
  const excerciesData = course.parts.map((x) => x.exercises);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={excerciesData} />
    </div>
  );
};

export { Course };
