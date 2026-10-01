const App = () => {
  const mates = [
    { name: 'Harvey', age: 27 },
    { name: 'Joseph', age: 26 },
  ]

  return (
  <div>
      <p>{mates[0].name} {mates[0].age}</p>
      <p>{mates[1].name} {mates[1].age}</p>
  </div>
  )
}

export default App
