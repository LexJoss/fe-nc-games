import {getReviewsByID} from '../utils/api'
import {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom';
import {Comments} from './comments'
import {Votes} from './revVotes'
import {Button} from './commentsButton'


export const Singlereview = () => {
   
    const [revDatabyID, setRevbyIDData] = useState([])
    const [commentChange, setCommentChange] = useState(0)
    
    const { review_id } = useParams();

    const updateComments = () => {
        setCommentChange(commentChange +1)
    }

    

    useEffect(() => {
        getReviewsByID(review_id)
        .then((reviews) => {setRevbyIDData(reviews)})
    }, [review_id])

   

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
                    <p className="right-date">{revDatabyID[0].created_at}</p>
                    <br></br>
                    <p className="left">Comments: {revDatabyID[0].comment_count}</p> 
                    <Votes review_id ={revDatabyID[0].review_id} votes= {revDatabyID[0].votes} />
                    <Link to={`/reviews`} className="text-link">
                    <button className="vote-button">Return to all reviews</button>
                    </Link>
                        </div>

                        </li>
                        
                        
                        
                       
                        
                        
                 
                
             </ul> 
            <Button review_id ={revDatabyID[0].review_id} change={updateComments}/>
            <Comments data={checkData} review_id={revDatabyID[0].review_id} comments={commentChange} />
            </section>
            )
        }}
