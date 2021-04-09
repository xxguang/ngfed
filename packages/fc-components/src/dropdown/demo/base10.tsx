/**
 * title: 菜单隐藏方式
 * desc: 默认是点击关闭菜单，可以关闭此功能。
 */
import React from 'react';
import { FcDropdown, FcMenu } from '@ngfed/fc-components';
import { DownOutlined } from '@ant-design/icons';

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <FcMenu onClick={this.handleMenuClick}>
        <FcMenu.Item key="1">Clicking me will not close the menu.</FcMenu.Item>
        <FcMenu.Item key="2">Clicking me will not close the menu also.</FcMenu.Item>
        <FcMenu.Item key="3">Clicking me will close the menu.</FcMenu.Item>
      </FcMenu>
    );
    return (
      <FcDropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </FcDropdown>
    );
  }
}
export default OverlayVisible;
