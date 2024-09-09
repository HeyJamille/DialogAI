import React from 'react';

const SideBar = ({ messages }) => {
  return (
    <aside className="relative w-[250px] bg-white p-4 flex-shrink-0">
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message}
          </div>
        ))
      ) : (
        <p>Nenhum chat iniciado.</p>
      )}
    </aside>
  );
};

export default SideBar;
