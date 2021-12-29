import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' ;
import Home from './component/Home';
import Addproduct from './component/Addproduct';
import Viewproduct from './component/Viewproduct';


function App() {
  return (
   
    <Router>
      
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addproduct' element={<Addproduct/>}></Route>
      <Route path='/viewproduct' element={<Viewproduct/>}></Route>
    </Routes>

</Router>
    
  );
}

export default App;
