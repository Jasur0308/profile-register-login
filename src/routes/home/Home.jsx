import Card from '../card/Card'
import { useEffect, useState } from 'react';
import './Home.css'
import axios from '../../api/Axios';
import Navbar from '../navbar/Navbar'
import { Audio } from 'react-loader-spinner'
;<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>

const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios('/products')
            .then(response => { setProducts(response.data)
        })
    }, [])
    
  return (
    <>
      <Navbar/>
      <div className='new'>
        <div className="container">
          <div className="new__wrapper">
            <h3 className='new__title'>New Arrivals</h3>
            <div className="new__cards">
              {products.map(product => (
                <Card key={product.id} product={product} />
              )).slice(0, 20)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home