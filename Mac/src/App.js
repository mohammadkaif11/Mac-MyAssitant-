import React from 'react'
import Navbar from "./component/Navbar";
import MyAssistant from "./component/MyAssistant";
import TaskManger from "./component/TaskManger";
import Chat from './component/Chat'
import Home  from "./component/Home";
import About from './component/About';
import { Route, Routes} from "react-router-dom";
import Help from './component/Help';

function App() {
  
  return (
  <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route exact path="/Chat" element={<Chat/>}  />
        <Route exact path="/myAssistant"   element={<MyAssistant /> } />
        <Route exact path="/taskManger" element={<TaskManger/>} />
        <Route exact path="/help" element={<Help/>} />
        <Route exact path="/about" element={<About/>} />

      </Routes>
  </div>


  );
}

export default App;
