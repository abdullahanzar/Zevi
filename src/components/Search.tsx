import React from 'react';
import { useState } from 'react';
import apparels from './assets/apparels.jpg';
import zevi from './assets/zevi.jpg'
import './sass/search.scss'
import Filter from './Filter';

const Search : React.FC = () => {
    const [key, setKey] = useState<string>("");
  return (
    <div className='search'>
        <img src={zevi} alt="" />
        <img src={apparels} alt="" />
        <input type="text" placeholder='Search' value={key} onChange={(e)=>setKey(e.target.value)}/>
        {(key!="") && <Filter key={key}/>}   
    </div>
  )
}

export default Search;
