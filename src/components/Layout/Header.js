import "../../Assets/Styles/header.css"
import React from 'react';
import {AiOutlineUser,AiOutlineBell} from "react-icons/ai"
import { Avatar } from 'antd';


export const Header = () => (
 <>
  <div
    className="header"
  >Home
  <span className='bell'><AiOutlineBell style={{marginLeft:"120vh",height:"3vh",width:"3vh"}} /> </span>
  
  <div className='avatar'>
 
            <Avatar.Group>
          <Avatar style={{ backgroundColor: "#0F2A6F"}}>
           <AiOutlineUser style={{marginTop:"-6px"}} />
          </Avatar>

          </Avatar.Group> 
          </div>
          
        </div>
  

  
 
 
</>
);

export default Header