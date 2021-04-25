import React, { useState, useEffect, useRef } from 'react'

const useWebSocketChatPage = () => {
    const [chatLog, setChatLog] = useState([]);
    const [ws, setWs] = useState();
    const connected = useRef(false)
    
    const connect = () => {
      console.log("Connecting");
      const ws = new WebSocket("ws://" + window.location.host);
      setWs(ws);
      ws.onopen = (event) => {
        console.log("Opened", event);
        connected.current = true;
      };
      ws.onclose = (event) => {
        console.log('Closed', event);
        connected.current = false;
      };
      ws.onmessage = (msg) => {
        const message = JSON.parse(msg.data);
        setChatLog((chatLog) => [...chatLog, message]);
      }
    }
    
    useEffect(() => connect(), []);
    
    const handleSendMessage = (msg) => {
      ws.send(JSON.stringify(msg));
    };
    return { chatLog, handleSendMessage };
}


export const ChatPage = () => {
  const { chatLog, handleSendMessage } = useWebSocketChatPage();

  return <ChatView chatLog={chatLog} onSendMessage={handleSendMessage} />;
  
}

export const ChatView = ({chatLog, onSendMessage}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <header>
        <h1>Chat page</h1>
      </header>
      <main>
        <div className="chat-display">
          {chatLog.map((message, index) => {
            return <div className="chat-msg" key={index}>{message}</div>;
          })}
        </div>
      </main>
      <footer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat-input"
            onChange={(e) => setMessage(e.target.value)}
            autoFocus={true}
            value={message}
          />
          <button value="Enter">Enter</button>
        </form>
      </footer>
    </div>
  );
}

export default ChatPage;