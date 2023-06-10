import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";
import {SignupPage} from "../pages/SignupPage";
import {PostsPage} from "../pages/PostsPage";
import {CommentPage} from "../pages/CommentPage";

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="signup" element={<SignupPage />}/>
            <Route path="posts" element={<PostsPage />}/>
            <Route path="posts/:postId" element={<CommentPage />}/>
        </Routes>
        </BrowserRouter>
    )
}