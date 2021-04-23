import React from 'react'

const ChatPage = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handlesubmit");
  } 
  
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
        <input type="text" className="chat-input" />
        <button value="Enter">Enter</button>
      </form>
      </footer>
    </div>
  );
}

export default ChatPage