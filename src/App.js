import './App.scss';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './components/Inicio';
import VistaNumeros from './components/VistaNumeros';
import Sobre from './components/Sobre';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Inicio/>} />
    <Route path='numeros/:num' element={<VistaNumeros/>}/>
    <Route path='sobre' element={<Sobre/>}/>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
