import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/products.css";// Import the external CSS file
import NavBar from './NavBar'; // Import the NavBar component
function FetchProds() {
    const [prods, setProds] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://10.191.243.51:5000/api/products');
                setProds(response.data);
            } catch (err) {
                setError('Failed to fetch products');
            }
        };
        fetchProducts();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!prods.length) {
        return <div>Loading products...</div>;
    }


    return (
        <div>        <NavBar />
        
        <div className="products-container">
      
            <h2>Products 📦 </h2>
            {prods.map(product => (
                <div key={product.id} className="product-box">
                    <p><strong> ✨ Name:</strong> {product.name}</p>
                    <p><strong> 💲Price:</strong> ${product.price}</p>
                    <p><strong> 🤔 Description:</strong> {product.description}</p>
                    <p><strong> 🗠 Stock:</strong> {product.stock}</p>
                </div>
            ))}
        </div>
        </div>

    );
}

export default FetchProds;
