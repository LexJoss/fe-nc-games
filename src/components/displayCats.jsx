import {getReviewsByCat} from '../utils/api'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const DisplayCats = ( { cats, sortby, order } ) => {
    
   

    const [revData, setRevData] = useState([])

   
    

    useEffect(() => {
        if (cats) {
        let search = `/reviews/?category=${cats}`

        if(sortby) {search += `&sort_by=${sortby}`}

        if(order) {search += `&order=${order}`}

        console.log(search)
        getReviewsByCat(search)
        .then((reviews) => {setRevData(reviews)})
    } 
    else if (sortby) {
        let search = `/reviews/?sort_by=${sortby}`

        if(order) {search += `&order=${order}`}

        getReviewsByCat(search)
        .then((reviews) => {setRevData(reviews)})
    }
    else if (order) {
        let search = `reviews/?order=${order}`

        getReviewsByCat(search)
        .then((reviews) => {setRevData(reviews)})
    }

    else {let search = `reviews/`
    getReviewsByCat(search)
    .then((reviews) => {setRevData(reviews)})
}


    } , [cats, sortby, order]) 

    

    return (
            <section className ="display">
            <ul className="ul">
               
                {revData.map((data) => {
                    return (
                        
                        <li key={data.review_id}>
                             <Link to={`/reviews/${data.review_id}`} className="link">
                        <div className ="card">
                       
                    <h2><strong> {data.title}</strong> by {data.designer}</h2>
                    <h3>Reviewed by {data.owner}</h3>
                    <br></br>
                    <p>Votes: {data.votes}</p>
                    <p >Comments: {data.comment_count} </p> 
                    <p>{data.created_at}</p>
                    <br></br>
                    <p>Click to see full review</p>
    
                        </div>
                        </Link>
                        </li>
                        
                        
                       
                        
                        
                    );
                })}
                
                
            </ul> 
            </section>
            )
        }
    


export default DisplayCats