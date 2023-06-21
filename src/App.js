import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './App.css';


const StarRating = () => {
  const totalStars = 5;
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          icon={faStar}
          key={index}
          className={`star ${index < rating ? 'filled' : 'empty'}`}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

function ShopHomepage() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCart);
    setCartCount(cartCount - 1);
  };

  const isItemInCart = (item) => {
    return cartItems.includes(item);
  };

  return (
    <div>
    

    {/* // <!-- Navigation--> */}

    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container px-4 px-lg-5"><a className="navbar-brand" href="#!">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">All Products</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
  <button className="btn btn-outline-dark" type="submit">
    <i className="bi-cart-fill me-1"></i>Cart
    <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
  </button>
</form>
        </div>
      </div>
    </nav>
    


      {/* // <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>


      {/* // <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


            {/* Firstcard */}
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* star rating */}
                    <div>
                    <StarRating />
                    </div>
                    {/* <!-- Product price--> */}
                    $40.00 - $80.00
                  </div>
                </div>


             
              {/* Product actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* "Add to cart" button */}
                    {isItemInCart('Fancy Product') ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart('Fancy Product')}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={() => addToCart('Fancy Product')}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>


            {/* second card */}
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Sale badge--> */}
              <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Special Item</h5>
                   {/* star rating */}
                   <div>
                    <StarRating />
                    </div>

                  {/* <!-- Product price--> */}
                  <span className="text-muted text-decoration-line-through">$20.00</span>$18.00
                </div>
              </div>
              {/* Product actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* "Add to cart" button */}
                    {isItemInCart('Special_item') ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart('Special_item')}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={() => addToCart('Special_item')}
                      >
                        Add to cart
                      </button>
                    )}
                     
                  </div>
                </div>
                </div>
          </div>


          {/* third card */}
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Sale badge--> */}
              <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>



              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>

              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Sale Item</h5>
                   {/* star rating */}
                   <div>
                    <StarRating />
                    </div>
                  {/* <!-- Product price--> */}
                  <span className="text-muted text-decoration-line-through">$50.00</span>$25.00
                </div>
              </div>
             
                {/* Product actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* "Add to cart" button */}
                    {isItemInCart('sale_item') ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart('sale_item')}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={() => addToCart('sale_item')}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* fourth card */}
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Popular Item</h5>
                  {/* star rating */}
                  <div>
                    <StarRating />
                    </div>
                  {/* <!-- Product price--> */}
                  $40.00
                </div>
              </div>
                {/* Product actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* "Add to cart" button */}
                    {isItemInCart('Popular_item') ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart('Popular_item')}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={() => addToCart('Popular_item')}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
                </div>
          </div>
         
          {/* fifith card */}
          <div className="col mb-5">
            <div className="card h-100">

              {/* <!-- Sale badge--> */}
              <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>



              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Sale Item</h5>
                   {/* star rating */}
                   <div>
                    <StarRating />
                    </div>
                  {/* <!-- Product price--> */}
                  <span className="text-muted text-decoration-line-through">$50.00</span>$25.00
                </div>
              </div>
             {/* Product actions */}
             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* "Add to cart" button */}
                    {isItemInCart('sale-item') ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart('sale-item')}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={() => addToCart('sale-item')}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* sixth item */}
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Fancy Product</h5>
                   {/* star rating */}
                   <div>
                    <StarRating />
                    </div>
                  {/* <!-- Product price--> */}
                  $120.00 - $280.00
                </div>
              </div>

           {/* Product actions */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* "Add to cart" button */}
                    {isItemInCart('Fancy-product') ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart('Fancy-product')}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={() => addToCart('Fancy-product')}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Sale badge--> */}
              <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>


              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Special Item</h5>
                  {/* star rating */}
                  <div>
                    <StarRating />
                    </div>

                  {/* <!-- Product price--> */}
                  <span className="text-muted text-decoration-line-through">$20.00</span>$18.00
                </div>
              </div>
             {/* Product actions */}
             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* "Add to cart" button */}
                    {isItemInCart('Special-item') ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart('Special-item')}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={() => addToCart('Special-item')}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          <div className="col mb-5">
            <div className="card h-100">

              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Popular Item</h5>
                   {/* star rating */}
                   <div>
                    <StarRating />
                    </div>
                  {/* <!-- Product price--> */}
                  $40.00
                </div>
              </div>
               {/* Product actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* "Add to cart" button */}
                    {isItemInCart('Popular-item') ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart('Popular-item')}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={() => addToCart('Popular-item')}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            
            
          </div>
        </div>
      </div>
    </section>


    {/* <!-- Footer--> */}

    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
      </div>
    </footer>
    

  </div>




     
  )
}

export default ShopHomepage