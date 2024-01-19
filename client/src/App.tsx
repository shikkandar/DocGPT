import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { Routes, Route } from 'react-router';

function App() {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/new-chat" element={<HomePage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<SignupPage />} />  
      </Routes>
   );
}

export default App