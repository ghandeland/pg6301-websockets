import React, { useState } from 'react'

const useWebSocketChatPage = () => {
    const [chatLog, setMessage] = useState(["Hello", "Hey", "test"]);
    const onSendMessage = (m) => { console.log(m); }
    
    return { chatLog, onSendMessage }
}


const ChatPage = () => {
  const { chatLog, onSendMessage } = useWebSocketChatPage()

  return(
    <ChatView chatLog={chatLog} onSendMessage={onSendMessage} />
  )
  
}

const ChatView = ({chatLog, onSendMessage}) => {
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
        <div className="chat-display"></div>
      </main>
      <footer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat-input"
            onChange={(e) => setMessage(e.target.value)}
            autoFocus={true}
          />
          <button value="Enter">Enter</button>
        </form>
      </footer>
    </div>
  );
}

export default ChatPage