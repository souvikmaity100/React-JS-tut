import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custome App</h1>
    </div>
  )
}

// let ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'go to google'
// }

let anotherUser = 'Sam';

let CustomReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'go to visit google',
  anotherUser
)

let anotherElement = (
  <a href="https://google.com" target='_blank'>go to google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    // anotherElement
    // MyApp()
    <MyApp/>
    // CustomReactElement
    // <App />
  
)
