const Hello = (props) => {
  console.log(props)
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </>
  )
}
const App = () => {
  const nimi = 'Pekka'
  const ika = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={nimi} age={ika} />
      <Hello />
    </>
  )
}

export default App;
