---
title: FcAffix
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /3.导航
---

## FcAffix 

将元素钉在可视范围

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。


## 代码演示

### 基本

<code src="./demo/base01.tsx" />


### 固定状态改变的回调

<code src="./demo/base02.tsx" />

### 滚动容器

<code src="./demo/base03.tsx" />

## API

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | - |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
| onChange | 固定状态改变时触发的回调函数 | function(affixed) | - |
