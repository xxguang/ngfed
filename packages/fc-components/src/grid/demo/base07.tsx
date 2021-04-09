/**
 * title: flex填充
 * desc: FcCol提供 flex 属性以支持填充
 */

import React from 'react';
import { FcCol, FcRow } from '@ngfed/fc-components';

const boxStyle = { background: '#eee', margin: '8px', border: '1px solid black' };
const divStyle1 = { height: '50px', backgroundColor: 'red' };
const divStyle2 = { height: '50px', backgroundColor: '#00a0e9' };
export default () => {
  return (
    <>
      <div style={boxStyle}>
        <div> （2） + （3） </div>
        <FcRow>
          <FcCol flex={2}>
            <div style={divStyle1}>2/5</div>
          </FcCol>
          <FcCol flex={3}>
            <div style={divStyle2}>3/5</div>
          </FcCol>
        </FcRow>
        <div>（100px） + （auto） </div>

        <FcRow>
          <FcCol flex="100px">
            <div style={divStyle1}>100px</div>
          </FcCol>
          <FcCol flex="auto">
            <div style={divStyle2}>Fill Rest</div>
          </FcCol>
        </FcRow>

        <div>（1 1 200px） + （0 1 300px） </div>
        <FcRow>
          <FcCol flex="1 1 200px">
            <div style={divStyle1}>1 1 200px</div>
          </FcCol>
          <FcCol flex="0 1 300px">
            <div style={divStyle2}>0 1 300px</div>
          </FcCol>
        </FcRow>
      </div>
    </>
  );
};
