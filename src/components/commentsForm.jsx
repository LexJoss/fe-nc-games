import React from 'react'; 
import {useState} from 'react'
import {Fader} from './fader'
import {Fader2} from './userErrFader'
import {PostComment} from '../utils/api'

export const Commentform = (props) => { 


    const [body, setBody] = useState("")
    const [username, setUsername] = useState("")
    const [success, setSuccess] = useState(false);
    const [err, setErr] =useState(null)
    const [loading, setLoading] = useState(false)

   const review_id = props.review_id

   const changeComments = props.change
   
   

    const handleSubmit = (event) => {
        event.preventDefault()
        setErr(null)
        setLoading(true)
        return PostComment(review_id, body, username)
        .then (() => {setSuccess(true)})
        .then (() => {const timeout = setTimeout(() => {
          setLoading(false)
      }, 5000);
      })
        .then (() => changeComments())
        .catch((err) => {
          setErr(err.response.status)
          changeComments()

          const timeout = setTimeout(() => {
            setLoading(false)
        }, 5000);
        })
        } 

    const turnItOff = () => {
      setSuccess(false)
    }

    const turnErrOff= () => {
      setErr(null)
    }

    
   
  
  return ( 
    <section className ="display">
    <div className="card3"> 
    <form onSubmit={handleSubmit}>
        <br />
        <label>Your comment:</label><br></br>
        <textarea className="text-body"placeholder="Remember, be nice!" cols="30" rows="5" minLength="3" required="required" onChange={(e) => {setBody(e.target.value)}}/><br /><br />
        <label>Username:</label><br></br>
        <input className="text-body2" type="text" minLength="8" required="required" onChange={(e) => {setUsername(e.target.value)}}></input><br></br>
        <button className="vote-button" disabled={loading === true} type="submit">Post Comment</button>
        <br />
        {!success && <br />}  {!err && <br />}
        {success && <Fader off={turnItOff}/>}  {err === 400 && <Fader2 off={turnErrOff}/>}
        
    </form>
    </div>
    </section>
    
  ); 
  
} 