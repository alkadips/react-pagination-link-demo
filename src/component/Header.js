import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
 import './Header.css';
 const items = [1, 2, 3, 4, 5];

const Header=()=>
{
    const [activeImage, setActiveImage] = useState(1)
    const [withPagination, setwithPagination] = useState(false)
  return <>
  <div className='header-wrapper'>
    {
        items.map(item=> <div><a onClick={()=>setActiveImage(item)}>Image {item}</a></div>)
    }
    <div><a onClick={()=>setwithPagination(!withPagination)}>WithPagination</a></div>

  </div>
  <div className='images-wrapper'>
    <img  className='img-css' src={`/demo${activeImage}.jpg`}></img>
  </div>
  {withPagination && <ul style={{display:'flex',justifyContent:'center'}}>{items.map(item=><li style={{textAlign:'center',listStyleType:'none', padding:'2px', border:'1px solid blue',width: '20px',}} onClick={()=>setActiveImage(item)}> {item}</li>)}</ul>}
  </>
}
export default Header;

