import Button from './components/Button'
import './App.css'

function App() {

  let isLoggedIn = true

  const mydetails = {
    name: "Rachit Dubey",
    email: "rachitd2210@xyz.com"
  }

  return (
    <div className="App">
      <h1>Welcome to my React App</h1>
      {isLoggedIn ? (
        <p>Hello, {mydetails.name}! Your email is {mydetails.email}.</p>
      ) : (
        <p>Please log in to see your details.</p>
      )}
      
      <Button />
    </div>
  )
}

export default App