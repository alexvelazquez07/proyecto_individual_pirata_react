import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Registrarse from './components/Registrarse';
import TodosPiratas from './components/TodosPirata';
import NuevoPirata from './components/NuevoPirata';
import Pirata from './components/VerPirata';
function App() {


  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/registrarse" element={<Registrarse/>}/>
            <Route path="/piratas" element={<TodosPiratas/>}/>
            <Route path="/pirata/nuevo" element = {<NuevoPirata/>}/>
            <Route path="/pirata/:id" element = {<Pirata/>}/>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
