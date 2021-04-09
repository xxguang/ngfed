/**
 * title: 切换菜单类型
 * desc: 展示动态切换模式。
 */
import React from 'react';
import { FcMenu, FcButton } from '@ngfed/fc-components';
import {
  AppstoreOutlined,
  SettingOutlined,
  MailOutlined,
  LinkOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Switch, Divider } from 'antd';
const { SubMenu } = FcMenu;

const Demo = () => {
  const [mode, setMode] = React.useState('inline');
  const [theme, setTheme] = React.useState('light');

  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <FcMenu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
      >
        <FcMenu.Item key="1" icon={<MailOutlined />}>
          Navigation One
        </FcMenu.Item>
        <FcMenu.Item key="2" icon={<CalendarOutlined />}>
          Navigation Two
        </FcMenu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
          <FcMenu.Item key="3">Option 3</FcMenu.Item>
          <FcMenu.Item key="4">Option 4</FcMenu.Item>
          <SubMenu key="sub1-2" title="Submenu">
            <FcMenu.Item key="5">Option 5</FcMenu.Item>
            <FcMenu.Item key="6">Option 6</FcMenu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
          <FcMenu.Item key="7">Option 7</FcMenu.Item>
          <FcMenu.Item key="8">Option 8</FcMenu.Item>
          <FcMenu.Item key="9">Option 9</FcMenu.Item>
          <FcMenu.Item key="10">Option 10</FcMenu.Item>
        </SubMenu>
        <FcMenu.Item key="link" icon={<LinkOutlined />}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Ant Design
          </a>
        </FcMenu.Item>
      </FcMenu>
    </>
  );
};

export default Demo;
