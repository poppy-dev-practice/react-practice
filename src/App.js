import './App.css';
import ComponentC from './component/ComponentC';
import { UserProvider } from './component/UserContext';

function App() {

  return (
    <div className="App">
      <UserProvider value=" please god forgive me ">
      <ComponentC></ComponentC>
      </UserProvider>
     
    </div>
  );
}

export default App;
