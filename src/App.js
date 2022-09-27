import './App.css';
import ComponentC from './component/ComponentC';
import Hoccounter from './component/Hoccounter';
import Hochover from './component/Hochover';
import { UserProvider } from './component/UserContext';

function App() {

  return (
    <div className="App">
      <Hoccounter></Hoccounter>
      <Hochover></Hochover>
    </div>
  );
}

export default App;
