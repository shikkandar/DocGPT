import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { NavbarProvider } from '../contexts/NavbarContext';
import InputBox from '../components/InputBox';
import Header from '../components/Main/Header';
import ChatItem from '../components/chat/ChatItem';
import PdfViewer from '../components/PdfViewer';
import { useChat } from '../contexts/ChatContext';
import '../../src/assets/css/Chat.css';
import { useParams } from 'react-router';
import { fetchUserMessage } from '../helpers/api-communicator';

const ChatPage: React.FC = () => {
  const chat = useChat();
  const chatRef = useRef<HTMLDivElement>(null);
  const {chatID} = useParams();
  console.log('initial chat', chat);
  console.log(chatID);
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserMessage(chatID);
        console.log('fetchUserMessage', data);
        chat.updateUserPdfUrl(data.data.pdfSecureUrl);
        chat.getChatMessages(data.data.conversation);
        console.log('chat.conversation data', chat.conversation);
      } catch (error) {
        console.error('Error fetching user message:', error);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    // Scroll to the bottom of the chat box when conversation updates
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
    
  }, [chat.conversation]);

  return (
    <NavbarProvider>
      <div className='main-container'>
        <Navbar />
        <div className='main-flex-item-1'>
          <Header />
          <div className='chat-box' ref={chatRef}>
            <PdfViewer />
            {chat.conversation.map((item, index) => (
              <ChatItem message = {item.content} role={item.role} key={index} />
            ))}
          </div>
          <InputBox />
        </div>
      </div>
    </NavbarProvider>
  );
};

export default ChatPage;
