import Child from "./Child"


function Parent() {
  return (
    <div className="bg-dark d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>
        <h2>Parent</h2>
        <Child/>
    </div>
  )
}

export default Parent