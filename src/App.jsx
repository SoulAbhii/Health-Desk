import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Home />
      </main>
      {/* Footer can be added here later */}
    </div>
  );
}

export default App;
