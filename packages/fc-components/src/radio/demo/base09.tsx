/**
 * title: 填底的按钮样式
 * desc: 实色填底的单选按钮样式。
 */

import React from 'react';
import { FcRadio } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcRadio.Group defaultValue="a" buttonStyle="solid">
        <FcRadio.Button value="a">Hangzhou</FcRadio.Button>
        <FcRadio.Button value="b">Shanghai</FcRadio.Button>
        <FcRadio.Button value="c">Beijing</FcRadio.Button>
        <FcRadio.Button value="d">Chengdu</FcRadio.Button>
      </FcRadio.Group>
      <br />
      <FcRadio.Group defaultValue="c" buttonStyle="solid" style={{ marginTop: 16 }}>
        <FcRadio.Button value="a">Hangzhou</FcRadio.Button>
        <FcRadio.Button value="b" disabled>
          Shanghai
        </FcRadio.Button>
        <FcRadio.Button value="c">Beijing</FcRadio.Button>
        <FcRadio.Button value="d">Chengdu</FcRadio.Button>
      </FcRadio.Group>
    </>
  );
};
