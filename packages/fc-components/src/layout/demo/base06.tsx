/**
 * title: 自定义触发器
 * desc:  要使用自定义触发器，可以设置 trigger={null} 来隐藏默认设定
 */

import React, { Component } from 'react';
import './base06.less';
import { FcLayout, FcMenu, FcBreadcrumb } from '@ngfed/fc-components';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider, Footer } = FcLayout;

export default class index extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <>
        <FcLayout>
          <Sider trigger={null} collapsed={this.state.collapsed}>
            <div className="logo" />
            <FcMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <FcMenu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </FcMenu.Item>
              <FcMenu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </FcMenu.Item>
              <FcMenu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </FcMenu.Item>
            </FcMenu>
          </Sider>
          <FcLayout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </FcLayout>
        </FcLayout>
      </>
    );
  }
}
