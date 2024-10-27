import './App.css';
import InputForm from './components/InputForm';
import ShowData from './components/ShowData';
import Navbar from './components/Navbar';
import UpdateForm from './components/UpdateData';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add/mendhepathar' element={<InputForm/>}/>
        <Route path='/show/mendhepathar' element={<ShowData/>}/>
        <Route path='/update/mendhepathar/:id' element={<UpdateForm/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
