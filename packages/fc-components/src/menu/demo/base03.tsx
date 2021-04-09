/**
 * title: 缩起内嵌菜单
 * desc: 内嵌菜单可以被缩起/展开。<br/>你可以在 Layout 里查看侧边布局结合的完整示例。
 */
import React from 'react';
import { FcMenu, FcButton } from '@ngfed/fc-components';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = FcMenu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <FcButton type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </FcButton>
        <FcMenu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <FcMenu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </FcMenu.Item>
          <FcMenu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </FcMenu.Item>
          <FcMenu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </FcMenu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <FcMenu.Item key="5">Option 5</FcMenu.Item>
            <FcMenu.Item key="6">Option 6</FcMenu.Item>
            <FcMenu.Item key="7">Option 7</FcMenu.Item>
            <FcMenu.Item key="8">Option 8</FcMenu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <FcMenu.Item key="9">Option 9</FcMenu.Item>
            <FcMenu.Item key="10">Option 10</FcMenu.Item>
            <SubMenu key="sub3" title="Submenu">
              <FcMenu.Item key="11">Option 11</FcMenu.Item>
              <FcMenu.Item key="12">Option 12</FcMenu.Item>
            </SubMenu>
          </SubMenu>
        </FcMenu>
      </div>
    );
  }
}
export default App;
