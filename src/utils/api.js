import axios from 'axios'


const gamesApi = axios.create({
    baseURL: 'https://lexj-ncgames-project.onrender.com/api'
});

export const getCategories = () => {
    return gamesApi.get(`/categories`)
    .then(({data}) => {
        return data
    })}

 export const getReviews = () => {
    return gamesApi.get(`/reviews`)
    .then(({data}) => {
        return data
    })
}

export const getReviewsByID = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`)
    .then(({data}) => {
        return data
    })
}

   


