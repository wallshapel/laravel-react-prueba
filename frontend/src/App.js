import { Routes, Route } from 'react-router-dom';
import { Weather } from './components/Weather/Weather';
import Record from './components/Record';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Weather /> } />        
        <Route path='/record' element={ <Record /> } />        
      </Routes>
    </div>
  );
}

export default App;