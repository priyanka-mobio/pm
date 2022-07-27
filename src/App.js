import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import {SignIn} from "./containers/SignIn";
import {Sidebar} from "./components/Sidebar"
import {SidebarData} from "./components/SidebarData"
 import {Footer} from "./components/Layout/Footer";
import {ForgotPassword} from "./containers/ForgotPassword"
import {Profile} from "./components/Profile";
import { ResetPassword } from './containers/ResetPassword';
import {Searchbaar} from "./components/Searchbaar";
import {User} from "./components/User";
// import {EditUser} from "./components/EditUser"
import Protected from "./protected"

function App() {
  
  return (
    <>
   
      {/* <BrowserRouter> */}
        <Routes> 
          <Route path="/" element={<SignIn />}  />
          <Route path="/sidebar" element={<Sidebar/>} />
          <Route path="/sidebar" element={<SidebarData/>} />
          <Route path="/forgotpassword" element={<ForgotPassword />} /> 
          <Route path="footer" element={<Footer /> } />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/profile" element={<Protected Components={Profile} />} />
          <Route path="/user" element={<Protected Components={User} />} />
          {/* <Route path="/user" element={<Protected Components={EditUser} />} /> */}
          <Route path="/searchbar" element={<Searchbaar />} />

         </Routes>
      {/* </BrowserRouter> */}
     
      
    </> 
  );
}

export default App;
