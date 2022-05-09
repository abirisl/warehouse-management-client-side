import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import ContactUs from './component/ContactUs/ContactUs';
import Blogs from './component/Blogs/Blogs';
import Information from './component/Information/Information';
import AddItems from './component/AddItems/AddItems';
import ManageInventory from './component/ManageInventory/ManageInventory';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path= '/home' element={<Home></Home>}></Route>
          <Route path= '/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/product/:id' element={<Information></Information>}></Route>
          <Route path='/additems' element={<AddItems></AddItems>}></Route>
          <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
