/**
 * title: 简单列表
 * desc: 列表拥有大、中、小三种尺寸。<br/>通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。<br/>可通过设置 `header` 和 `footer`，来自定义列表头部和尾部。
 */
import React from 'react';
import { FcList, FcTypography, FcDivider } from '@ngfed/fc-components';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
export default () => {
  return (
    <>
      <FcDivider orientation="left">Default Size</FcDivider>
      <FcList
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <FcList.Item>
            <FcTypography.Text mark>[ITEM]</FcTypography.Text> {item}
          </FcList.Item>
        )}
      />
      <FcDivider orientation="left">Small Size</FcDivider>
      <FcList
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <FcList.Item>{item}</FcList.Item>}
      />

      <FcDivider orientation="left">Large Size</FcDivider>
      <FcList
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <FcList.Item>{item}</FcList.Item>}
      />
    </>
  );
};
