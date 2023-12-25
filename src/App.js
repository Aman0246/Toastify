import logo from './logo.svg';
import './App.css';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function App() {
  return (
<>
<Header/>
<Routes>
  <Route path='/' element={<Component1/>}/>
  <Route path='/Component2' element={<Component2/>}/>
  <Route path='/Component3' element={<Component3/>}/>
</Routes>
</>
  );
}

export default App;
