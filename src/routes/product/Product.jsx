import { useParams } from 'react-router-dom';
import axios from '../../api/Axios';
import './Product.css';
import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios(`/product/${id}`)
      .then(response => {
        console.log(response.data.title); // Log the title for debugging
        setProduct(response.data.product); // Set the product state with the fetched data
      })
      .catch(error => console.error("Error fetching the product:", error)); // Handle errors
  }, [id]);

  return (
    <>
        <Navbar/>
        <div>
            {
                product && (
                <div className="user-profile">
                    <div className="profile-header">
                        <img className="profile-avatar" src={product.images[0]} alt={product.title} />
                    <div className="profile-info">
                        <h1 className="profile-name">{product.title}</h1>
                        <p className="profile-email">${product.price}</p>
                        <p className="profile-id">Product ID: {product.id}</p>
                    </div>
                </div>
                <div className="profile-details">
                    <h2>Details</h2>
                    <p><strong>Description:</strong> {product.description}</p>
                </div>
            </div>
            )
        }
    </div>
    </>
  );
}

export default Product;