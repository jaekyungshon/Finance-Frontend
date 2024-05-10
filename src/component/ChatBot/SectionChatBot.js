


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SectionChatBot() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [description, setDescription] = useState('');


    const fetchChatHistory = async () => {
        try {
            const response = await axios.get('/api/chatbot/history');
            setChatHistory(response.data.text);
        } catch (error) {
            console.error('Error fetching chat history:', error);
        }
    };


    useEffect(() => {
        fetchChatHistory();
    }, []);

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { text: userInput, user: 'user' };
        setChatHistory([...chatHistory, userMessage]);
        setUserInput('');

        try {
            const response = await axios.post('/api/chatbot/chat', { text: userInput });
            const botMessage = { text: response.data, user: 'bot' };
            setChatHistory([...chatHistory, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="container mt-5" style={{ marginLeft: 'auto', marginRight: '50px' }}>
            <div className="row justify-content-end">
                <div className="col-md-6">
                    <div className="chat-container">
                        {chatHistory.map((message, index) => (
                            <div key={index} className={`message ${message.user === 'user' ? 'text-right' : 'text-left'}`}>
                                <div className={`alert ${message.user === 'user' ? 'alert-primary' : 'alert-secondary'}`}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="user-input mt-3 text-right">
                        <input
                            type="text"
                            value={userInput}
                            onChange={handleUserInput}
                            className="form-control"
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSendMessage} className="btn btn-primary mt-2">Send</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="description-container mt-5 text-right">
                        <div className="alert alert-info rounded p-3">
                            {description || 'chatgpt prompt description '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionChatBot;