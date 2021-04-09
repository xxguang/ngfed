/**
 * title: 只展开当前父级菜单
 * desc: 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
 */
import React from 'react';
import { FcMenu, FcButton } from '@ngfed/fc-components';
import { AppstoreOutlined, SettingOutlined, MailOutlined } from '@ant-design/icons';

const { SubMenu } = FcMenu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Sider = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <FcMenu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <FcMenu.Item key="1">Option 1</FcMenu.Item>
        <FcMenu.Item key="2">Option 2</FcMenu.Item>
        <FcMenu.Item key="3">Option 3</FcMenu.Item>
        <FcMenu.Item key="4">Option 4</FcMenu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <FcMenu.Item key="5">Option 5</FcMenu.Item>
        <FcMenu.Item key="6">Option 6</FcMenu.Item>
        <SubMenu key="sub3" title="Submenu">
          <FcMenu.Item key="7">Option 7</FcMenu.Item>
          <FcMenu.Item key="8">Option 8</FcMenu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <FcMenu.Item key="9">Option 9</FcMenu.Item>
        <FcMenu.Item key="10">Option 10</FcMenu.Item>
        <FcMenu.Item key="11">Option 11</FcMenu.Item>
        <FcMenu.Item key="12">Option 12</FcMenu.Item>
      </SubMenu>
    </FcMenu>
  );
};
export default Sider;
