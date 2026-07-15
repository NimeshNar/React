import React from 'react'

const Conditional3 = (isLoggedIn) => {
  switch (isLoggedIn) {
    case true:
      return <h4>Login Successful....</h4>
    case false:
      return <h4>Login Failed....</h4>
    default:
      return <h4>Invalid Login Status</h4>
  }
}

export default Conditional3