import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductId } from '../../API/api';
import './ProductDetails.css';

function ProductDetails() {

    const { id } = useParams();

    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {

        const fetchProductDetails = async () => {

            const data = await getProductId(id)
            setProductDetails(data)
        }

        fetchProductDetails();

    }, [id])

    const handleBuyNow = () => {
        window.confirm("The product is out of stock")
    }

    return (
        <div className="product-details-container">
            <img src={productDetails.image} alt="image" className="product-image" />

            <div className="product-info">
                <h2 className="product-title">
                    {productDetails.title}
                </h2>
                <p className="product-description">
                    {productDetails.description}
                </p>
                <p className="product-price">
                    ${productDetails.price}
                </p>
                <Link>
                    <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                </Link>
                <Link to='/'>
                    <button className="go-back-home">Go back home</button>
                </Link>
            </div>

        </div>

    );
}

export default ProductDetails;