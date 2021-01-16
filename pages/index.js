import React, { useState, useEffect } from 'react';
import { Card } from '../components/card.jsx';
import { SearchBox } from '../components/search-box.jsx';

const Index = () => {
  const [getMonsters, setMonsters] = useState([]);
  const [getSearchField, setSearchField] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const handleChange = (e) => setSearchField(e.target.value);
  
  const filteredMonsters = getMonsters.filter(e =>
    e.name.toLowerCase().includes(getSearchField.toLowerCase())
  );

  return (
    <div className="index min-h-screen flex flex-col items-center bg-red-400 ">
      <SearchBox
        placeholder="Search Cats..."
        handleChange={e => handleChange(e)} />
      <Card monsters={filteredMonsters} />
    </div>
  );
}
export default Index;