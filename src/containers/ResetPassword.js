import React,{useState} from 'react';
import '../Assets/Styles/resetpassword.css'
import logo from "../Theme/images/logo.png";
import { LockOutlined} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import {Link} from "react-router-dom"
import {Footer} from "../components/Layout/Footer";
import {useNavigate} from "react-router-dom";
import { authReset } from "../Shared/validation";
import { toast } from "react-toastify";
import axios from "axios";

export const ResetPassword = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const [passwordType, setPasswordType] = useState("password");
  
	const [cnfPasswordType, setCnfPasswordType] = useState("password");
	const [values, setValues] = useState({
		resetPassword: '',
		confirmPassword: '',
	});
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;


	const handleChange = (e) => {
		const newData = { ...values };
		newData[e.target.id] = e.target.value.trim().replace(regex, '');
		errors[e.target.id] = null;
		setValues(newData);
	}


	const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('clicckeed')
    const errors = await authReset(values);
    setErrors(errors);
    if (errors !== null) {
      setErrors({});
         try{
             const res = await axios.post(`http://localhost:3003/api/user/resetpassword?token={token}`, {
              
                    password: values.password,
                    confirmPassword: values.confirmPassword
              }
              );
             
              const queryParams = new URLSearchParams(window.location.search);
                const token = queryParams.get('token');
                console.log(token);

              setValues(res.data);
              console.log(res);
              if (res && res.status === 200) {
               return (
                 setTimeout(() => {
                   navigate("/");
                 }, 1000)
               );
             } else {
               toast.error("Invalid Credentials");
             }
             console.log(res)
             setValues(res);
        }catch (error) {
          let error_message = "Invalid Credentials";
        if (error.response && error.response.data && error.response.data.message) {
          error_message = error.response.data.message;
          console.error(error_message, {
            // position: toast.POSITION.TOP_RIGHT
          });
          }
        }
 }
}

    const togglePassword = () => {
        if (passwordType === "password") {
          setPasswordType("text");
          return;
        }
        setPasswordType("password");
      };

      const toggleCnfPassword = () => {
        if (cnfPasswordType === "password") {
          setCnfPasswordType("text")
          return;
        }
        setCnfPasswordType("password")
      }

    return(
        <> 
         <div className="profile_logo">
            <img src={logo} alt=""  />
       </div> 
       <div className="login"> 
             Set a new password
       </div> 
       <div className='ink_forgot'>
        </div>

        {/* <div className="error_message">  */}
        {errors?.newPassword && errors?.newPassword} <br/> 
        {errors?.confirmPassword && errors?.confirmPassword} 	
        {/* </div> */}

        {/* <Form className="form-reset-data" onSubmit={handleSubmit}> */}
{/* 
        <img
              className="vectorp"
              src="https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png"
              alt=""
            />
             
              <div className="forgot_password">
             <Input
									id="password"
									name="password"
									autoComplete="off"
									value={values.password}
									onChange={handleChange}
									placeholder="New Password"
									type={passwordType}
								/> */}
              
            {/* <Link to="#" onClick={togglePassword}>
              {passwordType === "password" ? (
                <BiHide
                  className="hideicon"
                  size={25}
                  style={{ color: "#304659" }}
                />
              ) : (
                <BiShow
                  className="showicon"
                  size={25}
                  style={{ color: "#304659" }}
                />
              )}
            </Link> */}
           
						
					
            {/* </div> */}

						{/* <FormGroup>
							<div className="password">
          
              <Input
									id="confirmPassword"
									name="confirmPassword"
									autoComplete="off"
									value={values.confirmPassword}
									onChange={handleChange}
									placeholder="Repeat Password"
									type={cnfPasswordType}
								/>
                {/* <Link to="#" onClick={toggleCnfPassword}>
									{cnfPasswordType === "password" ? <BiHide className="hideicon" size={25} style={{ color: "#304659" }} /> : <BiShow className="showicon" size={25} style={{ color: "#304659" }} />}
								</Link> */}
               
          {/* </div> */}
          {/* </FormGroup> */} 
          {/* <button className='btn btn-forgotpassword' type='submit'>Set as new password</button> */}
        {/* </Form> */}

        <span className="error_message"> 
          {errors?.email && errors?.email } <br/>
          {  errors?.resetPassword && errors?.resetPassword } 
          
        </span>


      <Form style={{ marginLeft: "37%" }}
        name="reset_password"
        className="reset-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      // onSubmit={handleSubmit}
      >
        <Form.Item
          name="resetPassword"

          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
                  id="resetPassword"
									name="resetPassword"
									autoComplete="off"
									value={values?.resetPassword}
									onChange={handleChange}
									placeholder="New Password"
									type={passwordType}
								/>
        </Form.Item>

        <Form.Item
          // label="Password"
          name="confirm_password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />}
           id="confirmPassword"
           name="confirmPassword"
           autoComplete="off"
           value={values?.confirmPassword}
           onChange={handleChange}
           placeholder="Repeat Password"
           type={cnfPasswordType} />
        </Form.Item>

        <Form.Item>
          <Button type="button" onClick={handleSubmit} className="login-form-button" style={{ backgroundColor: "#0F2A6F", color: "white", width: "100%", height: "90%" }}>
            Set as new password
          </Button>
        </Form.Item>
      </Form>

      <Form.Item>
        <a className="reset-form-forgot" href="/">
          Back to login
        </a>
      </Form.Item>
       <Footer />

        </>
    )
}