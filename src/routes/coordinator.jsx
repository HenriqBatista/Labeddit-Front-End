export const goToLogin = (navigate) => {
  navigate("/");
};

export const goToSignup = (navigate) => {
  navigate("/signup");
};

export const goToPosts = (navigate) => {
  navigate("/posts");
};

export const goToCommentPage = (navigate, postId) => {
  navigate(`/posts/${postId}`);
};
