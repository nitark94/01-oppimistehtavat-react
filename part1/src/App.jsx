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

  const x = 1;
  let y = 5;

  console.log(x, y); // tulostaa 1 5
  y += 10;
  console.log(x, y); // tulostaa 1 15
  y = "teksti";
  console.log(x, y); // tulostaa 1 teksti

  // Tämä aiheuttaa virheen, koska x on const
  // x = 4;

  const t = [1, -1, 3];
  console.log(t.length); // tulostuu 3
  console.log(t[1]);     // tulostuu -1

  t.push(5);
  console.log(t.length); // tulostuu 4

  t.forEach(value => {
    console.log(value);  // tulostuu 1, -1, 3, 5 omille riveilleen
  });

  const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'Filosofian tohtori',
    greet: function() {
      console.log('hello, my name is', this.name);
    },
    doAddition: function(a, b) {
      console.log(a + b);
    }
  };

  object1.greet(); // tulostuu hello, my name is Arto Hellas
  object1.doAddition(1, 4); // tulostuu 5

  const referenceToAddition = object1.doAddition;
  referenceToAddition(10, 15); // tulostuu 25

  setTimeout(object1.greet.bind(object1), 1000); // tulostuu hello, my name is Arto Hellas sekunnin päästä

  const object2 = {
    name: 'Full Stack -websovelluskehitys',
    level: 'aineopinto',
    size: 5,
  };

  const object3 = {
    name: {
      first: 'Juha',
      last: 'Tauriainen',
    },
    grades: [2, 3, 5, 3],
    department: 'TKTL',
  };

  console.log(object1.name); // tulostuu Arto Hellas
  const fieldName = 'age';
  console.log(object1[fieldName]); // tulostuu 35

  object1.address = 'Tapiola';
  object1['secret number'] = 12341;

  const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    return p1 + p2;
  };

  const result = sum(1, 5);
  console.log(result);

  const square = p => p * p;
  console.log(square(4)); // tulostaa 16

  const tSquared = t.map(p => p * p);
  console.log(tSquared); // tulostuu [1, 1, 9, 25]

  function product(a, b) {
    return a * b;
  }

  const vastaus1 = product(2, 6);
  console.log(vastaus1);

  const average = function(a, b) {
    return (a + b) / 2;
  };

  const vastaus2 = average(2, 5);
  console.log(vastaus2);

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
