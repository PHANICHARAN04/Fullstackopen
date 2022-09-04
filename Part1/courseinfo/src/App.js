const Top = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Piece = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Glance = (props) => {
  return (
    <div>
      {props.parts.map(part => <Piece name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Full = (props) => {
  const total = props.parts.reduce((acc, curr) => {
    return acc + curr.exercises
  }, 0)

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Top vis={course.name} />
      <Glance parts={course.parts}/>
      <Full parts={course.parts} />
    </div>
  )
}

export default App