import React from 'react';
import { message } from 'antd';
import omit from 'rc-util/lib/omit';

const api = message;
const open = api.open;
console.log('message api', api);
api.open = (args) => {
  // 1. 剔除不要的属性
  const omitArgs = omit(args, ['key', 'rtl']);
  open({ ...omitArgs });
};

export default api;
