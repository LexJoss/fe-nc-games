import {getReviews} from '../utils/api'
import {useState, useEffect} from 'react'
import {  Link } from 'react-router-dom';


const Display = () => {
    
    
    const [revData, setRevData] = useState([])

    useEffect(() => {
        getReviews()
        .then((reviews) => {setRevData(reviews)})
    }, [])

    

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
    


export default Display