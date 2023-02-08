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

export const getCommentsByRID = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`)
    .then(({data}) => {
        return data
    })
}

export const PatchReviewVotes = (review_id, patchVotes) => {

    const patchBody = {inc_votes : patchVotes}

    return gamesApi.patch(`/reviews/${review_id}`, patchBody)
    .then(({data}) => {
        return data
    })
}

   


