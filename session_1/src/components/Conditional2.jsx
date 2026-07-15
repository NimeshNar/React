import React from 'react'

const Conditional2 = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <h4>Login Successful....</h4> : <h4>Login Failed....</h4>}
            {isLoggedIn && <h4>Welcome User</h4>}
        </div>
    )
}

export default Conditional2