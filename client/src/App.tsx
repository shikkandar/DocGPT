import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { Routes, Route } from 'react-router';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/new-chat" element={<HomePage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<SignupPage />} /> 
         <Route path="/chat" element={<ChatPage/>} />  

      </Routes>
   );
}

export default App
