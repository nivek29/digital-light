import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import '../styles/style.css'

export const Signatures = () => {
  const {store, actions} = useContext(Context);
  

  useEffect( () =>{           
    
    console.log(store.materias)
  },[]);
  return (
    <div className="container">
      <div className="row my-5  " style={{justifyContent: "center"}}>

        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 m-3 lista fondo" >
          <div>
            <h3 className="text-center text-light mt-3">Heading</h3>
            <hr className="colorF" />
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 m-3 lista fondo" >
          <div>
            <h4 className="text-center text-light mt-3">Heading</h4>
            <hr className="colorF" />
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 m-3 lista fondo" >
          <div>
            <h4 className="text-center text-light mt-3">Heading</h4>
            <hr className="colorF" />
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 m-3 lista fondo" >
          <div>
            <h4 className="text-center text-light mt-3">Heading</h4>
            <hr className="colorF" />
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 m-3 lista fondo" >
          <div>
            <h4 className="text-center text-light mt-3">Heading</h4>
            <hr className="colorF" />
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 m-3 lista fondo" >
          <div>
            <h4 className="text-center text-light mt-3">Heading</h4>
            <hr className="colorF" />
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 m-3 lista fondo" >
          <div>
            <h4 className="text-center text-light mt-3">Heading</h4>
            <hr className="colorF" />
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 m-3 lista fondo" >
          <div>
            <h4 className="text-center text-light mt-3">Heading</h4>
            <hr className="colorF" />
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
            <div className="col-xs-12 text-center mb-4 bg-white">
              <h6>Heading</h6>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  )
}

