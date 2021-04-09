/**
 * title: 触发方式
 * desc: 默认是移入触发菜单，可以点击触发。
 */
import React from 'react';
import { FcDropdown } from '@ngfed/fc-components';
import OverlayMenu from './menu';

const divStyle = {
  color: '#777',
  backgroundColor: '#f7f7f7',
  textAlign: 'center',
  height: 200,
  lineHeight: '200px',
};

export default () => {
  return (
    <>
      <FcDropdown overlay={OverlayMenu} trigger={['contextMenu']}>
        <div style={divStyle}>Right Click on here</div>
      </FcDropdown>
    </>
  );
};
