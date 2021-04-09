/**
 * title: 自定义位置
 * desc: 自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。
 */
import React, { useState } from 'react';
import { FcDrawer, FcButton, FcSpace, FcRadio } from '@ngfed/fc-components';

class App extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        <FcSpace>
          <FcRadio.Group defaultValue={placement} onChange={this.onChange}>
            <FcRadio value="top">top</FcRadio>
            <FcRadio value="right">right</FcRadio>
            <FcRadio value="bottom">bottom</FcRadio>
            <FcRadio value="left">left</FcRadio>
          </FcRadio.Group>
          <FcButton type="primary" onClick={this.showDrawer}>
            Open
          </FcButton>
        </FcSpace>
        <FcDrawer
          title="Basic Drawer"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </FcDrawer>
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
