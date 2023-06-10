import { createContext, useContext, useState } from "react";
import { useRequestData } from "../hooks/useRequestData";
import { UserContext } from "./UserContext";

export const PostContext = createContext();

export function PostContextProvider({ children }) {
  const { token, headers, userId } = useContext(UserContext);
  const { requestData } = useRequestData();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(undefined);
  const [newPost, setNewPost] = useState([]);
  const [newLikeOrDislikePost, setNewLikeOrDislikePost] = useState(undefined);
  const [newComment, setNewComment] = useState([]);
  const [newLikeOrDislikedComment, setNewLikeOrDislikedComment] =
    useState(undefined);
  const [likesDislikesPosts, setLikesDislikesPosts] = useState([]);
  const [likesDislikesComments, setLikesDislikesComments] = useState([]);

  const getPosts = async () => {
    if (token) {
      const response = await requestData("posts", "GET", headers);
      setPosts(response.data);
    }
  };

  const getLikeDislikesPosts = async () => {
    if (userId) {
      const response = await requestData(
        `users/${userId}/posts/likes`,
        "GET",
        headers
      );
      setLikesDislikesPosts(response.data);
    }
  };

  const getLikesDislikesCommentsByPostId = async (params) => {
    if (userId) {
      const response = await requestData(
        `users/${userId}/posts/${params}/comments/likes`,
        "GET",
        headers
      );
      setLikesDislikesComments(response.data);
    }
  };

  const getPostById = async (params) => {
    
      const response = await requestData(
        `posts/${params}`, 
        "GET",
         headers);
      setPost(response.data);
    
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        post,
        setPost,
        newPost,
        setNewPost,
        newComment,
        setNewComment,
        newLikeOrDislikedComment,
        setNewLikeOrDislikedComment,
        newLikeOrDislikePost,
        setNewLikeOrDislikePost,
        likesDislikesPosts,
        setLikesDislikesPosts,
        likesDislikesComments,
        setLikesDislikesComments,
        getPosts,
        getLikeDislikesPosts,
        getLikesDislikesCommentsByPostId,
        getPostById,
      }}
    >
        {children}
    </PostContext.Provider>
  );
}
