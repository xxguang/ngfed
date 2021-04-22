/**
 * title: 数据保存到后台
 * desc: 使用onSave保存表格数据，参数是当前工作薄的options数据对象，可发送到后台持久化存储
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
      <FbSheet
        options={options}
        showtTopbar={true}
        onSave={(data, sheet) => {
          console.log('onSave:data', data);
          console.log('onSave:sheet', sheet);
          alert('save data ...');
        }}
      />
    </div>
  );
};
