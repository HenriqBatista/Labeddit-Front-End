import axios from "axios";
import { BASE_URL } from "../constants/url";

const getPosts = async (headers) => {
    const response = await axios
    .get(`${BASE_URL}/posts`)
    .then((response) =>{
        return response.data.posts
    })
    .catch((error) =>{
        return error.response
    })
    return response
}

const createPost = async (headers, body) => {
    const response = await axios
    .post(`${BASE_URL}/posts`, body, headers)
    .then((response) =>{
        return response.data
    })
    .catch((error) =>{
        return error.response
    })
    return response
}

const likeOrDislikePost = async (headers, body, id) => {
    const response = await axios
    .post(`${BASE_URL}/posts/${id}/like`, body, headers)
    .then((response) =>{
        return response
    })
    .catch((error) =>{
        return error.response
    })
    return response
}

const getCommentByPostId = async (headers, id) => {
    const response = await axios
    .get(`${BASE_URL}/comments/${id}`, headers)
    .then((response) =>{
        return response.data.comments
    })
    .catch((error) =>{
        return error.response
    })
    return response
}

const createComment = async (headers, body, id) => {
    const response = await axios
    .post(`${BASE_URL}/comments/${id}`, body, headers)
    .then((response) =>{
        return response.data
    })
    .catch((error) => {
        return error.response
    })
    return response
}

const likeOrDislikeComment = async (headers, body, id) => {
    const response = await axios
    .post(`${BASE_URL}/comments/${id}/like`, body, headers)
    .then((response) =>{
        return response
    })
    .catch((error) =>{
        return error.response
    })
    return response
}

const usersServices = {
    getPosts,
    createPost,
    likeOrDislikePost,
    getCommentByPostId,
    createComment,
    likeOrDislikeComment
}

export default usersServices
