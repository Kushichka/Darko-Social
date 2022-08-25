import { useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';


function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <NavBar isLogged={isLogged} setIsLogged={setIsLogged} />
      <AppRouter isLogged={isLogged} setIsLogged={setIsLogged} />
    </div>
  );
}

export default App;
