import React, { useState } from 'react';
import './App.css';


const App = () => {
  
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);
  const [form, setForm] = useState({
    blueCount: 0,
    bluePrefix: '',
    bluePerRow: 1,
    redCount: 0,
    redPrefix: '',
    redPerRow: 1,
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Generate Tokens
  const generateTokens = () => {
    const newBlueTokens = Array.from(
      { length: parseInt(form.blueCount) }, 
      (_, i) => `${form.bluePrefix}${i+1}`
    );
    const newRedTokens = Array.from(
      { length: parseInt(form.redCount) }, 
      (_, i) => `${form.redPrefix}${i + 1}`
    );
    
    setBlueTokens(newBlueTokens);
    setRedTokens(newRedTokens);
  };

  // Clear Tokens and Form
  const clearTokens = () => {
    setBlueTokens([]);
    setRedTokens([]);
    setForm({
      blueCount: 0,
      bluePrefix: '',
      bluePerRow: 1,
      redCount: 0,
      redPrefix: '',
      redPerRow: 1,
    });
  };

  return (
    <div className="token-generator-container">
      <h2>Token Generator</h2>
      <form className="token-form">
        <div className="form-group">
          <label>Number of Blue Tokens</label>
          <input type="number" name="blueCount" value={form.blueCount} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Prefix for Blue Tokens</label>
          <input type="text" name="bluePrefix" value={form.bluePrefix} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Blue Tokens per Row</label>
          <input type="number" name="bluePerRow" value={form.bluePerRow} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Number of Red Tokens</label>
          <input type="number" name="redCount" value={form.redCount} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Prefix for Red Tokens</label>
          <input type="text" name="redPrefix" value={form.redPrefix} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Red Tokens per Row</label>
          <input type="number" name="redPerRow" value={form.redPerRow} onChange={handleChange} />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={generateTokens}>Generate</button>
          <button type="button" onClick={clearTokens}>Clear</button>
        </div>
      </form>

      {/*Blue Tokens Value display*/}
      {blueTokens.length > 0 && (
        <div>
          <h3>Blue Tokens</h3>
          <div className="token-grid" style={{ gridTemplateColumns: `repeat(${form.bluePerRow}, 1fr)` }}>
            {blueTokens.map((token, index) => (
              <div key={index} className="blue-token token">
                {token}
              </div>
            ))}
          </div>
        </div>
      )}

       {/*Red Tokens Value display */}
      {redTokens.length > 0 && (
        <div>
          <h3>Red Tokens</h3>
          <div className="token-grid" style={{ gridTemplateColumns: `repeat(${form.redPerRow}, 1fr)` }}>
            {redTokens.map((token, index) => (
              <div key={index} className="red-token token">
                {token}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;




