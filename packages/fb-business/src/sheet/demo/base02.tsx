/**
 * title: 工作表配置
 * desc: 配置options.data 参数，设置表格数据，和样式，对齐信息。
 * iframe: 800
 */
import React from 'react';
import { FbSheet } from '@ngfed/fb-business';
import { data1 } from './data';

const options = {
  container: 'luckysheet', // 设定DOM容器的id
  title: 'Luckysheet Demo', // 设定表格名称
  lang: 'zh',
  data: data1,
};

export default () => {
  return (
    <div style={{ height: '800px' }}>
      <FbSheet options={options} />
    </div>
  );
};
