/**
 * title: 顶部-侧边布局
 * desc: 拥有顶部导航及侧边栏的页面，多用于展示类网站。
 */

import React from 'react';
import './base04.less';
import { FcLayout, FcMenu, FcBreadcrumb } from '@ngfed/fc-components';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = FcMenu;
const { Header, Content, Sider, Footer } = FcLayout;

export default () => {
  return (
    <>
      <FcLayout>
        <Header className="header">
          <FcMenu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <FcMenu.Item key="1">nav 1</FcMenu.Item>
            <FcMenu.Item key="2">nav 2</FcMenu.Item>
            <FcMenu.Item key="3">nav 3</FcMenu.Item>
          </FcMenu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <FcBreadcrumb style={{ margin: '16px 0' }}>
            <FcBreadcrumb.Item>Home</FcBreadcrumb.Item>
            <FcBreadcrumb.Item>List</FcBreadcrumb.Item>
            <FcBreadcrumb.Item>App</FcBreadcrumb.Item>
          </FcBreadcrumb>
          <FcLayout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <FcMenu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <FcMenu.Item key="1">option1</FcMenu.Item>
                  <FcMenu.Item key="2">option2</FcMenu.Item>
                  <FcMenu.Item key="3">option3</FcMenu.Item>
                  <FcMenu.Item key="4">option4</FcMenu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <FcMenu.Item key="5">option5</FcMenu.Item>
                  <FcMenu.Item key="6">option6</FcMenu.Item>
                  <FcMenu.Item key="7">option7</FcMenu.Item>
                  <FcMenu.Item key="8">option8</FcMenu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <FcMenu.Item key="9">option9</FcMenu.Item>
                  <FcMenu.Item key="10">option10</FcMenu.Item>
                  <FcMenu.Item key="11">option11</FcMenu.Item>
                  <FcMenu.Item key="12">option12</FcMenu.Item>
                </SubMenu>
              </FcMenu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
          </FcLayout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          @ngfed/fc-components ©2021 Created by Ant UED
        </Footer>
      </FcLayout>
    </>
  );
};
