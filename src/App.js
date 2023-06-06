import React, { useState } from 'react';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import { Avatar, Card } from 'antd';
import { Card, Col, Grid, Row } from "antd";
import { CustomCard } from './Card';
import { ModalCustom } from './Modal';
import './Custom.css';

const data= [{name : "Vineet Singh", email: "Sincere@april.biz", phone: "1-770-736-8031 x56442", global: "http://hildegard.org" },
{name:"Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593 x09125", global: "http://anastasia.net"}, 
{name:"Clementine Bauch", email: "Nathan@yesenia.net", phone: "1-463-123-4447", global: "http://ramiro.info"}, 
{name:"Patricia Lebsack", email: "Julianne.OConner@kory.org", phone: "493-170-9623 x156", global: "http://kale.biz"}, 
{name : "Vineet Singh", email: "Sincere@april.biz", phone: "1-770-736-8031 x56442", global: "http://hildegard.org" },
{name:"Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593 x09125", global: "http://anastasia.net"}, 
{name:"Clementine Bauch", email: "Nathan@yesenia.net", phone: "1-463-123-4447", global: "http://ramiro.info"}, 
{name:"Patricia Lebsack", email: "Julianne.OConner@kory.org", phone: "493-170-9623 x156", global: "http://kale.biz"}, ];

// const { Meta } = Card;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const showModal = (index) => {
    setIsModalOpen(true);
    setSelectedCard(index);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
    <Row gutter={[16, 16]}>
    
    {data?.map((each,index)=>(
      <Col span={6} ><CustomCard
      showModal={()=>showModal(index)}
      data={each}
      /></Col>
      ))}
      
    </Row>
      
      <ModalCustom
      isModalOpen={isModalOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      data={data[selectedCard]}
      />
    </div>
  );
}

export default App;
