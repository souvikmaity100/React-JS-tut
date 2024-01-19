import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './cpmponents/Login'
import Profile from './cpmponents/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App