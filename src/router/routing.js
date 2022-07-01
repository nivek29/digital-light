import React, { Fragment } from 'react';
import  {Route, Routes} from 'react-router-dom';
import {Home} from '../views/home'
import {MenuCiclo} from '../views/menuCiclo'
import {Navbar} from '../components/navbar';
import { Footer } from '../components/footer';

export const Routing = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
        <Routes>   
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/ciclos/primaria' element={<MenuCiclo></MenuCiclo> }></Route>
          <Route path='/ciclos/secundaria' element={<MenuCiclo></MenuCiclo>}></Route> 
        </Routes>
        <Footer></Footer>
    </Fragment>

    
  )
}

