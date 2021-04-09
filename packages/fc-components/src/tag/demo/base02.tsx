/**
 * title:多彩标签
 * desc:我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
 */
import React from 'react';
import { FcTag, FcDivider } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcDivider orientation="left">Presets</FcDivider>
      <div>
        <FcTag color="magenta">magenta</FcTag>
        <FcTag color="red">red</FcTag>
        <FcTag color="volcano">volcano</FcTag>
        <FcTag color="orange">orange</FcTag>
        <FcTag color="gold">gold</FcTag>
        <FcTag color="lime">lime</FcTag>
        <FcTag color="green">green</FcTag>
        <FcTag color="cyan">cyan</FcTag>
        <FcTag color="blue">blue</FcTag>
        <FcTag color="geekblue">geekblue</FcTag>
        <FcTag color="purple">purple</FcTag>
      </div>
      <FcDivider orientation="left">Custom</FcDivider>
      <div>
        <FcTag color="#f50">#f50</FcTag>
        <FcTag color="#2db7f5">#2db7f5</FcTag>
        <FcTag color="#87d068">#87d068</FcTag>
        <FcTag color="#108ee9">#108ee9</FcTag>
      </div>
    </>
  );
};
