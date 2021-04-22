/**
 * title: 顶部工具条
 * desc: defaultCollapsed 可控制工具条的展开和折叠
 * iframe: 800
 */
import React from 'react';
import { FbSheet } from '@ngfed/fb-business';
import { data } from './data';

const options = {
  container: 'luckysheet', // 设定DOM容器的id
  title: 'Luckysheet Demo', // 设定表格名称
  lang: 'zh',
  data: data,
};

export default () => {
  return (
    <div style={{ height: '800px' }}>
      <FbSheet options={options} defaultCollapsed={true} />
    </div>
  );
};
