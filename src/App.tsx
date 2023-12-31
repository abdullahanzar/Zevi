import React, {useState} from 'react';
import Search from './components/Search';
import { faker } from '@faker-js/faker';

interface Product {
  id: number,
  name: string,
  category: string, 
  imageURL: string,
  description: string,
  price: number, 
  rating: number,
  brand: string,
  wishlist: boolean
}

function App() {
  // eslint-disable-next-line
  const [products, setProducts] = useState<Product[]>(generateFakeProducts(100));
  return (
    <div className="App">
      <Search products={products}/>
    </div>
  );
}

const generateFakeProducts = (count: number) : Product[] => {
  const fakeProducts: Product[] = [];
  for(let i=0; i<count; i++) {
    const fakeProduct: Product = {
      id: i,
      name: faker.commerce.productName(),
      category: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      imageURL: faker.image.urlLoremFlickr({
      category: faker.commerce.product(),
      }),
      price: Number.parseInt(faker.commerce.price()),
      rating: Math.random()*10,
      wishlist: false,
      brand: faker.commerce.productName().includes("T") ? "H&M": "Mango",
    }
    fakeProducts.push(fakeProduct);
  }
  return fakeProducts;
}

export default App;
