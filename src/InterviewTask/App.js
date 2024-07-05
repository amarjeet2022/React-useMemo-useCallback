// Trupti Gholap
// 16:15
// 1.get the data from below url
// https://jsonplaceholder.typicode.com/users
// 2. Display a table with basic data from this api
// 3. Add a input to Search name and apply debouncing here.
// 4. Add a reset button which will reset the data in table to initial data.
// 5. Add delete option in each row which should delete respective row when clicked
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [initialData, setInitialData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setInitialData(data);
        setCurrentData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    debounceSearch(event.target.value);
  };

  const debounceSearch = debounce((query) => {
    const filteredData = initialData.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setCurrentData(filteredData);
  }, 300);

  const resetTable = () => {
    setSearchTerm('');
    setCurrentData(initialData);
  };

  const deleteRow = (id) => {
    const updatedData = currentData.filter(user => user.id !== id);
    setCurrentData(updatedData);
  };

  return (
    <div className="App">
      <div className="controls">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name"
        />
        <button onClick={resetTable}>Reset</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td><button onClick={() => deleteRow(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

export default App;
