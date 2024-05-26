import { useState } from 'react'

function UseState() {
    const [ count, setCount ] = useState(10)

    return (
        <div className="container m-5">
            <div className="d-flex justify-content-center">
                <button 
                className="btn btn-primary" 
                onClick={() => ((count === 0)? setCount(0) : setCount(count - 1))}
                >-</button>

                <h2 className='px-3'>{count}</h2>

                <button 
                className="btn btn-primary" 
                onClick={() => setCount(count + 1)}
                >+</button>
            </div>
        </div>

    )
}

export default UseState