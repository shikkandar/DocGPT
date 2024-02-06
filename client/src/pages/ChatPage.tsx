import '../../src/assets/css/Chat.css';
import Navbar from '../components/Navbar';

import { NavbarProvider } from '../contexts/NavbarContext';
import { LuSun } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import InfoItem from '../components/Main/InfoItem';
import InputBox from '../components/InputBox';
import Header from '../components/Main/Header';

const ChatPage = () => {
  return (
    <NavbarProvider>
      <div className='main-container'>
        <Navbar />
        <div className='main-flex-item-1'>
        <Header />
      <div className='flex-item-1-item-1'>
        <InfoItem sectionClass='Capabilities' icon={<LuSun style={{ width: '32px', height: '32px' }} />} />
        <InfoItem sectionClass='Limatations' icon={<CgDanger style={{ width: '32px', height: '32px' }} />} />
        <InfoItem sectionClass='Examples' icon={<AiOutlineThunderbolt style={{ width: '32px', height: '32px' }} />} />
      </div>
      <InputBox />
    </div>
      </div>
    </NavbarProvider>
  )
}

export default ChatPage