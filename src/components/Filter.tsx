import React, {useState, useEffect} from 'react'
import Faker from '@faker-js/faker';
import './sass/Filter.scss'

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

interface FilterProps {
    filterKey: string, 
    products: Product[],
    setSearched: (searchValue: boolean)=>void;
}
const Filter : React.FC<FilterProps> = ({filterKey, products, setSearched}) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(getFilteredProducts(products, filterKey));
    useEffect(()=>{
        setFilteredProducts(getFilteredProducts(products, filterKey))
    }, [filterKey])
    return (
        <div className="trends" onClick={()=>setSearched(true)}>
            <p>Latest Trends</p>
            <div className="cards">
           {filteredProducts.slice(0, 5).map((product: Product, key: number)=>(
            <div className="card" key={key}>
                <img src={product.imageURL} alt="" />
                <p>{product.name}</p>
            </div>
           ))}</div>
           <p>Popular Suggestions</p>
           {filteredProducts.slice(0, 5).map((product: Product, key: number)=>(
                <p className='suggestions' key={key}>{product.name}</p>
           ))}
        </div>
    )
}

const getFilteredProducts = (products: Product[], filterKey: string) : Product[] => {
    return products.filter((product: Product) => product.name.toLowerCase().includes(filterKey.toLowerCase()) || product.category.includes(filterKey));
}

export default Filter;