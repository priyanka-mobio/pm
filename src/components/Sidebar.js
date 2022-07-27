import React from 'react';
import items from "../data.json"
import {SidebarData} from "./SidebarData"
import logo from "../Theme/images/Logo1.png"
import {useNavigate} from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import "./sidebar.css";

export const Sidebar = () => {

   const navigate = useNavigate();

   const logoutHandle = async (e) => {
      e.preventDefault();
      // console.log('clicckeed')
      localStorage.removeItem('token');
      navigate("/");
  }
  

    return (
      <> 
      <div className="sidebar">
        <div className="logo"> 
           <img src={logo} alt="" /></div> 
        
          { items.map((item, index) => <SidebarData key={index} item={item} />) }
          <div className="logout" > 
         < AiOutlineLogout />
           <button className="btn_logout" onClick={logoutHandle}>Logout </button>
           </div> 
        </div>
        {/* <div className="logout_border"> </div> */}
         
       
         
       </>


    )
}
export default Sidebar