/**
 * title: 自定义字符
 * desc: 可以使用 (RateProps) => ReactNode 的方式自定义每一个字符。
 */

import React from 'react';
import { FcRate } from '@ngfed/fc-components';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export default () => {
  return (
    <>
      <FcRate defaultValue={2} character={({ index }) => index + 1} />
      <br />
      <FcRate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
    </>
  );
};
