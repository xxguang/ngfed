/**
 * title: 异步关闭
 * desc: 更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。不需要默认确定取消按钮时，你可以把 footer 设为 null。
 */
import React from 'react';
import { FcButton, FcModal } from '@ngfed/fc-components';

class App extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <FcButton type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </FcButton>
        <FcModal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <FcButton key="back" onClick={this.handleCancel}>
              Return
            </FcButton>,
            <FcButton key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </FcButton>,
            <FcButton
              key="link"
              href="https://google.com"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Search on Google
            </FcButton>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
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
