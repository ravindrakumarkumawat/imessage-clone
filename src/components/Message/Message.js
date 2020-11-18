import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './Message.css'

const Message = ({
  id, 
  contents: {
    timestamp,
    message,
    uid,
    photo,
    email,
    displayName
  }
}) => {
  const user = useSelector(selectUser)
  return (
    <div className={`message ${user.email === email && 'message__sender'}`}>
      <Avatar 
        src={photo}
        className="message__photo"
        />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  )
}

export default Message
