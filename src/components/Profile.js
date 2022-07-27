import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Layout/Header"
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import { Row, Col, Container, Form, Label, FormGroup, Input, Button} from "reactstrap"
import axios from "axios";


export const Profile = () => {
    const [visible, setVisible] = useState(true);

    const [values, setValues] = useState({
        password: '',
        newPassword: '',
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
        if (errors !== null) {
            setErrors({});
            try {
                const res = await axios.patch("http://localhost:3003/api/user/password-change/:id", {

                    password: values.password,
                    newPassword: values.newPassword,
                    confirmPassword: values.confirmPassword,
                }
                );

                const { token } = res.data;
                localStorage.setItem('token', token, res.headers.authorization);

                setValues(res.data);
                console.log(res);
                if (res && res.status === 200) {
                    return (
                        setTimeout(() => {
                            navigate("/");
                        }, 500)
                    );
                } else {
                    alert.error("Invalid Credentials");
                }
                console.log(res)
                setValues(res);
            } catch (error) {
                if (error) { console.log(error) }
            }
        }
    }

    return (
        <>
            <Sidebar />
            <Header />
            <Container>
                <Row>
                    <Col className="bg-light border">
                        {visible ? 
                        <Form>
                        <FormGroup>
                            <div className="form_header">
                                <Label for="exampleEmail">
                                    Basic Details
                                </Label>
                                <Link to="#" onClick={() => setVisible(false)}>Edit</Link>
                            </div>

                        </FormGroup>
                        <hr />
                        <FormGroup>
                            <Label for="exampleEmail">
                                Full name
                            </Label>
                            {/* <Input
                                id="exampleEmail"
                                name="text"
                                type="text"
                            /> */}
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                                Email
                            </Label>
                            {/* <Input
                                // id="examplePassword"
                                // name="email"
                                // type="email"
                            /> */}
                        </FormGroup>
                    </Form>
                        
                        
                        :  <Form>
                        <div className="form_header">
                                <Label for="exampleEmail">
                                    Edit details
                                </Label>
                            </div>
                            <hr />
                        <FormGroup>
                            <Label for="exampleEmail">
                                First name
                            </Label>
                            <Input
                                id="firstname"
                                name="firstname"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastname">
                               Last name
                            </Label>
                            <Input
                                id="lastname"
                                name="text"
                                
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                            
                                type="text"
                            />
                        </FormGroup>
                        <Button>
                            Submit
                        </Button>
                        
                    </Form>}
                    </Col>
                </Row>
            </Container>
           
            <Container>
                <Row>
                    <Col className="bg-light-one border">
                       <Form>
                       <FormGroup>
                                <div className="form_header">
                                    <Label for="exampleEmail">
                                        Change password
                                    </Label>
                                </div>

                            </FormGroup>
                            <hr />
                            <FormGroup>
                           
                            <Input 
                                    id="exampleEmail"
                                    name="old_password"
                                    placeholder="old password"
                                    type="password"
                                   
                                />
                                 
                            </FormGroup>
                                {/* <FormGroup>
                                    <InputGroup>
                                        <InputGroupText>
                                        <AiFillLock/>
                                        </InputGroupText>
                                        <Input 
                                        
                                        id="exampleEmail"
                                    name="old_password"
                                    placeholder="old password"
                                    type="password" />
                                        </InputGroup>
                             </FormGroup> */}
                            <FormGroup>
                                <Input 
                                    id="examplepassword"
                                    name="new_password"
                                    placeholder="new password"
                                    type="password"
                                />
                            </FormGroup>
                            <FormGroup>
                               
                                <Input
                                    id="examplePassword"
                                    name="confirmpassword"
                                    placeholder="Confirm password"
                                    type="password"
                                />
                            </FormGroup>
                            <Button>
                                Set as new password
                            </Button>
                           
                        </Form>
                           </Col>
                           </Row>
                       </Container>



        </>
    )
}


export default Profile