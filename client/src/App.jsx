import React, { useState } from "react";
import io from 'socket.io-client'
import Chat from './Chat';


const socket = io.connect("http://localhost:1000")



const App = () => {

  const [username, setUsername] = useState("")
const [room, setRoom] = useState("")
const [showchat, setShowChat] = useState(false)



const joinchat = () =>{
  if(username !== "" && room !== ""){
    socket.emit("join_room",room);
    setShowChat(true)
    
  }
}


  return (
    <>
    {
      !showchat && (
        <div className="join_room">
      <h1>Join Chat</h1>
      <input type="text"
       placeholder="Enter your Name" 
       onChange={(e)=>setUsername(e.target.value)}
       />
      <input type="text"
      placeholder="Enter Chat Room"
      onChange={(e)=>setRoom(e.target.value)}
      />
      <button onClick={joinchat}>Join</button>
    </div>
      )


    }
{
  showchat &&
  (
    <Chat socket={socket} username={username} room={room} />

  )
}
    
    
    
    </>
  )
}

export default App