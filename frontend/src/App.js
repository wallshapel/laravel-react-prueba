import { Routes, Route } from 'react-router-dom';
import { Searcher } from './components/Searcher';
import Record from './components/Record';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Searcher /> } />        
        <Route path='/record' element={ <Record /> } />        
        <Route path='/record/city/:id' element={ <Record /> } />
      </Routes>
    </div>
  );
}

export default App;