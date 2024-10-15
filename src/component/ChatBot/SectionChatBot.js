


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SectionChatBot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
function SectionChatBot() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [flag, setFlag] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const ImageComponent = ({ user }) => {
        if (user === 'User') {
            return (
                <img
                    alt=""
                    src="titlelog.png"
                    width="30"
                    height="25"
                    className="d-inline-block align-top"
                />
            );
        } else {
            return (
                <img
                    alt=""
                    src="chatgpt-48.png"
                    width="35"
                    height="30"
                    className="d-inline-block align-top"
                />
            );
        }
    };


    const fetchChatHistory = async () => {
        try {
              const username=  localStorage.getItem('username'); //로컬 저장소에 있는 username을 가져옴

             const response = await axios.post('/api/chatbot-init', {username });
           const userMessage=response.data;

       //     const userMessage = [{ username:'sdds', date:'3/11', req_msg:'sdds', res_msg:'sdds' }, { username:'sdds', date:'3/11', req_msg:'sdds', res_msg:'sdds' }];
            const transformedMessages = []; //배열을 이용해서 user와 chatAI메시지를 나눔
            userMessage.forEach(msg => {
                transformedMessages.push({ text: msg.reqMsg, user: 'User' });
                transformedMessages.push({ text: msg.resMsg, user: 'ChatAI' });
            });
            setChatHistory( transformedMessages);

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
        if (!userInput.trim()||flag==='1') return;
          setFlag('1'); //flag를 이용해서 버튼이 눌러지면 응답이 올때까지 버튼 기능이 동작하지 않게 함
        setButtonDisabled(true);
        setChatHistory(prevChatHistory => [
            ...prevChatHistory,
            { text: userInput, user: 'User' }
        ]);
// 입력값을 바로 반영함

  /*      setChatHistory(prevChatHistory => [
            ...prevChatHistory,
            { text: 'dsds', user: 'ChatAI' }
        ]);
*/
       // const userMessage = [{ username:'sdds', date:'3/11', req_msg:'sdds', res_msg:'sdds' }, { username:'sdds', date:'3/11', req_msg:'sdds', res_msg:'sdds' }];
    //    setChatHistory(userMessage);
        // Clear input after sending message
        setUserInput(''); //입력값 초기화

        try {
            const username=  localStorage.getItem('username');//로컬 저장소에 있는 username을 가져옴

             const response = await axios.post('/api/chatbot-answer', { text: userInput,username });
        const userMessage=response.data;
           // const userMessage = [{ username:'sdds', date:'3/11', req_msg:'sdds', res_msg:'sdds' }, { username:'sdds', date:'3/11', req_msg:'sdds', res_msg:'sdds' }];
            const transformedMessages = [];
            userMessage.forEach(msg => {
                transformedMessages.push({ text: msg.reqMsg, user: 'User' });
                transformedMessages.push({ text: msg.resMsg, user: 'ChatAI' });
                setChatHistory( transformedMessages);
                setFlag('0');
                setButtonDisabled(false);
            });
        } catch (error) {
            console.error('Error sending message:', error);
            setFlag('0');
            setButtonDisabled(false);
        }
    };

    return (
        <div className="container mt-3" >
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <div className="chat-container" style={{ maxHeight: '475px', marginBottom: '20px', overflowY: 'auto',borderRadius:0n }}>
                        {chatHistory.map((message, index) => (
                            <div key={index} className="message">
                                <div
                                    className={`alert ${message.user === 'User' ? 'alert-primary' : 'alert-secondary'}`}
                                    style={{wordWrap: 'break-word', marginBottom: '5px'}}>

                                    <div className="user-label" style={{
                                        position: 'absolute',
                                        top: '15px',
                                        left: '40px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',

                                    }}>
                                        <ImageComponent user={message.user} />
                                        {' '} {message.user}
                                    </div>

                                    <div style={{textAlign: 'left', margin: '30px 20px 20px 30px' }}>{message.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="user-input" style={{
                        maxWidth: '900px',
                        position: 'fixed',
                        bottom: 25,
                        left: 300,
                        right: 0,
                        zIndex: 100, backgroundColor: '#fff', display: 'flex'
                    }}>
                        <textarea
                            type="text"
                            value={userInput}
                            onChange={handleUserInput}
                            className="form-control"
                            placeholder="Message"
                            style={{flex: '1', marginRight: '10px'}}
                        />
                        <button onClick={handleSendMessage} className="btn btn-primary"
                                style={{ backgroundColor: buttonDisabled ? 'grey' : 'black'}}><FontAwesomeIcon icon={faArrowUp}/></button>
                        <div className="chatgpt-message">
                            ChatAI는 실수를 할 수 있습니다. 중요한 정보는 확인하세요.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionChatBot;