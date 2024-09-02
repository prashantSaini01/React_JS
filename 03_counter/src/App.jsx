import {useState} from 'react'
import './App.css'

function App() {
  let  [counter, setCount] = useState(15)
  // 2 things they return variable and function if we need to make changes in varaible call these function and provide whar will i do
  //let counter = 5;
  const addValue = ()=>{
    if(counter==20){
      alert("you have reached the max limit")
    }
    else{
      setCount(counter+=1)
    }

    // Increment to ho raha h but UI m update nhi ho raha e.g agr m 5 jaga counter print karu to sabh jagah thodi document.getquery ya sabh karta rahunga
  }
  const subtractvalue =()=>{
    if(counter==0){
      alert("You reached the minimum limit")
    }
    else{
      setCount(counter-=1)
    }
  }

  return (
    <>
      <h1>  Chai aur react</h1>
      <h2>This is Prashant Here</h2>
      <h3>Count Value: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subtractvalue}>Remove value</button> 
      <p>You value is increasing {counter} </p>

    </>
  )
}

export default App
