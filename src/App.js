import './App.css';
import ItemList from './components/ItemList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home/" element={<Home />} />
          <Route path="/Todo/" element={<ItemList />}/>
          <Route path="/Calculator/" element={<Calculator />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
