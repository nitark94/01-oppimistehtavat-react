const Hello = ({ name, age }) => {
  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age


  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    <p>So you were probably born {bornYear()}</p>
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
