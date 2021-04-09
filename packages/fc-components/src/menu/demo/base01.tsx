/**
 * title: 顶部导航
 * desc: 水平的顶部导航菜单。
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
      <FcMenu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Item>
        <Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <ItemGroup title="Item 1">
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
          </ItemGroup>
          <ItemGroup title="Item 2">
            <Item key="setting:3">Option 3</Item>
            <Item key="setting:4">Option 4</Item>
          </ItemGroup>
        </SubMenu>
        <Item key="alipay">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Item>
      </FcMenu>
    );
  }
}
