import {getReviewsByID} from '../utils/api'
import {useState, useEffect} from 'react'
import { Route, Routes, Link, useParams } from 'react-router-dom';


export const Comments = (checkData) => {

    console.log(checkData)
   
    const [revDatabyID, setRevbyIDData] = useState([])

    const { review_id } = useParams();

    useEffect(() => {
        getReviewsByID(review_id)
        .then((reviews) => {setRevbyIDData(reviews)})
    }, [])

    console.log(revDatabyID)

   

    

    return (
            <section className ="display">
             <ul className="ul">
               
                {revDatabyID.map((data) => {
                    return (
                        
                        <li key={data.review_id}>
        
                        <div className ="card2">
                       
                            
                    
                    <img src = {data.review_img_url} alt={data.title} />
                    <h2>{data.owner} reviewed:<strong> {data.title}</strong> by {data.designer}</h2>
                    <br></br>
                    <p>"{data.review_body}"</p>
                    <br></br>
                    <p>Votes: {data.votes}</p>
                    <p >Comments: {data.comment_count} </p> 
                    <p>{data.created_at}</p>
                    <Link to={`/reviews`} className="link">
                    <p>Click to return to all reviews</p>
                    </Link>
    
                        </div>
    
                        </li>
                        
                        
                        
                       
                        
                        
                    );
                })} 
                
             </ul>
            </section>
            )
        }