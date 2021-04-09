/**
 * title: 弹出位置
 * desc: 支持弹出6个位置。
 */
import React from 'react';
import { FcDropdown, FcButton } from '@ngfed/fc-components';
import OverlayMenu from './menu';
import './base01.css';
export default () => {
  return (
    <>
      <FcDropdown overlay={OverlayMenu} placement="bottomLeft" className="FcDropdownMagin">
        <FcButton>bottomLeft</FcButton>
      </FcDropdown>
      <FcDropdown overlay={OverlayMenu} placement="bottomCenter" className="FcDropdownMagin">
        <FcButton>bottomCenter</FcButton>
      </FcDropdown>
      <FcDropdown overlay={OverlayMenu} placement="bottomRight" className="FcDropdownMagin">
        <FcButton>bottomRight</FcButton>
      </FcDropdown>
      <FcDropdown overlay={OverlayMenu} placement="topLeft" className="FcDropdownMagin">
        <FcButton>topLeft</FcButton>
      </FcDropdown>
      <FcDropdown overlay={OverlayMenu} placement="topCenter" className="FcDropdownMagin">
        <FcButton>topCenter</FcButton>
      </FcDropdown>
      <FcDropdown overlay={OverlayMenu} placement="topRight">
        <FcButton>topRight</FcButton>
      </FcDropdown>
    </>
  );
};
