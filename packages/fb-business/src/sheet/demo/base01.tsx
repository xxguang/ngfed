/**
 * title: 工作薄使用
 * desc: 配置options参数，设置工作簿基本信息，如工具栏，表格数据，基础样式。
 * iframe: 800
 */
import React from 'react';
import { FbSheet } from '@ngfed/fb-business';

const options = {
  container: 'luckysheet', // 设定DOM容器的id
  title: 'Luckysheet Demo', // 设定表格名称
  lang: 'zh',
};

export default () => {
  return (
    <div style={{ height: '800px' }}>
      <FbSheet options={options} />
    </div>
  );
};
