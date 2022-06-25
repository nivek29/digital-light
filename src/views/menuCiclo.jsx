import React from 'react'
import { Banner } from '../components/banner'

export const MenuCiclo = (props) => {
  return (
    <Banner data= {props.data} message = {props.message} head= {props.head}></Banner>
  )
}

