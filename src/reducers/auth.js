const defaultAuthState = {
  current_user: 'anc.shukla@gmail.com'
}

const authReducer = (state = defaultAuthState, action) => {
  switch(action.type) {
    case 'LOGIN':
      const loginData = action.loginDetails;

      fetch('/api/users', {
        body: JSON.stringify(loginData),
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'post'
      })
      .then( response => response.json())
      .then( data => {
        if (data.logged_in === 'true') 
          return {
            current_user: data.email
          }
      })
      
    case 'SIGNUP':
      const signupData = action.signupDetails;
      // console.log(data);

      fetch('/api/users', {
        body: JSON.stringify(signupData),
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'post'
      })
      .then( response => response.json())
      .then( data => console.log(data))

    default:
      return state;
  }
}

export default authReducer;