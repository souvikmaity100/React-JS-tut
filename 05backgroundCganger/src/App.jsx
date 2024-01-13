import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("gray")

  return (
    <div className='w-full h-screen duration-200 p-5' style={{backgroundColor: color}}>

      <h1 className='bg-black p-5 rounded-3xl text-white'>VERONICA</h1>

      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 shadow-md bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 bg-red-500 py-1 rounded-xl text-white shadow-xl' onClick={()=>setColor('red')}>Red</button>
          <button className='outline-none px-4 bg-blue-500 py-1 rounded-xl text-white shadow-xl' onClick={()=>setColor('blue')}>Blue</button>
          <button className='outline-none px-4 bg-green-500 py-1 rounded-xl text-white shadow-xl' onClick={()=>setColor('green')}>Green</button>
          <button className='outline-none px-4 bg-black py-1 rounded-xl text-white shadow-xl' onClick={()=>setColor('black')}>Black</button>
          <button className='outline-none px-4 bg-blue-800 py-1 rounded-xl text-white shadow-xl' onClick={()=>setColor('navy')}>Navy</button>
        </div>
      </div>
    </div>
  )
}

export default App
