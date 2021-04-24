import { ChatView } from "../../src/client/ChatPage";
import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils'

describe("chat view", () => {
    it("shows chat log as messages", () => {
        
        const cLog = ['hello', 'foo', "bar"];
        const handleSendMsg = jest.fn()
        
        const container = document.createElement("div");
        ReactDOM.render(
          <ChatView chatLog={cLog} onSendMessage={handleSendMsg} />,
          container
        );
                
    expect(container.querySelector('.chat-msg').textContent).toEqual('hello');
    expect(container).toMatchSnapshot();
    });
    
    it("can send a chat message", () => {
        const onSend = jest.fn();
        
        const container = document.createElement("div");
        ReactDOM.render(
          <ChatView chatLog={[]} onSendMessage={onSend} />,
          container
        );
        
        Simulate.change(container.querySelector("form input"), {
           target: { value: "Hello foo" }
        });
        
        expect(
          container.querySelector('form input').getAttribute('value')
        ).toEqual('Hello foo');
        
        Simulate.submit(container.querySelector("form"));
        expect(onSend).toBeCalledWith('Hello foo');
        expect(container.querySelector("form input").getAttribute("value")).toEqual("");
        
    });
});