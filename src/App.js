import React, { useState } from 'react'
import Home from './pages/Home'
import Chat from './components/Chat'
import Header from './components/Header'
import SideBar from './components/SideBar'

const App = () => {
  const [messages, setMessages] = useState([])

  const handleSendMessage = (msg) => {
    setMessages([...messages, msg]) // Adiciona a nova mensagem ao array de mensagens
  }

  return (
    <div class="bg-[#121212] min-h-screen">
      <Header />
      <SideBar />
      <Home messages={messages} />
      <Chat onSendMessage={handleSendMessage} />
    </div>
  )
}

export default App