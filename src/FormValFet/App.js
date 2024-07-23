import React, { useEffect, useState } from "react";
import {debounce} from ""
import axios from "axios"
const App = () => {
  const [userData, setUserData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const [searchTerm, setSearchTerm]= useState("")

  const API = "https://jsonplaceholder.typicode.com/users";
  const response = async (url) => {
    try {
      const datas = await axios.get(url);
    //   const realData = await data.json()
      console.log(datas.data, "dummy")
      setUserData(datas.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    response(API);
  }, []);

  const deleteHandler=()=>{

  }

  const handleSearch=(e)=>{
    setSearchTerm(e.target.value)
  }
const debounceSearch= debounce((query)=>{
    const filteredData = userData.filter(user=> user.name.toLowerCase().includes((query.toLowerCase())) )
    setCurrentData(filteredData)
},300)
  return <div className="App">
    <div>
        <input
        placeholder="Search By name"
        type="text"
        onChange={handleSearch}
        value={searchTerm}
        />
    </div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    {userData && userData.map((item, index)=>(
                <tr key={item.id}>
                <td> {item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td><button onClick= {()=> deleteHandler(item.id)}>Delete</button></td>
                
            </tr>
    ))}
        </tbody>
    </table>
    
    
  </div>;
};

export default App;
