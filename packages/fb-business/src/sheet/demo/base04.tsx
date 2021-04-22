/**
 * title: 文件导入和模版使用
 * desc: 模版文件列表为一个数组，每个模版对象，必须提供name和src两个字段
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

const files = [
  {
    name: 'House cleaning checklist.xlsx',
    src: 'https://minio.cnbabylon.com/public/luckysheet/Activity%20costs%20tracker.xlsx',
  },
  {
    name: 'Money Manager.xlsx',
    src: 'https://minio.cnbabylon.com/public/luckysheet/money-manager-2.xlsx',
  },
];

export default () => {
  return (
    <div style={{ height: '800px' }}>
      <FbSheet options={options} showtTopbar={true} templateFiles={files} />
    </div>
  );
};
