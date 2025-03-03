const Header = ({ course }) => {
  console.log({ course });
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
    </p>
  );
};

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  const nimi = "Pekka";
  const ika = 10;

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Hello />
    </div>
  );
};

export default App;
