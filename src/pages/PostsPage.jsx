import { useContext, useState, useEffect } from "react";
import { CardPost } from "../components/CardPost";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { UserContext } from "../context/UserContext";
import { PostContext } from "../context/PostContext";
import { Header } from "../components/Header";
import { TextArea } from "../components/TextArea";


export function PostsPage () {
    useProtectedPage()

    const {userId, token} = useContext(UserContext)
    const {posts, newPost, setNewPost, newLikeOrDislikePost, getPosts, getLikeDislikesPosts} = useContext(PostContext)

    useEffect(() => {
        getPosts()
    },[token, newPost, newLikeOrDislikePost])

    useEffect(() => {
        getLikeDislikesPosts()
    },[userId, token, posts, newLikeOrDislikePost])

   
    return(
       <>
       <Header/>
       <main className="flex flex-col min-h-full items-center p-8 gap-4">
        <TextArea placeholder={"Escreva seu post ..."} button={"Postar"} path={"posts"} setNewContent={setNewPost}/>
        <hr className="hr h-0.5"/>
        <div className="flex flex-col items-center gap-2 pt-4">
        {posts.map((post) => {
                return (
                    <CardPost
                    key={post.id}
                    post={post}
                    />
                    );
                })
             }
        </div>
       </main>
       </>
    )
}


