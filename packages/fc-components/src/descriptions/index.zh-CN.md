---
title: FcDescriptions
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcDescriptions 描述列表

成组展示多个只读字段。

## 何时使用

常见于详情页的信息展示。

## 代码演示

### 基本用法
<code src="./demo/base01.tsx" />

### 带边框
<code src="./demo/base02.tsx" />

### 自定义尺寸
<code src="./demo/base03.tsx" />

### 响应式
<code src="./demo/base04.tsx" />

### 垂直
<code src="./demo/base05.tsx" />

### 垂直带边框
<code src="./demo/base06.tsx" />

## API

### Descriptions

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bordered | 是否展示边框 | boolean | false |  |
| column | 一行的 `DescriptionItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | number | 3 |  |
| contentStyle | 自定义内容样式 | CSSProperties | - | 4.10.0 |
| extra | 描述列表的操作区域，显示在右上方 | ReactNode | - | 4.5.0 |
| labelStyle | 自定义标签样式 | CSSProperties | - | 4.10.0 |
| layout | 描述布局 | `horizontal` \| `vertical` | `horizontal` |  |
| size | 设置列表的大小。可以设置为 `middle` 、`small`, 或不填（只有设置 `bordered={true}` 生效） | `default` \| `middle` \| `small` | - |  |
| title | 描述列表的标题，显示在最顶部 | ReactNode | - |  |

### DescriptionItem

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| contentStyle | 自定义内容样式 | CSSProperties | - | 4.9.0 |
| label | 内容的描述 | ReactNode | - |  |
| labelStyle | 自定义标签样式 | CSSProperties | - | 4.9.0 |
| span | 包含列的数量 | number | 1 |  |