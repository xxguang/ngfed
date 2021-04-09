/**
 * title: 上中下布局
 * desc: 一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
 */

import React from 'react';
import './base02.less';
import { FcLayout, FcMenu, FcBreadcrumb } from '@ngfed/fc-components';
const { Header, Content, Footer } = FcLayout;

export default () => {
  return (
    <>
      <FcLayout className="layout">
        <Header>
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
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          @ngfed/fc-components ©2021 Created by Ant UED
        </Footer>
      </FcLayout>
      ,
    </>
  );
};
