const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        objectID: 0,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        objectID: 1,
      },
      {
        name: 'State of a component',
        exercises: 14,
        objectID: 2,
      },
    ]};

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
};

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  );
};

const Content = (props) => {
  return (
    <ul>
    {props.parts.map(it => <li key={it.objectID}>{it.name} {it.exercises}</li>)}
    </ul>
  );
};

const Total = (props) => {
  const sum = props.parts.reduce((s, it) => s + it.exercises, 0);
  return <p>Number of exercises {sum}</p>;
};

export default App;
