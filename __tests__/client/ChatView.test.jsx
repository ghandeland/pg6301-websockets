import { ChatView } from "../../src/client/ChatPage";
import React from 'react';
import ReactDOM from 'react-dom';

describe("chat view", () => {
    it("shows chat log as messages", () => {
        
        const cLog = ['hello', 'foo', "bar"];
        const handleSendMsg = jest.fn()
        
        const container = document.createElement("div");
        ReactDOM.render(
          <ChatView chatLog={cLog} onSendMessage={handleSendMsg} />,
          container
        );
                
        expect(
          container.querySelector('.chat-msg')
            .textContent
        ).toEqual('hello');
        expect(container).toMatchSnapshot();
    })
    
});