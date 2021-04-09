/**
 * title: 顶部-侧边布局-通栏
 * desc: 同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。
 */

import React from 'react';
import './base03.less';
import { FcLayout, FcMenu, FcBreadcrumb } from '@ngfed/fc-components';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = FcMenu;
const { Header, Content, Sider } = FcLayout;

export default () => {
  return (
    <>
      <FcLayout>
        <Header className="header">
          <div className="logo" />
          <FcMenu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <FcMenu.Item key="1">nav 1</FcMenu.Item>
            <FcMenu.Item key="2">nav 2</FcMenu.Item>
            <FcMenu.Item key="3">nav 3</FcMenu.Item>
          </FcMenu>
        </Header>
        <FcLayout>
          <Sider width={200} className="site-FcLayout-background">
            <FcMenu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
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
          <FcLayout style={{ padding: '0 24px 24px' }}>
            <FcBreadcrumb style={{ margin: '16px 0' }}>
              <FcBreadcrumb.Item>Home</FcBreadcrumb.Item>
              <FcBreadcrumb.Item>List</FcBreadcrumb.Item>
              <FcBreadcrumb.Item>App</FcBreadcrumb.Item>
            </FcBreadcrumb>
            <Content
              className="site-FcLayout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </FcLayout>
        </FcLayout>
      </FcLayout>
    </>
  );
};
