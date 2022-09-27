import './App.css';
import ComponentC from './component/ComponentC';
import Hoccounter from './component/Hoccounter';
import Hochover from './component/Hochover';
import Pothuvarebderpannu from './component/Pothuvarebderpannu';
import Rendercounter from './component/Rendercounter';
import RenderHoover from './component/RenderHoover';
import { UserProvider } from './component/UserContext';

function App() {

  return (
    <div className="App">
     <Rendercounter></Rendercounter>
     <RenderHoover></RenderHoover>
     <Pothuvarebderpannu name = {()=>"pavithra"}></Pothuvarebderpannu>
    </div>
  );
}

export default App;
