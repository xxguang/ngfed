import React from 'react';
import { Menu } from 'antd';
import omit from 'rc-util/lib/omit';

const { SubMenu, Item, ItemGroup, Divider } = Menu;

function FcMenuItem(props) {
  props = omit(props, ['danger']);
  return <Item {...props} />;
}

function FcMenuItemGroup(props) {
  props = omit(props, ['']);
  return <ItemGroup {...props} />;
}

function FcMenu(props) {
  props = omit(props, [
    'inlineIndent',
    'overflowedIndicator',
    'subMenuCloseDelay',
    'subMenuOpenDelay',
  ]);
  return <Menu {...props} />;
}

function FcDivider(props) {
  props = omit(props, ['']);
  return <Divider {...props} />;
}

function FcSubMenu(props) {
  props = omit(props, ['']);
  return <SubMenu {...props} />;
}

FcMenu.Item = FcMenuItem;
FcMenu.SubMenu = FcSubMenu;
FcMenu.ItemGroup = FcMenuItemGroup;
FcMenu.Divider = FcDivider;

export default FcMenu;
