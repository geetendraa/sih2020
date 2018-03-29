export const login = (loginDetails) => ({
  type: 'LOGIN',
  loginDetails
});

export const signup = (signupDetails) => ({
  type: 'SIGNUP',
  signupDetails
});