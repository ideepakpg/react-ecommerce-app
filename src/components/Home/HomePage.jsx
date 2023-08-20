import React, { useEffect, useState } from 'react';
import './HomePage.css'
import { getAllProducts } from '../../API/api'
import { Link } from 'react-router-dom';

function HomePage() {
    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {
            const data = await getAllProducts();
            setProducts(data)

        }
        fetchProducts()

    }, [])

    return (
        <div className="product-grid">
            {
                products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt="image" />
                        <h2>{product.title}</h2>
                        <div>
                            <span className="price">${product.price}</span>
                        </div>
                        <Link to={`/product/${product.id}`}>
                            <button className="product-button">Product Details</button>
                        </Link>

                    </div>
                ))
            }

        </div >
    );
}

export default HomePage;