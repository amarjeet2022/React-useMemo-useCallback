import React from "react";
import { handleChange, removeAddress, submitHandler, editHandler } from "../Redux-Toolkit/Slices/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
const App = () => {

  const dispatch = useDispatch()
  const {userDetail, data} = useSelector((state)=> state.user)
  // const [userDetail, setUserDetail] = useState({
  //   name: "",
  //   role: "",
  //   date: "",
  //   address: {
  //     city: "",
  //     state: "",
  //     pincode: "",
  //   },
  // });
  // const [data, setData] = useState([]);


  const handleInputSubmit=(e)=>{
    const {name, value} = e.target
    dispatch(handleChange({name, value}))
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(submitHandler())
  }
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name in userDetail.address) {
  //     setUserDetail((val) => {
  //       return { ...val, address: { ...val.address, [name]: value } };
  //     });
  //   } else {
  //     setUserDetail((val) => {
  //       return { ...val, [name]: value };
  //     });
  //   }
  // };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setData((prev) => {
  //     return [...prev, userDetail];
  //   });
  //   console.log("newData", userDetail);
  //   setUserDetail({
  //     name: "",
  //     role: "",
  //     date: "",
  //     address: {
  //       city: "",
  //       state: "",
  //       pincode: "",
  //     },
  //   });
  // };
  // const removeAddress = (index) => {
  //   setData((prev)=> prev.filter((_, i)=> i !==index))
  // };
  // const editHandler = (index) => {
  //   setUserDetail(data[index]);
  //   removeAddress(index)
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="write ur name"
            name="name"
            value={userDetail.name}
            onChange={handleInputSubmit}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            placeholder="write ur Role"
            name="role"
            value={userDetail.role}
            onChange={handleInputSubmit}
            required
          />
        </div>
        <div>
          <label>Joining Data</label>
          <input
            type="date"
            placeholder="write ur date"
            name="date"
            value={userDetail.date}
            onChange={handleInputSubmit}
          />
        </div>
        <div>
          <h3>Address</h3>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="write ur city"
              name="city"
              value={userDetail.address.city}
              onChange={handleInputSubmit}
            />
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              placeholder="write ur state"
              name="state"
              value={userDetail.address.state}
              onChange={handleInputSubmit}
            />
          </div>
          <div>
            <label>Pincode</label>
            <input
              type="Number"
              placeholder="write ur pincode"
              name="pincode"
              value={userDetail.address.pincode}
              onChange={handleInputSubmit}
            />
          </div>
          <button onClick={()=>removeAddress()}>-</button>
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Date</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          {data &&
            data.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.date}</td>
                  <td>{`${item.address.city},${item.address.state},${item.address.pincode}`}</td>
                  <td>
                    <button onClick={()=> dispatch(editHandler(index))}>Edit</button>
                    <button onClick={()=> dispatch(removeAddress(index))}>Delete</button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default App;
