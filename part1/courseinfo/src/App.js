const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part, exercise }) => (
  <p>
    {part} {exercise}
  </p>
);
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, idx) => (
        <Part key={idx} part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ total }) => <p>Number of exercises {total}</p>;

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const total = course.parts.reduce((acc, part) => (acc += part.exercises), 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
