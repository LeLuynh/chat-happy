import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './context/AuthProvider';
import Test from './components/test';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //       <Route path='/' element={<ChatRoom/>}/>
    //     </Routes>
    <BrowserRouter>

      <AuthProvider/>
        <Routes>
            <Route path='/' element={<ChatRoom/>}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
