import React, { useEffect } from 'react';
import { useState } from 'react';
import apparels from './assets/apparels.jpg';
import zevi from './assets/zevi.jpg';
import searchIcon from './assets/search-icon.png';
import './sass/search.scss'
import Filter from './Filter';
import { CSSTransition } from 'react-transition-group';
import Results from './Results';

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

interface SearchProps {
    products: Product[]
}

const Search : React.FC<SearchProps> = ({products}) => {
    const [filterKey, setFilterKey] = useState<string>("");
    const [searchBoxClicked, setSearchBoxClicked] = useState<boolean>(false);
    const [searched, setSearched] = useState<boolean>(false);
  return (
    <div className='search'>
        <img src={zevi} alt="" />
        {!searched && <img src={apparels} alt="" />}
        {
        <CSSTransition
        in={searched}
        timeout={500}
        classNames={"search-bar"}
        >
        <input type="text" className={!searched ? 'search-bar-original' : 'search-bar-searched'} placeholder='Search' value={filterKey} onChange={(e)=>setFilterKey(e.target.value)} onClick={()=>setSearchBoxClicked(true)} onKeyDown={(e)=>{if(e.key==='Enter') setSearched(true) }}/>
        </CSSTransition>
        }
        <img src={searchIcon} className={!searched ? 'search-img-original' : 'search-img-searched'}
        alt="" onClick={()=>{setSearched(true); setSearchBoxClicked(false)}}/>
        {
        !searched &&
        <CSSTransition 
        in={searchBoxClicked}
        timeout={300}
        classNames={"fade"}
        unmountOnExit
        >
        <Filter filterKey={filterKey} products={products} setSearched={setSearched}/>
        </CSSTransition>
        }   
        {
        searched &&
         <CSSTransition 
         timeout={300}
         classNames={"fade"}
         >
            <Results filterKey={filterKey} products={products}/>
         </CSSTransition>
        }
    </div>
  )
}

export default Search;
