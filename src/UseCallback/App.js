import React, { useCallback, useState } from "react";
import { List } from "./List";
const App=()=>{
    const [number, setNumber] = useState(1)
    const [bgcolor, setBgcolor] = useState(false)


    const getItem=useCallback(()=>{
        return[number, number+1, number+2]
    },[number])

    const theme={
        backgroundColor: bgcolor ? '#333' : '#fff',
        color : bgcolor? '#fff' : '#333'
    }
return(
    <div style={theme}>
        <input 
        placeholder= "write a no."
        type="Number"
        value = {number}
        onChange = {(e)=> setNumber(parseInt(e.target.value))}
        />
        <button onClick={()=>setBgcolor(prevColor => !prevColor)}>Change BG</button>
        <h1>hlo world</h1>
        <List getItem={getItem}/>
    </div>
)
}
export default App