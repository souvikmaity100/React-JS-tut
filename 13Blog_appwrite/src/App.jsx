
import './App.css'

function App() {

  // -----Because we use vite-react-app, thats why we don't use this process to get value from environment variables------
  // console.log(process.env.REACT_APP_APPWRITE_URL);

  console.log(import.meta.env.VITE_APPWRITE_URL)


  return (
    <>
      <h1>Hello appwrite</h1>
    </>
  )
}

export default App
