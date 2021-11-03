import React from 'react';
import { Modal } from 'antd';

interface IModal {
  title?: string;
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  destroyOnClose?: boolean;
}

const View: React.FC<IModal> = (props) => {
  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
      destroyOnClose={props.destroyOnClose}
    >
      {props.children}
    </Modal>
  );
};

export default View;
