import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 1, // Scroll 2 slides at a time
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="p-4">
          <div className="card bg-white shadow-md rounded-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
              style={{ width: '100%', height: '400px' }} // Inline styles for debugging
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="mt-2">{product.description}</p>
              {/* <div className="flex mt-4">
                <img
                  src={product.appleStore}
                  alt="app-store"
                  className="w-32 h-10 object-contain mr-2 cursor-pointer"
                />
                <img
                  src={product.googlePlay}
                  alt="google-play"
                  className="w-32 h-10 object-contain cursor-pointer"
                />
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
