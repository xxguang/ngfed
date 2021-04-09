/**
 * title: 基本结构
 * desc: 典型的页面布局。
 */

import React from 'react';
import { FcLayout } from '@ngfed/fc-components';

const { Header, Sider, Content, Footer } = FcLayout;

const boxStyle = { margin: '10px' };
const headerStyle = { backgroundColor: '#7dbcea' };
const contentStyle = { backgroundColor: 'rgba(16,142,233,1)', height: '100px' };
const siderStyle = { backgroundColor: '#3ba0e9' };
const footerStyle = { backgroundColor: '#7dbcea' };

export default () => {
  return (
    <>
      <div style={boxStyle}>
        <FcLayout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </FcLayout>
      </div>

      <div style={boxStyle}>
        <FcLayout>
          <Header style={headerStyle}>Header</Header>
          <FcLayout>
            <Sider style={siderStyle}>Sider</Sider>
            <Content style={contentStyle}>Content</Content>
          </FcLayout>
          <Footer style={footerStyle}>Footer</Footer>
        </FcLayout>
      </div>

      <div style={boxStyle}>
        <FcLayout>
          <Header style={headerStyle}>Header</Header>
          <FcLayout>
            <Content style={contentStyle}>Content</Content>
            <Sider style={siderStyle}>Sider</Sider>
          </FcLayout>
          <Footer style={footerStyle}>Footer</Footer>
        </FcLayout>
      </div>

      <div style={boxStyle}>
        <FcLayout>
          <Sider style={siderStyle}>Sider</Sider>
          <FcLayout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
          </FcLayout>
        </FcLayout>
      </div>
    </>
  );
};
