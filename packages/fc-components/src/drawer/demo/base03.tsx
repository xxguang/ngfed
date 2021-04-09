/**
 * title: 渲染在当前DOM
 * desc: 渲染在当前 dom 里。自定义容器，查看 getContainer。
 */
import React, { useState } from 'react';
import { FcDrawer, FcButton } from '@ngfed/fc-components';
import './base03.css';

class App extends React.Component {
  state = { visible: false };

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

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        Render in this
        <div style={{ marginTop: 16 }}>
          <FcButton type="primary" onClick={this.showDrawer}>
            Open
          </FcButton>
        </div>
        <FcDrawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </FcDrawer>
      </div>
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
