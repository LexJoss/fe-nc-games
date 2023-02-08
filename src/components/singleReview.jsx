import {getReviewsByID} from '../utils/api'
import {useState, useEffect} from 'react'
import { Route, Routes, Link, useParams } from 'react-router-dom';
import {Comments} from './comments'

export const Singlereview = () => {
   
    const [revDatabyID, setRevbyIDData] = useState([])

    const { review_id } = useParams();

    useEffect(() => {
        getReviewsByID(review_id)
        .then((reviews) => {setRevbyIDData(reviews)})
    }, [])

    if (typeof revDatabyID[0] === 'object') {

        let checkData = revDatabyID[0].comment_count

        

        return (
            <section className ="display">
             <ul className="ul">
               
                        
                        <li key={revDatabyID[0].review_id}>
                    
                        <div className ="card2">
                       
                            
                    
                    <img src = {revDatabyID[0].review_img_url} alt={revDatabyID[0].title} />
                    <h2>{revDatabyID[0].owner} reviewed:<strong> {revDatabyID[0].title}</strong> by {revDatabyID[0].designer}</h2>
                    <br></br>
                    <p>"{revDatabyID[0].review_body}"</p>
                    <br></br>
                    <p >Comments: {revDatabyID[0].comment_count}</p>
                    <p className="left">Votes: {revDatabyID[0].votes} </p> 
                    <p className="left">{revDatabyID[0].created_at}</p>
                    <Link to={`/reviews`} className="text-link">
                    <p>[ Return to all reviews ]</p>
                    </Link>
                        </div>

                        </li>
                        
                        
                        
                       
                        
                        
                 
                
             </ul> 
            <Comments data={checkData} review_id={revDatabyID[0].review_id}/>
            </section>
            )
        }}
