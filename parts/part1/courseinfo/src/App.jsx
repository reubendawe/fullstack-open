const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
    <div>
        <Header name='Half stack application development' />
    </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
    <Content name='Fundamentals of React' />
    <Content name='Using props to pass data' />
    <Content name='State of a component' />
    </div>
    )
  }

  const Total = (props) => {
    return (
    <div>
        <Total name={10} />
        <Total name={7} />
        <Total name={14} />
    </div>
    )
  }



export default App
