/**
 * title: 按钮样式
 * desc: 按钮样式的单选组合。
 */

import React from 'react';
import { FcRadio } from '@ngfed/fc-components';

function onChange(e) {
  console.log(`FcRadio checked:${e.target.value}`);
}

export default () => {
  return (
    <>
      <FcRadio.Group onChange={onChange} defaultValue="a">
        <FcRadio.Button value="a">Hangzhou</FcRadio.Button>
        <FcRadio.Button value="b">Shanghai</FcRadio.Button>
        <FcRadio.Button value="c">Beijing</FcRadio.Button>
        <FcRadio.Button value="d">Chengdu</FcRadio.Button>
      </FcRadio.Group>
      <br />
      <FcRadio.Group onChange={onChange} defaultValue="a" style={{ marginTop: 16 }}>
        <FcRadio.Button value="a">Hangzhou</FcRadio.Button>
        <FcRadio.Button value="b" disabled>
          Shanghai
        </FcRadio.Button>
        <FcRadio.Button value="c">Beijing</FcRadio.Button>
        <FcRadio.Button value="d">Chengdu</FcRadio.Button>
      </FcRadio.Group>
      <br />
      <FcRadio.Group disabled onChange={onChange} defaultValue="a" style={{ marginTop: 16 }}>
        <FcRadio.Button value="a">Hangzhou</FcRadio.Button>
        <FcRadio.Button value="b">Shanghai</FcRadio.Button>
        <FcRadio.Button value="c">Beijing</FcRadio.Button>
        <FcRadio.Button value="d">Chengdu</FcRadio.Button>
      </FcRadio.Group>
    </>
  );
};
