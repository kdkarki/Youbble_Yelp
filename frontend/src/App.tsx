import React, { useState } from 'react';
import './App.css';

function App() {
  const [term, setTerm] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleSubmit = () => {
    // Handle API call here or send data to a backend server
    console.log('Term:', term, 'Location:', location);
  };

  return (
    <div className="App">
      <h1>Yelp Business Search</h1>
      <div>
        <input 
          type="text"
          placeholder="Search term..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default App;
