---
title: FcPopover
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcPopover 

> 点击/鼠标移入元素，弹出气泡式的卡片浮层


 ## 何时使用

 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

 和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。


## 代码演示

### 基本

<code src="./demo/base01.tsx" />

### 三种触发方式

<code src="./demo/base02.tsx" />

### 位置

<code src="./demo/base03.tsx" />

### 从浮层内关闭

<code src="./demo/base04.tsx" />

### 箭头指向

<code src="./demo/base05.tsx" />

### 悬停点击弹出窗口

<code src="./demo/base06.tsx" />


## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| content | 卡片内容 | ReactNode \| () => ReactNode | - |  |
| title | 卡片标题 | ReactNode \| () => ReactNode | - |  |

