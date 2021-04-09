import React from 'react';
import { notification } from 'antd';
import omit from 'rc-util/lib/omit';

const api = notification;
const open = api.open;
console.log('notification api', api);
api.open = (args) => {
  // 1. 剔除不要的属性
  const omitArgs = omit(args, ['closeIcon', 'top', 'bottom']);

  // 2. 限定属性取值
  let { placement = 'topRight' } = args;
  const isValidPlacement = ['topRight', 'bottomRight'].includes(placement);

  if (!isValidPlacement) {
    placement = 'topRight';
  }
  open({ ...omitArgs, placement });
};

export default api;
