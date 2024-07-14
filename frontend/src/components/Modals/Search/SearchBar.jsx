import React, { useState } from 'react';
import './SearchBar.css'; // CSS dosyası için import

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Sayfanın yenilenmesini engelle
    // Arama işlemini burada gerçekleştirin (API çağrısı, filtreleme vb.)
    console.log('Arama terimi:', searchTerm);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search-input"
        placeholder="Arama yapın..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button id="search-button" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
