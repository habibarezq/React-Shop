import React, { useState } from 'react';
import "../styles/addproduct.css";
import NavBar from './NavBar';

function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock: ''
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product Added:", product);

        fetch("http://10.191.243.51:5000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
            body: JSON.stringify(product),
        })
            .then((response) => response.json())
            .then((data) => {
                setMessage("Product Added successfully!");
                setProduct({ name: "", description: "", price: "", stock: "" });
            })
            .catch((error) => setMessage("Error creating product!"));
    };

    return (
        <div>
            <NavBar />
            <div className="add-product-container">
                <h2>Add Product</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        className="input-field"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="input-field"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        className="input-field"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        className="input-field"
                        value={product.stock}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="submit-btn">Add Product</button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
