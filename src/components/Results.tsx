import React, { useEffect, useState } from "react";
import "./sass/results.scss";
import oneStar from "./assets/one-star.jpg";
import twoStar from "./assets/two-stars-2.jpg";
import threeStar from "./assets/three-stars.jpg";
import fourStar from "./assets/four-stars.jpg";
import fiveStar from "./assets/five-stars.jpg";
import Star from "./Star";
import DisplayProducts from "./DisplayProducts";

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

interface ResultsProps {
  filterKey: string;
  products: Product[];
}

const Results: React.FC<ResultsProps> = ({ filterKey, products }) => {
    const [brand, setBrand] = useState<string[]>([]);
    const [price, setPrice] = useState<number[]>([]);
    const [rating, setRating] = useState<string[]>([]);
    useEffect(()=>{
        console.log(price)
    }, [price])
  return (
    <div className="searchResults">
      <p>Search Results</p>
      <div className="divisions">
        <div className="filters">
          <div className="filter">
            <p>BRAND</p>
            <div className="checkbox">
              <input type="checkbox" name="Mango" id="" onChange={()=>{!brand.includes('Mango')?setBrand([...brand, 'Mango']) : setBrand([])}}/>
              <label htmlFor="Mango">Mango</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="H&M" id="" onChange={()=>{!brand.includes('H&M')?setBrand([...brand, 'H&M']) : setBrand([])}}/>
              <label htmlFor="H&M">H&M</label>
            </div>
            <div className="break"></div>
          </div>
          <div className="filter">
            <p>PRICE RANGE</p>
            <div className="checkbox">
              <input type="checkbox" name="<500" id="" onChange={()=>{!price.includes(500)?setPrice([...price, 500]) : setPrice([])}}/>
              <label htmlFor="<500">Under 500</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="<1000" id="" onChange={()=>{!price.includes(1000)?setPrice([...price, 1000]) : setPrice([])}}/>
              <label htmlFor="<1000">Under 1000</label>
            </div>
            <div className="break"></div>
          </div>
          <div className="filter">
            <p>RATINGS</p>
            <div className="checkbox">
              <input type="checkbox" name="5 stars" id="" onChange={()=>{!rating.includes('5')?setRating([...rating, '5']) : setRating([])}}/>
              <Star num={5} />
            </div>
            <div className="checkbox">
              <input type="checkbox" name="4 stars" id="" onChange={()=>{!rating.includes('4')?setRating([...rating, '4']) : setRating([])}}/>
              <Star num={4} />
            </div>
            <div className="checkbox">
              <input type="checkbox" name="3 stars" id="" onChange={()=>{!rating.includes('3')?setRating([...rating, '3']) : setRating([])}}/>
              <Star num={3} />
            </div>

            <div className="checkbox">
              <input type="checkbox" name="2 stars" id="" onChange={()=>{!rating.includes('2')?setRating([...rating, '2']) : setRating([])}}/>
              <Star num={2} />
            </div>

            <div className="checkbox">
                <input type="checkbox" name="1 stars" id="" onChange={()=>{!rating.includes('1')?setRating([...rating, '1']) : setRating([])}}/>
              <Star num={1} />
            </div>
            <div className="break"></div>
          </div>
        </div>
            <DisplayProducts products={products} filterKey={filterKey} rating={rating} price={price} brand={brand}/>
      </div>
    </div>
  );
};

export default Results;
