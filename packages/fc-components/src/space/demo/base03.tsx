/**
 * title: 对齐
 * desc: 设置对齐模式。
 */

import React from 'react';
import { FcSpace, FcButton } from '@ngfed/fc-components';
import './base03.css';

export default () => {
  return (
    <>
      <div className="space-align-container">
        <div className="space-align-block">
          <FcSpace align="center">
            center
            <FcButton type="primary">Primary</FcButton>
            <span className="mock-block">Block</span>
          </FcSpace>
        </div>
        <div className="space-align-block">
          <FcSpace align="start">
            start
            <FcButton type="primary">Primary</FcButton>
            <span className="mock-block">Block</span>
          </FcSpace>
        </div>
        <div className="space-align-block">
          <FcSpace align="end">
            end
            <FcButton type="primary">Primary</FcButton>
            <span className="mock-block">Block</span>
          </FcSpace>
        </div>
        <div className="space-align-block">
          <FcSpace align="baseline">
            baseline
            <FcButton type="primary">Primary</FcButton>
            <span className="mock-block">Block</span>
          </FcSpace>
        </div>
      </div>
    </>
  );
};
