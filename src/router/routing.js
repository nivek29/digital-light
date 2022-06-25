import React, { Fragment } from 'react';
import  {Route, Routes} from 'react-router-dom';
import {Home} from '../views/home'
import {MenuCiclo} from '../views/menuCiclo'
import { MenuSignatures } from '../views/menuSignatures';
import {Navbar} from '../components/navbar';
import { Footer } from '../components/footer';

export const Routing = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
        <Routes>   
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/ciclos/primaria' element={<MenuCiclo message= {"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit..."} head= {"Primaria"} data ={["Primero","Segundo","Tercero","Cuarto","Quinto","Sexto"]}></MenuCiclo> }> </Route>
        <Route path='/ciclos/secundaria' element={<MenuCiclo message= {"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit..."} head= {"Secundaria"} data ={["Primero","Segundo","Tercero","Cuarto","Quinto","Sexto"]}></MenuCiclo> }> </Route>
        <Route path='//' element={<MenuCiclo message= {"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit..."} head= {"Secundaria"} data ={["Primero","Segundo","Tercero","Cuarto","Quinto","Sexto"]}></MenuCiclo> }> </Route>
        
        </Routes>
        <Footer></Footer>
    </Fragment>

    
  )
}

