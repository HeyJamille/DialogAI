import React from 'react'

const Home = ({ messages }) => {
  return (
    <section className="relative">
      {messages.map((message, index) => (
        <div
          key={index}
          className="p-2 bg-white rounded-md w-auto absolute right-0 top-0 mt-6 mr-4 shadow-lg"
          style={{ top: `${index * 50}px` }} // Ajusta a posição vertical de cada mensagem
        >
          {message}
        </div>
      ))}
    </section>
  )
}

export default Home
