import {getReviews} from '../utils/api'
import {useState, useEffect} from 'react'

const Display = () => {
    
    
    const [revData, setRevData] = useState([])

    useEffect(() => {
        getReviews()
        .then((reviews) => {setRevData(reviews)})
    }, [])

    console.log(revData)

    

    return (
            
            <ul className="ul">
               
                {revData.map((data, index) => {
                    return (
                        <li key={data.review_id}>
                        <div className ="card">
                            
                    
                    <img src = {data.review_img_url} alt={data.title} />
                    <h2>{data.owner} reviewed:<strong> {data.title}</strong> by {data.designer}</h2>
                    <br></br>
                    <p>"{data.review_body}"</p>
                    <br></br>
                    <p>Votes: {data.votes}</p>
                    <p >Comments: {data.comment_count} </p> 
                    <p>{data.created_at}</p>
                        </div>
                        </li>
                        
                    );
                })}
                
            </ul> 
            )
        }
    


export default Display