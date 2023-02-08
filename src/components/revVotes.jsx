import {useState, useEffect} from 'react'
import { Route, Routes, Link, useParams } from 'react-router-dom';
import {PatchReviewVotes} from '../utils/api'

export const Votes = (props) => {

    const votes = props.votes 
    const review_id = props.review_id
    let buttonValue = "Upvote"
    let buttonValue2 ="Downvote"

    const [buttonCount, setButtonCount] = useState(0)

    const incVotes = (vote) => {
            setButtonCount ((change) =>  change + vote)
            PatchReviewVotes(review_id, vote).catch((err) => {

                console.log(err)
                                    })
    }



    return (
        <div className="left"><span>Votes: {votes + buttonCount}</span>
        <button className="vote-button" disabled={buttonCount === 1} onClick={() => {incVotes(1)}}>{buttonValue}</button>
        <button className="vote-button2" disabled={buttonCount === -1} onClick={() => {incVotes(-1)}}>{buttonValue2}</button>
        </div>
    )
}