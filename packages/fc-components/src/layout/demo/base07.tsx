/**
 * title: 响应式布局
 * desc: Layout.Sider 支持响应式布局。
 */

import React, { Component } from 'react';
import './base07.less';
import { FcLayout, FcMenu } from '@ngfed/fc-components';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Sider, Footer } = FcLayout;

export default class index extends Component {
  render() {
    return (
      <>
        <FcLayout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <FcMenu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <FcMenu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </FcMenu.Item>
              <FcMenu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </FcMenu.Item>
              <FcMenu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </FcMenu.Item>
              <FcMenu.Item key="4" icon={<UserOutlined />}>
                nav 4
              </FcMenu.Item>
            </FcMenu>
          </Sider>
          <FcLayout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                content
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
