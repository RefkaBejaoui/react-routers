
import './App.css';
import { Routes, Route } from 'react-router';
import Home from './component/Home'
import Trailer from './component/Trailer';
const App = () => {
  return (
    <> 
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/trailer/:id" element={<Trailer/>}/>
    </Routes>
    </>
    )
}
export default App
   


