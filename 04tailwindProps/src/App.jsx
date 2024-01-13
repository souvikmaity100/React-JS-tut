
import './App.css'
import Card from './comp/Card'
import Card2 from './comp/Card2'

function App() {

  let myObj = {
    product: 'Samsung',
    desc: 'This is a samsung product'
  }

  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Hello World</h1>

      <Card product="Samsung" btnTxt="Visit" someObj={myObj}/>
      <Card2 product="Macbook" btnTxt="Read More" someArr={myArr}/>
      <Card2 product="Macbook" someArr={myArr}/>
      

    </>
  )
}

export default App
