import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  // useState hook
  const [len, setLen] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null)

  // usecallback hook
  const passGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%&';

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [len, numberAllowed, charAllowed, setPassword])

  // useEffect hook
  useEffect(()=>{
    passGenerator()
  }, [len, numberAllowed, charAllowed, passGenerator])

  const copyPassToClip = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-md px-4 py-2 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-4xl text-center p-4 text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 m-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPassToClip}
           className="outline-none bg-blue-600 text-white px-3 py-1 shrink-0"
           >Copy</button>
        </div>
        <div className="flex text-sm gap-x-5">
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={30}
              value={len}
              id="inputRng"
              onChange={(e) => { setLen(e.target.value) }}
            />
            <label htmlFor="inputRng">Length: {len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="checkbox"
              id="number"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="number" className="cursor-pointer">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="checkbox"
              id="specialChar"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="specialChar" className="cursor-pointer">Special Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
