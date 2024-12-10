import React from 'react'; // Import React (optional for newer React versions but good for clarity)
import './App.css'; // Import the CSS for the app
import Nav from './components/Nav'; // Use plural `components` for directory convention
import Hero from './pages/Hero'; // Removed `.jsx`, as file extensions are optional in imports

function App() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;
