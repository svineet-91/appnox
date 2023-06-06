import React, { useState } from 'react';
import { Button, Modal, Form, Input, InputNumber } from 'antd';

const ModalCustom = (props) => {

  return (
    <>
      <Modal title="Basic Modal" open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel}>
        <Input value={props.data?.name}/>
        <Input value={props.data?.email}/>
        <Input value={props.data?.phone}/>
        <Input value={props.data?.global}/>
      </Modal>
    </>
  );
};

export {ModalCustom};