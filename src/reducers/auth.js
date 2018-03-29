const defaultAuthState = {
  current_user: '',
  userDetails: {
    firstName: '',
    lastName: ''
  }
}

const authReducer = (state = defaultAuthState, action) => {
  switch(action.type) {
    case 'LOGIN':
      const requestData = action.loginDetails;
      fetch('/api/user', {
        body: JSON.stringify(requestData),
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'get'
      })
      .then( response => response.json())
      .then( responseData => {
        return {
          current_user: responseData.current_user,
          userDetails: {
            firstName: responseData.firstName,
            lastName: responseData.lastName
          }
        }
      });

    case 'SIGNUP':
      const Data = action.signupDetails;
      console.log(requestData);
      // fetch('/api/user', {
      //   body: JSON.stringify(requestData),
      //   headers: {
      //     'user-agent': 'Mozilla/4.0 MDN Example',
      //     'content-type': 'application/json'
      //   },
      //   method: 'post'
      // })
      // .then()

    default:
      return state;
  }
}

export default authReducer;