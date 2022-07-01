
import { Banner } from "../components/banner";


export const MenuSignatures = (props) => {
    return (
      <div className="">
        <Banner data= {props.data} message = {props.message}></Banner>      
      </div>
    );
  }