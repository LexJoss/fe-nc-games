import {  Link } from 'react-router-dom';

export const Home = () => {
    return (

    <div className="display">
        <Link to={`/reviews`} className="text-link">
                    <p>Click to see to all reviews</p>
                    </Link>
    </div>
    )
}