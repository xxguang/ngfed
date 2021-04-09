/**
 * title: 主题
 * desc: 内建了两套主题 `light` 和 `dark`，默认 `light`。
 */
import React from 'react';
import { FcMenu, FcButton } from '@ngfed/fc-components';
import { AppstoreOutlined, SettingOutlined, MailOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
const { SubMenu } = FcMenu;

class Sider extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <FcMenu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <FcMenu.Item key="1">Option 1</FcMenu.Item>
            <FcMenu.Item key="2">Option 2</FcMenu.Item>
            <FcMenu.Item key="3">Option 3</FcMenu.Item>
            <FcMenu.Item key="4">Option 4</FcMenu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <FcMenu.Item key="5">Option 5</FcMenu.Item>
            <FcMenu.Item key="6">Option 6</FcMenu.Item>
            <SubMenu key="sub3" title="Submenu">
              <FcMenu.Item key="7">Option 7</FcMenu.Item>
              <FcMenu.Item key="8">Option 8</FcMenu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <FcMenu.Item key="9">Option 9</FcMenu.Item>
            <FcMenu.Item key="10">Option 10</FcMenu.Item>
            <FcMenu.Item key="11">Option 11</FcMenu.Item>
            <FcMenu.Item key="12">Option 12</FcMenu.Item>
          </SubMenu>
        </FcMenu>
      </>
    );
  }
}
export default Sider;
