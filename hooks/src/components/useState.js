import {useState, useEffect} from 'react'

function UseState() {
    const [currentAge, incAge] = useState(17);
    const [currentSib, incSib] = useState(1)

    const [state, setState] = useState({age:19, siblings:3});

    useEffect(() => {
        alert(`something changed ${currentAge}`)
    },[currentAge])

  const handleState = (val)=>{
  
    setState({
      ...state,[val]:state[val]+1
    })
  }

  const {age,siblings} = state;

  return(
    <div>
      <h1>My Current Age is {age} (using object)</h1>
      <h2>My siblings {siblings} (using object)</h2>
      <button onClick={()=>{handleState("age")}}>age</button>
      <button onClick={()=>{handleState("siblings")}}>sib</button>

      <div>
            <h1>My Current Age is {currentAge}</h1>
            <h2>My Siblings {currentSib}</h2>
            <button onClick={() => incAge(prevAge => prevAge + 1)}>Get Older</button>
            <button onClick={() => incSib(prevAge => prevAge + 1)}>Get More Siblings</button>
        </div>
    </div>
  )
}

export default UseState;