import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './Context/UserContext'
import React from 'react'

function App() {
  const [user, setUser] = React.useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
      <h1>Context API</h1>
      <Login/>
      <Profile/>
    </UserContext.Provider>
  )
}

export default App
