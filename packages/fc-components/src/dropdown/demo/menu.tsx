import React from 'react';
import { FcMenu } from '@ngfed/fc-components';

export default function overlayFcMenu() {
  return (
    <FcMenu>
      <FcMenu.Item key="1">1st FcMenu item</FcMenu.Item>
      <FcMenu.Item key="2">2nd FcMenu item</FcMenu.Item>
      <FcMenu.Item key="3">3rd FcMenu item</FcMenu.Item>
    </FcMenu>
  );
}
