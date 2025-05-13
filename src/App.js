import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './component/Todo.js'
import {HashRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Todo/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
//  as HashRouter