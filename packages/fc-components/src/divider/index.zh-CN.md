---
title: FcDivider
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /2.布局
---

## FcDivider 


区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 代码演示

### 是否虚线 dashed

> dashed = boolean

<code src="./demo/base01.tsx" />

### 方向类型 type

> type = 'horizontal' | 'vertical'

<code src="./demo/base02.tsx" />

### 分割线标题 orientation

> orientation = 'left' | 'center' | 'right'

<code src="./demo/base03.tsx" />

## API

| 参数        | 说明                       | 类型                          | 默认值       | 版本  |
| ----------- | -------------------------- | ----------------------------- | ------------ | ----- |
| className   | 分割线样式类               | string                        | -            |       |
| dashed      | 是否虚线                   | boolean                       | false        |       |
| orientation | 分割线标题的位置           | `left` \| `right` \| `center` | `center`     |       |
| plain       | 文字是否显示为普通正文样式 | boolean                       | false        | 4.2.0 |
| style       | 分割线样式对象             | CSSProperties                 | -            |       |
| type        | 水平还是垂直类型           | `horizontal` \| `vertical`    | `horizontal` |       |
