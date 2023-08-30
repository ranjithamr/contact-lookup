import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by first name..."
        value={query}
        onChange={handleInputChange}
        className="text-black border-2 border-black rounded-full px-3 py-2"
      />   
    </div>
  );
};

export default SearchBar;
