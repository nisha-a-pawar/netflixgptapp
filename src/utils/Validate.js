export const checkValidData = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
   // const nameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
  //  const isNameValid = nameRegex.test(name);

   
    if (!isEmailValid)   return "Email is invalid";
    
    if (!isPasswordValid)  return "Password is invalid";
    
    return null; // If all inputs are valid
};
