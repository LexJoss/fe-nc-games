import {getCommentsByRID} from '../utils/api'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { DeleteComment } from '../utils/api';
import { DeleteFader } from './deleteFader';


export const Comments = (props) => {

    const commentChange1 = props.comments
    console.log(commentChange1)

    const refreshComments = props.change
    
    
   
    const [comments, setComments] = useState([])
    const { review_id } = useParams();
    const [success, setSuccess] = useState(false)
    

    const KillComment = (e) => {
        return DeleteComment(e)
        .then (() =>{refreshComments()})
        .then(() => setSuccess(true))
         }

         const turnItOff = () => {
            setSuccess(false)
          }

    

    useEffect(() => {
        getCommentsByRID(review_id)
        .then((comments) => {setComments(comments.reverse())})
    }, [props, review_id])

    

    

   
 if (typeof(props.data) === 'string' && props.data !== '0') {
    

    return (
            <section className ="display">
                <h3> Comments</h3>
                {!success && <br />} 
                {success && <DeleteFader off={turnItOff}/>}
             <ul className="ul">

               
                {comments.map((data) => {
                    return (
                        
                        <li key={data.comment_id}>
        
                        <div className ="card3">
                       
                    <p>"{data.body}"</p>
                    <p className="right">{data.author}</p>
                    <p className="right-date">{data.created_at}</p>
                    <br></br>
                    <p className="left">Votes: {data.votes}</p>
                    <p className="right"><button className="vote-button2" value={data.comment_id} onClick={(e) => {KillComment(e.target.value)}}>Delete Comment</button></p>
                    
                    
    
                        </div>
    
                        </li>
                        
                        
                        
                       
                        
                        
                    );
                })} 
                
             </ul>
            </section>
            )
        }}