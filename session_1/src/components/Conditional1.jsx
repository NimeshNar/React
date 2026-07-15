import React from 'react'

const Conditional1 = ({isLoggedIn}) => {
    if(isLoggedIn) {
        return <h4>Login Successful....</h4>
    }else{
        return <h4>Login Failed....</h4>
    }
}

export default Conditional1