// Component called App
const App = () => {
  return (
  <div>
      <Header course='Half Stack application development' />
      <Content part1='Fundamentals of React' exercises1={10} />
      <Content part2='Using props to pass data' exercises2={7} />
      <Content part3='State of a component' exercises3={14} />
  </div>
  )
}

const Header = (props) => {
  return (
  <div>
      <h1>{props.course}</h1>
  </div>
  )
}

const Content = (props) => {
  return (
  <div>
  <p>{props.part1} {props.exercises1}</p>
  <p>{props.part2} {props.exercises2}</p>
  <p>{props.part3} {props.exercises3}</p>
  </div>
  )
}

export default App
