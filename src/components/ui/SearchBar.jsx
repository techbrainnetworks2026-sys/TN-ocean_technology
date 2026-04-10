import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, products = [], onSelect }) => {
  const categories = ['All', 'Data Analytics', 'Robotics', 'Management', 'Environmental', 'Energy'];
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const suggestions = searchTerm.trim() === '' ? [] : products.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.desc.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 4);

  return (
    <div className="search-filter-container">
      
      {/* Search Input */}
      <div className="search-bar" ref={searchRef}>
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          placeholder="Search products, capabilities, or technologies..." 
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => { setSearchTerm(''); setShowSuggestions(false); }}>
            ×
          </button>
        )}

        {/* Autocomplete Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="search-dropdown">
            {suggestions.map((item) => (
              <div 
                key={item.id} 
                className="search-suggestion-item"
                onClick={() => {
                  setSearchTerm('');
                  setShowSuggestions(false);
                  if (onSelect) onSelect(item);
                }}
              >
                <div className="suggestion-icon">⚡</div>
                <div className="suggestion-content">
                  <div className="suggestion-title">{item.title}</div>
                  <div className="suggestion-cat">{item.category}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Category Pills */}
      <div className="category-filters">
        {categories.map((cat, idx) => (
          <button 
            key={idx}
            className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

    </div>
  );
};

export default SearchBar;
