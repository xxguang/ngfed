/**
 * title: 基本结构
 * desc: 典型的页面布局。
 */

import React, { Component } from 'react';
import './base09.less';
import { FcLayout, FcMenu } from '@ngfed/fc-components';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider, Footer } = FcLayout;

export default class index extends Component {
  render() {
    return (
      <>
        <FcLayout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
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
              <FcMenu.Item key="4" icon={<BarChartOutlined />}>
                nav 4
              </FcMenu.Item>
              <FcMenu.Item key="5" icon={<CloudOutlined />}>
                nav 5
              </FcMenu.Item>
              <FcMenu.Item key="6" icon={<AppstoreOutlined />}>
                nav 6
              </FcMenu.Item>
              <FcMenu.Item key="7" icon={<TeamOutlined />}>
                nav 7
              </FcMenu.Item>
              <FcMenu.Item key="8" icon={<ShopOutlined />}>
                nav 8
              </FcMenu.Item>
            </FcMenu>
          </Sider>
          <FcLayout className="site-FcLayout" style={{ marginLeft: 200 }}>
            <Header className="site-FcLayout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div
                className="site-FcLayout-background"
                style={{ padding: 24, textAlign: 'center' }}
              >
                ...
                <br />
                Really
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                long
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
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
