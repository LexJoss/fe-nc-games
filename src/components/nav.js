import { useState, useEffect } from 'react';
import { GetCategories } from '../utils/api';

function Nav() {

    const [cats, setCats] = useState([])

    console.log(cats)

   
        useEffect(() => {
            GetCategories()
            .then((categories) => {setCats(categories)})
        }, [])
        
        return (
            <section className ="content">
             <ul className="ul">
                <li className ="inline-list"><button className="nav-button">All reviews</button></li>
               
                {cats.map((data, index) => {
                    return (
                        
                         <li className="inline-list" key={index}>
        
                        
                        <button className="nav-button">{data.slug}</button>
                       
    
                        </li>
                        
                        
                        
                       
                        
                        
                    );
                })} 
                
             </ul>
            </section>
            )
        }

      

  
  
  export default Nav;