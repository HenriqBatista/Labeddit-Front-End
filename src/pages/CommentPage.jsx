import { useContext, useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { UserContext } from "../context/UserContext";
import { PostContext } from "../context/PostContext";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { CardPost } from "../components/CardPost";
import { TextArea } from "../components/TextArea";
import { CardComment } from "../components/CardComment";

export function CommentPage() {
  useProtectedPage();

  const { userId } = useContext(UserContext);
  const {
    post,
    newComment,
    setNewComment,
    newLikeOrDislikePost,
    newLikeOrDislikedComment,
    likesDislikesComments,
    getLikesDislikesCommentsByPostId,
    getPostById,
  } = useContext(PostContext);
  
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
        getPostById(params.postId)
    }, 1000);
  },[newComment,newLikeOrDislikePost,newLikeOrDislikedComment,likesDislikesComments])

  useEffect(() => {
    getLikesDislikesCommentsByPostId(params);
  }, [userId, newLikeOrDislikedComment, likesDislikesComments]);


  return (
    <>
      <Header />
      <main className="flex flex-col min-h-full items-center p-8 gap-4">
        <div className="flex flex-col gap-1 w-full sm:w-[550px] items-center mb-2">
          {post === undefined ? (
            <svg width="84" height="85" viewBox="0 0 84 85" aria-hidden="true" role="status" fill="none" className="inline w-6 h-6 mr-3 animate-spin" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.9948 42.0258C41.9948 53.1636 37.5704 63.8451 29.6948 71.7207C21.8193 79.5962 11.1377 84.0207 0 84.0207V42.0258H41.9948Z" fill="#F9B24E"/>
            <path d="M84 42.0258C84 47.5407 82.9138 53.0015 80.8034 58.0966C78.6929 63.1916 75.5995 67.8211 71.7 71.7207C67.8004 75.6203 63.1709 78.7136 58.0758 80.824C52.9808 82.9344 47.52 84.0207 42.0051 84.0207V42.0258H84Z" fill="#A8BBC6"/>
            <path d="M41.9948 41.9948C41.9935 36.4788 43.0791 31.0165 45.1897 25.9201C47.3004 20.8238 50.3945 16.1933 54.2955 12.2933C58.1964 8.39334 62.8276 5.30028 67.9245 3.19093C73.0214 1.08158 78.4839 -0.00271036 84 5.0877e-06V41.9948H41.9948Z" fill="#45525B"/>
            <path d="M1.27212e-06 41.9948C-0.00135632 36.4796 1.0839 31.0182 3.19386 25.9225C5.30382 20.8268 8.39708 16.1968 12.2969 12.297C16.1968 8.39711 20.8268 5.30385 25.9225 3.19389C31.0182 1.08394 36.4796 -0.00135632 41.9948 1.27209e-06V41.9948H1.27212e-06Z" fill="#FE7E02"/>
            </svg>
          ) : (
            <CardPost
              key={post.id}
              post={post}
            />
          )}
          <TextArea
            placeholder={"Adicionar comentário"}
            button={"Responder"}
            path={`posts/${params.postId}/comments`}
            setNewContent={setNewComment}
          />
        </div>
        <hr className="hr h-0.5" />
        {post === undefined ? (
          <svg aria-hidden="true" role="status" viewBox="0 0 100 101" fill="#FE7E02" className="inline w-6 h-6 mr-3 animate-spin" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : (
          <div className="flex flex-col items-center gap-2 pt-4">
            {post.commentsPost
            .map((comment) => {
              return (
                <CardComment
                  key={comment.id}
                  comment={comment}
                  params={params.postId}

                />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
