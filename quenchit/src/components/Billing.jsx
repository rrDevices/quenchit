import React from 'react';
import { qcoin } from '../assets';
import ProductCarousel from './ProductCarousel';

const products = [
  {
    name: 'Aqua Pay: Stay Hydrated',
    description: 'Stay Hydrated"xxxCoin + QR Code ',
    image: qcoin,
  },
  {
    name: 'Aqua Pay: QR Code Only',
    description: ' Stay Hydrated” XX Only QR Code ',
    image: qcoin,
  },
];

const Billing = () => {
  return (
    <section id="product" >
      <div >
        <ProductCarousel products={products} />
      </div>
    </section>
  );
};

export default Billing;
