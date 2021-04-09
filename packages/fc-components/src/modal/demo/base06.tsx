/**
 * title: 国际化
 * desc: 设置 okText 与 cancelText 以自定义按钮文字。
 */
import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { FcModal, FcButton, FcSpace } from '@ngfed/fc-components';

class LocalizedModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <FcButton type="primary" onClick={this.showModal}>
          Modal
        </FcButton>
        <FcModal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </FcModal>
      </>
    );
  }
}

function confirm() {
  FcModal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}
export default () => {
  return (
    <>
      <FcSpace>
        <LocalizedModal />
        <FcButton onClick={confirm}>Confirm</FcButton>
      </FcSpace>
    </>
  );
};
