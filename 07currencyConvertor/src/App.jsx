import { useState } from 'react'
import { Input } from './comp'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setForm] = useState('inr')
  const [to, setTo] = useState('usd')
  const [convertAmount, setConvertAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)


  const swap = ()=>{
    setForm(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }

  const convert = ()=>{
    setConvertAmount(amount * currencyInfo[to])
  }


  return (
    <>
      <h1 className='text-3xl bg-orange-600 text-white text-center p-4 fixed top-0 w-full'>Currency Convertor</h1>
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://store-images.s-microsoft.com/image/apps.3790.13746602931236419.ec145616-d3b2-4fef-b955-55708f912cfd.44b1adcc-6220-448a-ada7-ec31717c5e62?mode=scale&q=90&h=1080&w=1920')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyOpt={options}
                                onCurrencyChange={(curr)=> setForm(curr)}
                                selectCurrency={from}
                                onAmountChange={(amount)=> setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertAmount}
                                currencyOpt={options}
                                onCurrencyChange={(curr)=>setTo(curr)}
                                selectCurrency={to}
                                onAmountChange={(amount)=> setAmount(amount)}
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
