import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddInventory from './Pages/AddInventory/AddInventory';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItem from './Pages/MyItem.js/MyItem';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:id' element={
        <RequireAuth>
           <Inventory></Inventory>
        </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={<RequireAuth>
          <ManageInventories></ManageInventories>
        </RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddInventory></AddInventory>
        </RequireAuth>}></Route>
        <Route path='/myitem' element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>

    </div>
  );
}

export default App;
