import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      className="border border-gray-300 rounded-md px-2 py-1 pl-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full md:w-auto"
      placeholder="Search for sensors..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
