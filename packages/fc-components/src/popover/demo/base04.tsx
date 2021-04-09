/**
 * title: 从浮层内关闭
 * desc: 使用 visible 属性控制浮层显示。
 */
import React from 'react';
import { FcButton, FcPopover } from '@ngfed/fc-components';

export default class App extends React.Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };

  render() {
    return (
      <FcPopover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <FcButton type="primary">Click me</FcButton>
      </FcPopover>
    );
  }
}
