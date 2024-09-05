import React, { useState } from 'react';
import Home from './pages/Home';
import Chat from './components/Chat';
import Header from './components/Header';
import SideBar from './components/SideBar';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (msg) => {
    setMessages([...messages, msg]); // Adiciona a nova mensagem ao array de mensagens
  };

  return (
    <article className="flex flex-row h-screen bg-[#121212]">
      <div className="hidden md:flex md:z-20 md:top-0"> 
        <SideBar />
      </div>
      <div className="flex flex-col justify-between w-full"> 
        <Header />
        <Home messages={messages} />
        <Chat onSendMessage={handleSendMessage} />
      </div>
    </article>
  );
};

export default App;
