import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
