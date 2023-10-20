import React, { useEffect, useState } from 'react'
import './sass/displayProducts.scss'
import Star from './Star'

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

interface DisplayProductsProps {
    products: Product[],
    filterKey: string,
    brand: string[],
    rating: string[], 
    price: number[] 
}

const DisplayProducts : React.FC<DisplayProductsProps> = ({products, filterKey, brand, rating, price}) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(getFilteredProducts(products, filterKey, brand, rating, price));
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(()=>{
        setFilteredProducts(getFilteredProducts(products, filterKey, brand, rating, price))
    }, [filterKey, brand, rating, price])
  return (
    <div className="products">
        {
            filteredProducts.map((product)=>(
                <ProductCards product={product} />
            ))
        }
    </div>
  )
}

interface ProductCardsProps {
    product : Product
}

const ProductCards : React.FC<ProductCardsProps> = ({product}) => {
    const [viewProduct, setViewProduct] = useState<boolean>(false);
    const [wishlisted, setWishListed] = useState<boolean>(false);
    return (
        <div className="Product-Card" onMouseEnter={()=>setViewProduct(true)} onMouseLeave={()=>setViewProduct(false)}>
            <div className='card-image'>
            <img src={product.imageURL} alt="" />
            {viewProduct && <div className='hoverView'>View Product</div>}
            <div className={wishlisted ? "entypo-heart-selected" : "entypo-heart"} onClick={()=> !wishlisted ? setWishListed(true) : setWishListed(false)}></div>
            </div>
            <p>{product.name}</p>
            <div className='product-price'>
            <p className='crossedOut'>Rs.{product.price+199}</p><p className='mainprice'>Rs.{product.price}</p>
            </div>
            <Star num={Math.min(Math.floor(product.rating), 5)} />
        </div>
    )
}

const getFilteredProducts = (products: Product[], filterKey: string, brand: string[], rating: string[], price:number[]) : Product[] => {
    let filtered: Product[] =  products.filter((product: Product) => {
        const nameMatches = product.name.toLowerCase().includes(filterKey.toLowerCase());
        return nameMatches;
    })
    if(brand.length!==0) {
        filtered = filtered.filter((product)=>{
            const brandMatches = brand.includes(product.brand);
            return brandMatches;
        })
    }
    if(rating.length!==0) {
        filtered = filtered.filter((product)=>{
            const ratingMatches = rating.includes(Math.min(Math.floor(product.rating), 5).toString());
            return ratingMatches;
        })
    }
    if(price.length!==0) {
        filtered = filtered.filter((product)=>{
            const priceMatches = product.price<price[0]
            return priceMatches;
        })
    }
    return filtered;
}

export default DisplayProducts;