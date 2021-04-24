import { ChatView } from "../../src/client/ChatPage";
import React from 'react';
import ReactDOM from 'react-dom';

describe("chat view", () => {
    it("shows chat log as messages", () => {
        const container = document.createElement("div");
        ReactDOM.render(
            <ChatView chatlog={["a", "b", "c"]} />, container
        );
        
        expert(container.querySelector('.chat-msg')[0].textContent).toEqual("a");
        expect(container).toMachSnapshot();
    })
    
});