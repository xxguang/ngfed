/**
 * title: 大小
 * desc: 大中小三种组合，可以和表单输入框进行对应配合。
 */

import React from 'react';
import { FcRadio } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcRadio.Group defaultValue="a" size="large">
        <FcRadio.Button value="a">Hangzhou</FcRadio.Button>
        <FcRadio.Button value="b">Shanghai</FcRadio.Button>
        <FcRadio.Button value="c">Beijing</FcRadio.Button>
        <FcRadio.Button value="d">Chengdu</FcRadio.Button>
      </FcRadio.Group>
      <br />
      <FcRadio.Group defaultValue="a" style={{ marginTop: 16 }}>
        <FcRadio.Button value="a">Hangzhou</FcRadio.Button>
        <FcRadio.Button value="b">Shanghai</FcRadio.Button>
        <FcRadio.Button value="c">Beijing</FcRadio.Button>
        <FcRadio.Button value="d">Chengdu</FcRadio.Button>
      </FcRadio.Group>
      <br />
      <FcRadio.Group defaultValue="a" size="small" style={{ marginTop: 16 }}>
        <FcRadio.Button value="a">Hangzhou</FcRadio.Button>
        <FcRadio.Button value="b">Shanghai</FcRadio.Button>
        <FcRadio.Button value="c">Beijing</FcRadio.Button>
        <FcRadio.Button value="d">Chengdu</FcRadio.Button>
      </FcRadio.Group>
    </>
  );
};
