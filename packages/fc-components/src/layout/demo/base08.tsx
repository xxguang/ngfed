/**
 * title: 基本结构
 * desc: 典型的页面布局。
 */

import React, { Component } from 'react';
import './base08.less';
import { FcLayout, FcMenu, FcBreadcrumb } from '@ngfed/fc-components';

const { Header, Content, Sider, Footer } = FcLayout;

export default class index extends Component {
  render() {
    return (
      <>
        <FcLayout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <FcMenu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <FcMenu.Item key="1">nav 1</FcMenu.Item>
              <FcMenu.Item key="2">nav 2</FcMenu.Item>
              <FcMenu.Item key="3">nav 3</FcMenu.Item>
            </FcMenu>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <FcBreadcrumb style={{ margin: '16px 0' }}>
              <FcBreadcrumb.Item>Home</FcBreadcrumb.Item>
              <FcBreadcrumb.Item>List</FcBreadcrumb.Item>
              <FcBreadcrumb.Item>App</FcBreadcrumb.Item>
            </FcBreadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              Content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            @ngfed/fc-components ©2021 Created by Ant UED
          </Footer>
        </FcLayout>
      </>
    );
  }
}
