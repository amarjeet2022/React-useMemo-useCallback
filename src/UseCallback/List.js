import React, { useEffect, useState } from 'react'

export const List = ({getItem}) => {

    const [item, setItem] = useState([])

    useEffect(()=>{
        setItem(getItem())
            console.log("updatingitem")
        
    },[getItem])
  return (
    <div>{item.map(items => <div key={items}>{items} </div>)}</div>
  )
}
