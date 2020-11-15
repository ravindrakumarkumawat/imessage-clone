import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://res.cloudinary.com/diqcnmefm/image/upload/v1605447194/imessage/IMessage_logo_szhoj4.png" alt="imessage-logo"/>
        <h1>iMessage</h1>
      </div>
      <Button>Sign In</Button>
    </div>
  )
}

export default Login
