import React, { useState } from "react";
import { Searchbaar } from "./Searchbaar";
import { Table, Modal, Button } from 'antd'
import { userdata } from '../utils/user-data'
import { usercolumns } from '../utils/columns'
import {  Input } from 'antd';
import { AiOutlineUserAdd } from "react-icons/ai";
import { Col, Row } from 'antd';
import { Radio } from 'antd';

import {
  AiOutlineFilter,
  AiOutlineReload,
  AiOutlineColumnHeight,
  AiOutlineFullscreen
} from "react-icons/ai";

import "./user.css";
const onChange = (Pagination, filters, sorter, extra) => {
  console.log('params', Pagination, filters, sorter, extra);
};

export const User = () => {


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState(1);

  const onChang = (e) => {
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



  return (
    <>
      <Searchbaar />
      <button className="btn-add-btn" onClick={showModal} >
        {" "}
        <AiOutlineUserAdd /> Add user{" "}
      </button>

      <Modal title="Add a user" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[
        <Button key="back" onClick={handleCancel}>
          cancel
        </Button>,
        <Button key="submit" style={{ backgroundColor: "#0F2A6F", color: "white" }} onClick={handleOk}>
          Add user
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
      </Modal>

      <div className="user_container">
        <button className="btn-btn-user"> All users</button>
        <button className="btn-btn-user"> Merchants</button>
        <button className="btn-btn-user"> Admin</button>
        <div className="user-filter">
          <button className="btn-btn-user">
            {" "}
            <AiOutlineFilter /> Filter
          </button>{" "}
        </div>
        <div className="user-sort">
          <button className="btn-btn-user"> Short by</button>
        </div>
        <div className="user-icon">
          <AiOutlineReload size="20px" />
          <AiOutlineColumnHeight size="20px" />
          <AiOutlineFullscreen size="20px" />
        </div>{" "}
        <Table className='usertable'
          columns={usercolumns}
          dataSource={userdata}
          onChange={onChang}
          pagination={{
            pageSize: 5,
          }}
          scroll={{
            y: 240,
          }}
          
        />

      </div>
    </>
  );
};
