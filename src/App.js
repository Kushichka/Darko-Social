import { useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';

function App() {

  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <AppRouter user={user} />
    </div>
  );
}

export default App;
