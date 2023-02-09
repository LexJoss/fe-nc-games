import React from 'react'; 
import {useState} from 'react'
import {Commentform} from './commentsForm'

export const Button = (props) => { 

    const review_id = props.review_id

    const [check, setCheck] = useState(false);
     
  
    const Click = () => {setCheck(true)}
      
      
      
     
  
  return ( 
    <div>
    <button className="vote-button" disabled={check === true }onClick={() => {Click()}}>Leave a comment</button>
    {check && <Commentform review_id={review_id} change={props.change}/>} 
    </div>

    
  ); 
  
} 

