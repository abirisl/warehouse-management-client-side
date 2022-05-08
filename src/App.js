import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Register from './component/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path= '/home' element={<Home></Home>}></Route>
          <Route path= '/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
