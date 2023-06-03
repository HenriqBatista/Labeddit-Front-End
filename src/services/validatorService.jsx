const emailValidator = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };
  
  const passwordValidator = (password) => {
    return /^[0-9a-zA-Z$*&@#]{6,}$/.test(password);
  };
  
  const nameValidator = (name) => {
    return /.{2,}/.test(name);
  };
  
  const postValidator = (post)=>{
    return /.{1}/.test(post)
  }
  
  const ValidationService = {
    emailValidator,
    passwordValidator,
    nameValidator,
    postValidator
  };
  
  export default ValidationService;