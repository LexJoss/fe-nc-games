import { useState, useEffect } from 'react';
import { GetCategories } from '../utils/api';
import {  Link } from 'react-router-dom';

function Nav( {defineCat} ) {

    const [cats, setCats] = useState([])


   
        useEffect(() => {
            GetCategories()
            .then((categories) => {setCats(categories)})
        }, [])

        const handleClick =(e) => {
            defineCat(e)
        }
        
        return (
            <section className ="content">
             <ul className="ul">
             <Link to={`reviews/`}>
                <li className ="inline-list"><button className="nav-button">All reviews</button></li>
                </Link>
               
                {cats.map((data, index) => {
                    return (
                        
                         <li className="inline-list" key={index}>
        
                        <Link to={`reviews/${data.slug}`}>
                        <button className="nav-button" onClick={(e) => {handleClick(e.target.value)}} value={data.slug}>{data.slug}</button>
                        </Link>
                       
    
                        </li>
                        
                        
                        
                       
                        
                        
                    );
                })} 
                
             </ul>
            </section>
            )
        }

      

  
  
  export default Nav;