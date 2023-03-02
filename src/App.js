
import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';
import Elenco from './pages/elenco/elenco';

function App() {

  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element= {<Home />}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
        <Route path='/Fotos' element={<Fotos/>}/>
        <Route path='/Elenco' element={<Elenco/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
