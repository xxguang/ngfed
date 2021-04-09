---
title: FcBackTop
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /7.其他
---

## FcBackTop 

返回页面顶部的操作按钮

## 何时使用

- 当页面内容区域比较长时;
- 当用户需要频繁返回顶部查看相关内容时。

## 代码演示

### 基本 最简单的用法

<code src="./demo/base02.tsx" />

### 自定义样式 可以自定义回到顶部按钮的样式，限制宽高：`40px*40px`

<code src="./demo/base01.tsx" />


## API


| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| duration | 回到顶部所需时间（ms） | number | 450 | 4.4.0 |
| target | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |  |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop | number | 400 |  |
| onClick | 点击按钮的回调函数 | function | - |  |
