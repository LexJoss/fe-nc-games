import { useState, useEffect } from 'react';
import { GetCategories } from '../utils/api';
import {  Link } from 'react-router-dom';


function Nav( {defineCat, defineSort, defineOrder} ) {


    const [cats, setCats] = useState([])

        //button management
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const [check5, setCheck5] = useState(false)

    const [checkOrder1, setCheckOrder1] = useState(false)
    const [checkOrder2, setCheckOrder2] = useState(false)

    //states management
    const Click1 =(e) => {
        setCheck1(true)

        setCheck2(false)
        setCheck3(false)
        setCheck4(false)
        setCheck5(false)

        defineSort(e)
        }
    
    const Click2 =(e) => {
        setCheck2(true)

        setCheck1(false)
        setCheck3(false)
        setCheck4(false)
        setCheck5(false)

        defineSort(e)
        }

    const Click3 =(e) => {
        setCheck3(true)

        setCheck1(false)
        setCheck2(false)
        setCheck4(false)
        setCheck5(false)

        defineSort(e)
        }

    const Click4 =(e) => {
        setCheck4(true)

        setCheck1(false)
        setCheck2(false)
        setCheck3(false)
        setCheck5(false)

        defineSort(e)
        }

    const Click5 =(e) => {
        setCheck5(true)

        setCheck1(false)
        setCheck2(false)
        setCheck3(false)
        setCheck4(false)

        defineSort(e)
        }

    const Order1 =(e) => {
        setCheckOrder1(true)
        setCheckOrder2(false)

        defineOrder(e)
    }

    const Order2 =(e) => {
        setCheckOrder2(true)
        setCheckOrder1(false)

        defineOrder(e)
    }

    const ClearAll =(e) => {
        setCheck1(false)
        setCheck2(false)
        setCheck3(false)
        setCheck4(false)
        setCheck5(false)
        setCheckOrder1(false)
        setCheckOrder2(false)

        defineCat(e)
        defineSort(e)
        defineOrder(e)
    }
    
    

   
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
                })} </ul>

             <ul className ="ul">
                <li>Filter by:</li>
                <li><button className="nav-button" disabled={check1 === true }onClick={(e) => {Click1(e.target.value)}} value="title">Title</button></li>

                <li><button className="nav-button" disabled={check2 === true }onClick={(e) => {Click2(e.target.value)}} value ="designer">Designer</button></li>

                <li><button className="nav-button" disabled={check3 === true }onClick={(e) => {Click3(e.target.value)}} value ="votes">votes</button></li>

                <li><button className="nav-button" disabled={check4 === true }onClick={(e) => {Click4(e.target.value)}} value ="created_at">Date</button></li>

                <li><button className="nav-button" disabled={check5 === true }onClick={(e) => {Click5(e.target.value)}} value="owner">Author</button></li>
             </ul>

             <ul className="ul">
                <li>Order</li>
                <li><button className="nav-button" disabled={checkOrder1 === true }onClick={(e) => {Order1(e.target.value)}} value="asc">Asc</button></li>
                <li><button className="nav-button" disabled={checkOrder2 === true }onClick={(e) => {Order2(e.target.value)}} value="desc">Desc</button></li>
                <br />
                <li><button className="nav-button" onClick={(e) => {ClearAll(e.target.value)}} value={null}>Clear Filters</button></li>
             </ul>

             
            </section>
            )
        }

      

  
  
  export default Nav;