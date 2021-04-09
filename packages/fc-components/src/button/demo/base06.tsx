/**
 * title: 自定义按钮样式
 * desc: 通过给按钮设置`style`属性，或`className`就可以实现按钮样式自定义
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';
export default () => {
  const buttonStyle = {
    background: 'linear-gradient(45deg, gold, red)',
    color: 'white',
    borderWidth: '0px',
    borderRadius: '10px',
  };

  return (
    <>
      <FcSpace>
        <FcButton style={buttonStyle}>Custome Button</FcButton>
      </FcSpace>
    </>
  );
};
