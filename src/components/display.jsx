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
                        
                        <div className ="card">
                            
                        <p>
                    <img src = {data.review_img_url} alt={data.title} />
                    <li key="1">{data.owner} reviewed:<strong> {data.title}</strong> by {data.designer}</li>
                    <br></br>
                    <li key="2">"{data.review_body}"</li>
                    <br></br>
                    <li key="3">{data.created_at}</li>
                    <li key="4">Comments: {data.comment_count}</li> 
                    <li key="5">Votes: {data.votes}</li>
                        </p>
                        </div>
                        
                    );
                })}
                
            </ul> 
            )
        }
    


export default Display