import { useReducer } from "react"
import reducer from "./reducer"

function UseReducer() {

    const initialValue = 0
    const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div className="container m-5">
            <div className="d-flex justify-content-center">
                <button 
                className="btn btn-primary" 
                onClick={() => dispatch({type: "DEC"})}
                >-</button>

                <h2 className='px-3'>{count}</h2>

                <button 
                className="btn btn-primary" 
                onClick={() => dispatch({type: "INC"})}
                >+</button>
            </div>
        </div>
  )
}

export default UseReducer