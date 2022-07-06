import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import '../styles/style.css'

export const Contact = () => {
  const {store, actions} = useContext(Context);
  

  useEffect( () =>{           
    
    console.log(store.materias)
  },[]);
  return (
    <section className="position-relative py-4 py-xl-5" style={{ background: "#dec6c587" }}>
        <div className="container position-relative" style={{fontSize:"21px"}}>
            <div className="row mb-1">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <p>Contactenos</p>
                    <p className="w-lg-50">Escribanos sus dudas, propuestas de mejora o solicite ayuda con la plataforma</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
               
                <div className="col-md-4 col-lg-4 col-xl-4">
                    <div>
                        <form className="p-3 p-xl-4" method="post">
                            <div className="mb-3"><input className="form-control" type="text" id="name-1" name="name" placeholder="Nombre"/></div>
                            <div className="mb-3"><input className="form-control" type="email" id="email-1" name="email" placeholder="Email"/></div>
                            <div className="mb-3"><textarea className="form-control" id="message-1" name="message" rows="6" placeholder="Duda"></textarea></div>
                            <div><button className="btn btn-primary d-block w-100 "  style={{background:"#393E46", border:"#393E46"}} type="submit">Send </button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

