import Form from "./components/Form";
import './App.css';
import { useState} from "react"
import Display from "./components/Display";

function App() {
  const [show, setShow]=useState(true)
  return (
    <div className="App">
      
      <button onClick={()=>setShow(!show)}>{show? "Show User Details":"Add User"}</button>
      {show? <Form/>:<Display/>}
    </div>
  );
}

export default App;
