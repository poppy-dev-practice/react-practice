import './App.css';
import ComponentC from './component/ComponentC';
import Counterrender from './component/Counterrender';
import Hoccounter from './component/Hoccounter';
import Hochover from './component/Hochover';
import Pothuvarebderpannu from './component/Pothuvarebderpannu';
import Rendercounter from './component/Rendercounter';
import RenderHoover from './component/RenderHoover';
import { UserProvider } from './component/UserContext';

function App() {

  return (
    <div className="App">


     <Counterrender render={(count,handchager)=>(<RenderHoover count={count} handchager={this.handchager}/>)}/>
     <Counterrender render={(count,handchager)=>(<Rendercounter count={count} handchager={this.handchager}/>)}/>




    </div>

  )

export default App
