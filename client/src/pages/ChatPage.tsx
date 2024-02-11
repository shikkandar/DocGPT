import Navbar from '../components/Navbar';
import { NavbarProvider } from '../contexts/NavbarContext';
import InputBox from '../components/InputBox';
import Header from '../components/Main/Header';
import ChatItem from '../components/chat/ChatItem';

import '../../src/assets/css/Chat.css';
import PdfViewer from '../components/PdfViewer';

const conversation = [
  {
    role: "user",
    message: "Hi there, I'm looking for a good Italian restaurant in the area.Hi there, I'm looking for a good Italian restaurant in the area."
  },
  {
    role: "assistant",
    message: "Sure! There are a few great options nearby. Are you looking for something casual or more upscale?"
  },
  {
    role: "user",
    message: "I'm looking for something a bit upscale, with a nice ambiance for a special occasion."
  },
  {
    role: "assistant",
    message: "Got it! I recommend trying La Trattoria. It's known for its authentic Italian cuisine and cozy atmosphere."
  }

]



const ChatPage = () => {
  return (
    <NavbarProvider>
      <div className='main-container'>
        <Navbar />
        <div className='main-flex-item-1'>
          <Header />
          <div className='chat-box'>
            <PdfViewer />
            {
              conversation.map((item, index) => {
                return <ChatItem message={item.message} role={item.role} key={index} />
              })
            }
          </div>
          <InputBox />
        </div>
      </div>
    </NavbarProvider>
  )
}

export default ChatPage