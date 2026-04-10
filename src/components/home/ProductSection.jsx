import React, { useState } from 'react';
import SearchBar from '../ui/SearchBar';

const ProductSection = ({ products, onProductClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter Logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" style={{background: 'var(--bg-dark)'}}>
      <div className="container">
        <h3 style={{textAlign: 'center'}}>Our Solutions</h3>
        <h2 style={{marginBottom: '0.5rem'}}>Comprehensive Marine Tech Suite</h2>
        <p style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem'}}>
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'solution' : 'solutions'}
        </p>
        
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
          products={products}
          onSelect={onProductClick}
        />
        
        {filteredProducts.length === 0 && (
          <div style={{textAlign: 'center', padding: '4rem 0', color: '#B3C5D7'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>No solutions found</h3>
            <p>Try adjusting your search or category filters to find what you're looking for.</p>
            <button 
              className="btn btn-primary" 
              style={{marginTop: '1.5rem'}}
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="card product-card" 
              style={{ cursor: 'pointer' }}
              onClick={() => onProductClick(product)}
            >
              <div className="product-thumbnail" style={{
                backgroundImage: `url(${product.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 210, 211, 0.2)', mixBlendMode: 'overlay'}}></div>
                <div className="card-hover-overlay">
                  <span>Explore Technical Details</span>
                </div>
              </div>
              <div className="product-content">
                <h4 style={{marginBottom: '0.5rem', color: '#fff', fontSize: '1.1rem'}}>{product.title}</h4>
                <p>{product.desc}</p>
                <button className="btn" style={{padding: '0.5rem 1rem', fontSize: '0.85rem'}}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
