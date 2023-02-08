import {getCommentsByRID} from '../utils/api'
import {useState, useEffect} from 'react'
import { Route, Routes, Link, useParams } from 'react-router-dom';


export const Comments = (props) => {

    
    
   
    const [comments, setComments] = useState([])

    const { review_id } = useParams();

    useEffect(() => {
        getCommentsByRID(review_id)
        .then((comments) => {setComments(comments)})
    }, [])

    console.log(comments)

    

   
 if (typeof(props.data) === 'string' && props.data !== '0') {
    

    return (
            <section className ="display">
                <h3> Comments</h3>
             <ul className="ul">
               
                {comments.map((data) => {
                    return (
                        
                        <li key={data.comment_id}>
        
                        <div className ="card3">
                       
                    <p>"{data.body}"</p>
                    <p className="right">{data.author}</p>
                    <br></br>
                    <p className="left">Votes: {data.votes}</p>
                    <p className="left">{data.created_at}</p>
                    
    
                        </div>
    
                        </li>
                        
                        
                        
                       
                        
                        
                    );
                })} 
                
             </ul>
            </section>
            )
        }}