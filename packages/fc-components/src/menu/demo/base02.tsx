/**
 * title: 内嵌菜单
 * desc: 垂直菜单，子菜单内嵌在菜单区域。
 */
import React from 'react';
import { FcMenu } from '@ngfed/fc-components';

import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Item, SubMenu, ItemGroup } = FcMenu;

export default class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <FcMenu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <ItemGroup key="g1" title="Item 1">
            <Item key="1">Option 1</Item>
            <Item key="2">Option 2</Item>
          </ItemGroup>
          <ItemGroup key="g2" title="Item 2">
            <Item key="3">Option 3</Item>
            <Item key="4">Option 4</Item>
          </ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Item key="5">Option 5</Item>
          <Item key="6">Option 6</Item>
          <SubMenu key="sub3" title="Submenu">
            <Item key="7">Option 7</Item>
            <Item key="8">Option 8</Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Item key="9">Option 9</Item>
          <Item key="10">Option 10</Item>
          <Item key="11">Option 11</Item>
          <Item key="12">Option 12</Item>
        </SubMenu>
      </FcMenu>
    );
  }
}
