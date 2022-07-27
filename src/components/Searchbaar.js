import React from "react";
import {Header} from "../components/Layout/Header";
import {Sidebar} from "./Sidebar"
import "./searchbaar.css"
import {AiOutlineSearch} from "react-icons/ai"

export const Searchbaar = () => {
    return(
        <>
        <Header />
        <Sidebar />
        
        <div className="search_container"> 
       
              <div className = "searchbaar">
                   <input type="text" name="search" id="search"
                   placeholder = 'Search user' />
                   <div className = "search_icon" >
                    <AiOutlineSearch id="search"/>
                   
                    </div>
                    </div> 

               
                       
        </div> 
       
        
       </>  
    )
}

