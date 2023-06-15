import React ,{Component} from "react";
import spinner from "../component/Spinner.gif";
const Spinner =()=>{
        return (
            <div className="text-center">
            <img className="image" src={spinner} alt ="loading"/>
            </div>
        );
}
export default Spinner;