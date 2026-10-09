const App = () => {
  return (
  <div>
      <Header course='Half Stack application development' />
      <Content part1='Fundamentals of React' exercises1='10'/>
      <Content part2='Using props to pass data' exercises2='7'/>
      <Content part3='State of a component' exercises3='14'/>
  </div>
  )
}

const Header = (props) => {
  return (
  <div>
      <h1>{course.props}</h1>
  </div>
  )
}

const Content = (props) => {
  return (
  <div>
  <p>{part1.props} {exercises1.props}</p>
  <p>{part2.props} {exercises2.props}</p>
  <p>{part3.props} {exercises3.props}</p>
  </div>
  )
}

const total = (props) => {
  return (
  <div>
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  </div>
  )
}

export default App
