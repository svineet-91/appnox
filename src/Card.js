import React from 'react';
import { EditOutlined, DeleteOutlined, HeartOutlined, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Grid, Row } from 'antd';

const { Meta } = Card;

const CustomCard = (props) => (
  // <Row>
  // <Col xs={24} sm={24} md={8} lg={8} xl={6}>
  <Card
    
    cover={  
      <img
        alt="example"
        src="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy"
      />
    }
    actions={[
        <HeartOutlined />,
      <EditOutlined key="edit" onClick={()=>props.showModal()}/>,
      <DeleteOutlined />,
    ]}
    
  >
   <Row>
      <Col className='card-title' span={24}>{props.data.name}</Col>
    </Row>

  <Row>
      <Col className='contact-img' span={2}><MailOutlined /></Col>
      <Col className='contact-info' span={22}>{props.data.email}</Col>
    </Row>
    <Row>
      <Col className='contact-img' span={2}><PhoneOutlined /></Col>
      <Col className='contact-info' span={22}>{props.data.phone}</Col>
    </Row>
    <Row>
      <Col className='contact-img' span={2}><GlobalOutlined /></Col>
      <Col className='contact-info' span={22}>{props.data.global}</Col>
    </Row>
  </Card>
  // </Col>
  // </Row>   
);

export {CustomCard};