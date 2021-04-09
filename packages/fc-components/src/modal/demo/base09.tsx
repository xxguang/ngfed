/**
 * title: 自定义页脚按钮属性
 * desc: 传入 okButtonProps 和 cancelButtonProps 可分别自定义确定按钮和取消按钮的 props。
 */
import React from 'react';
import { FcButton, FcModal } from '@ngfed/fc-components';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <FcButton type="primary" onClick={this.showModal}>
          Open Modal with customized button props
        </FcButton>
        <FcModal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </FcModal>
      </>
    );
  }
}

export default () => {
  return (
    <>
      <App />
    </>
  );
};
