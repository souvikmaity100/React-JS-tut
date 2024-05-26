import { useContext } from "react";
import { AppContext } from "./hooks/useContext_hook/userContext";

function Child(){

    const userdata = useContext(AppContext)

  return (
    <div className="card p-3">
      Child = My name is {userdata.name} and my age is {userdata.age}
    </div>
  );
}

export default Child;