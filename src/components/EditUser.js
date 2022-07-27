import React, { useState } from "react";

import "./user.css"

export const EditUser = () =>{

    const [showModel, setShowModel] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [value, setValue] = useState(1);
  
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  


    return(
        <>
     {showModel ?
     <Modal title="Edit user" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[
        <Button key="back" onClick={handleCancel}>
          cancel
        </Button>,
        <Button key="submit" style={{ backgroundColor: "#0F2A6F", color: "white" }} onClick={handleOk}>
          save
        </Button>
      ]}>

    <Row>
      <Col span={11}> <label> First name</label><br />
      <Input type="text" placeholder="Example-John"/> </Col>
      <Col span={11} offset={2}>
      <label> First name</label>
      <Input type="text" placeholder="Example-Snow" />
      </Col>
    </Row>
    <br />
    <Row>
      <Col span={24}>
      <label> Email</label>
      <Input type="Email" placeholder="example@domain.com" />
      </Col>
    </Row> <br />
    <Row>
    <label style={{fontWeight:"30%"}}> Role</label>
    </Row>
    <Radio.Group onChange={onChange} value={value} color={{color:"red"}} >
      <Radio value={1} >Merchant</Radio >
      <Radio value={2}>Admin</Radio>
    </Radio.Group>
      </Modal> :
      <Modal title="User details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>

      <Row>
        <Col span={11}> <label> First name</label><br />
        <Input type="text" placeholder="Example-John"/> </Col>
        <Col span={11} offset={2}>
        <label> First name</label>
        <Input type="text" placeholder="Example-Snow" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
        <label> Email</label>
        <Input type="Email" placeholder="example@domain.com" />
        </Col>
      </Row> <br />
      <Row>
      <label style={{fontWeight:"30%"}}> Role</label>
      </Row>
      <Radio.Group onChange={onChange} value={value} color={{color:"red"}} >
        <Radio value={1} >Merchant</Radio >
        <Radio value={2}>Admin</Radio>
      </Radio.Group>
        </Modal>
      
      } 
        </>
    )
}

export default EditUser