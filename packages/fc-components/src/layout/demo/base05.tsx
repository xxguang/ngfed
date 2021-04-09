/**
 * title: 基本结构
 * desc: 典型的页面布局。
 */

import React, { Component } from 'react';
import './base05.less';

import { FcLayout, FcMenu, FcBreadcrumb } from '@ngfed/fc-components';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = FcMenu;
const { Header, Content, Sider, Footer } = FcLayout;

export default class index extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <>
        <FcLayout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <FcMenu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <FcMenu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </FcMenu.Item>
              <FcMenu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </FcMenu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <FcMenu.Item key="3">Tom</FcMenu.Item>
                <FcMenu.Item key="4">Bill</FcMenu.Item>
                <FcMenu.Item key="5">Alex</FcMenu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <FcMenu.Item key="6">Team 1</FcMenu.Item>
                <FcMenu.Item key="8">Team 2</FcMenu.Item>
              </SubMenu>
              <FcMenu.Item key="9" icon={<FileOutlined />}>
                Files
              </FcMenu.Item>
            </FcMenu>
          </Sider>
          <FcLayout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <FcBreadcrumb style={{ margin: '16px 0' }}>
                <FcBreadcrumb.Item>User</FcBreadcrumb.Item>
                <FcBreadcrumb.Item>Bill</FcBreadcrumb.Item>
              </FcBreadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              @ngfed/fc-components ©2021 Created by Ant UED
            </Footer>
          </FcLayout>
        </FcLayout>
      </>
    );
  }
}
