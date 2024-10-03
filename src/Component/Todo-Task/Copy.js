import React, { useState } from "react";

const Copy = () => {
  const [userDetail, setUserDetail] = useState({
    name: "",
    role: "",
    date: "",
    address: {
      city: "",
      state: "",
      pincode: "",
    },
  });
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name in userDetail.address) {
      setUserDetail((val) => {
        return { ...val, address: { ...val.address, [name]: value } };
      });
    } else {
      setUserDetail((val) => {
        return { ...val, [name]: value };
      });
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, userDetail];
    });
    setUserDetail({
      name: "",
      role: "",
      date: "",
      address: {
        city: "",
        state: "",
        pincode: "",
      },
    });
  };
  const editHandler = (index) => {
    setUserDetail(data[index]);
    removeHandler(index)
  };
  const removeHandler = (index) => {
    setData((item) => item.filter((_, i) => i !== index));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="write something"
            name="name"
            value={userDetail.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            placeholder="write something"
            name="role"
            value={userDetail.role}
            onChange={changeHandler}
          />
        </div>{" "}
        <div>
          <label>Name</label>
          <input
            type="date"
            placeholder="write something"
            name="date"
            value={userDetail.date}
            onChange={changeHandler}
          />
        </div>
        <div>
          <h2>Address</h2>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="write something"
              name="city"
              value={userDetail.address.city}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              placeholder="write something"
              name="state"
              value={userDetail.address.state}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>Pincode</label>
            <input
              type="text"
              placeholder="write something"
              name="pincode"
              value={userDetail.address.pincode}
              onChange={changeHandler}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
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
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.date}</td>
                  <td>{`${item.address.city},${item.address.state},${item.address.pincode} `}</td>
                  <td>
                    <button onClick={() => editHandler(index)}>Edit</button>
                    <button onClick={() => removeHandler(index)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Copy;
