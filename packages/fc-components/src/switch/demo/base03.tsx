/**
 * title: 文字和图标
 * desc: 带有文字和图标。
 */

import React from 'react';
import { FcSwitch } from '@ngfed/fc-components';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcSwitch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
      <br />
      <FcSwitch checkedChildren="1" unCheckedChildren="0" />
      <br />
      <FcSwitch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
    </>
  );
};
