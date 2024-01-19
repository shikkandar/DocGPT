import '../../src/assets/css/Home.css';
import Navbar from '../components/Navbar';
import MainBody from '../components/MainBody';
import { NavbarProvider } from '../contexts/NavbarContext';

const HomePage = () => {
  return (
    <NavbarProvider>
      <div className='main-container'>
        <Navbar />
        <MainBody />
      </div>
    </NavbarProvider>
  )
}

export default HomePage;