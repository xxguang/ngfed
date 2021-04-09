---
title: FcTimeline
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcTimeline 

> 垂直展示的时间流信息。

## 何时使用

当有一系列信息需按时间排列时，可正序和倒序。

需要有一条时间轴进行视觉上的串联时

## 代码演示

### 基础展示

 <code src="./demo/base01.tsx">

### 圆圈颜色

 <code src="./demo/base02.tsx">

### 最后一个及排序

 <code src="./demo/base03.tsx">

### 交替展现

 <code src="./demo/base04.tsx">

### 自定义时间轴点

 <code src="./demo/base05.tsx">

### 右侧时间轴点

 <code src="./demo/base06.tsx">

### 标签

 <code src="./demo/base07.tsx">

## API

### Timeline


时间轴。

| 参数       | 说明                                           | 类型                             | 默认值                 |
| ---------- | ---------------------------------------------- | -------------------------------- | ---------------------- |
| mode       | 通过设置 `mode` 可以改变时间轴和内容的相对位置 | `left` \| `alternate` \| `right` | -                      |
| pending    | 指定最后一个幽灵节点是否存在或内容             | boolean \| ReactNode             | false                  |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点       | ReactNode                        | &lt;LoadingOutlined /> |
| reverse    | 节点排序                                       | boolean                          | false                  |

### Timeline.Item

时间轴的每一个节点。

| 参数     | 说明                                                        | 类型              | 默认值 |
| -------- | ----------------------------------------------------------- | ----------------- | ------ |
| color    | 指定圆圈颜色 `blue`, `red`, `green`, `gray`，或自定义的色值 | string            | `blue` |
| dot      | 自定义时间轴点                                              | ReactNode         | -      |
| label    | 设置标签                                                    | ReactNode         | -      |
| position | 自定义节点位置                                              | `left` \| `right` | -      |
