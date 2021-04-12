---
title: FbFeedback
order: 1
nav:
  order: 2
  title: 业务组件库
  path: /fb
group:
  title: 交互
  path: /feedback
---


## FbFeedback 反馈

用户点击反馈提示

### color 文本和背景的颜色

> color = 'red' | 'green' | 'blue' | 'black'

<code src="./demo/base01.tsx" />


### shape 图形

> shape = 'round' | 'circle' 

<code src="./demo/base02.tsx" />


### onClick 事件

> 点击事件

<code src="./demo/base03.tsx" />


## API
按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 设置点击时候内容的字体颜色和背景颜色 | `red` \| `green`  \| `blue`  \| `black` | `black` |  |
| shape | 设置反馈图形的形状 |  `circle` \| `round` | `round` |  |
| onClick | 点击按钮时的回调 | (event) => void | - |  |