import React from 'react';
import { Layout } from 'antd';
import omit from 'rc-util/lib/omit';

const { Header, Footer, Content, Sider } = Layout;

function FcHeader(props) {
  props = omit(props, []);
  return (
    <>
      <Header {...props} />
    </>
  );
}

function FcFooter(props) {
  props = omit(props, []);
  return (
    <>
      <Footer {...props} />
    </>
  );
}

function FcContent(props) {
  props = omit(props, []);
  return (
    <>
      <Content {...props} />
    </>
  );
}

function FcSider(props) {
  const drop = [
    'breakpoint',
    'trigger',
    'collapsedWidth',
    'zeroWidthTriggerStyle',
    'onBreakpoint]',
  ];

  props = omit(props, drop);

  return (
    <>
      <Sider {...props} />
    </>
  );
}

function FcLayout(props) {
  props = omit(props, []);
  return (
    <>
      <Layout {...props} />
    </>
  );
}

FcLayout.Header = FcHeader;
FcLayout.Footer = FcFooter;
FcLayout.Content = FcContent;
FcLayout.Sider = FcSider;

export default FcLayout;
