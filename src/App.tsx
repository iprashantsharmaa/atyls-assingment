import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-black">
      <Outlet />
    </div>
  );
}

export default App;
