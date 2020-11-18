import { IconButton } from "@material-ui/core";
import { MicNone } from "@material-ui/icons";
import React, { useState } from "react";
import Message from "../Message/Message";
import "./Chat.css";

const Chat = () => {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    // Firebase Handling...
    setInput("")
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <Message />
      </div>

      <div className="chat__input">
        <form>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            placeholder="iMessage" />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNone />
        </IconButton>        
      </div>
    </div>
  );
};

export default Chat;
