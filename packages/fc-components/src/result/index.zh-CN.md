---
title: FcResult
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /6.反馈
---

## FcResult 
用于反馈一系列操作任务的处理结果。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 代码演示
### Success
<code src="./demo/base01.tsx" />

### Info
<code src="./demo/base02.tsx" />

### Warning
<code src="./demo/base03.tsx" />

### 403
<code src="./demo/base04.tsx" />

### 404
<code src="./demo/base05.tsx" />

### 500
<code src="./demo/base06.tsx" />

### Error
<code src="./demo/base07.tsx" />

### 自定义 icon
<code src="./demo/base08.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 操作区 | ReactNode | - |
| icon | 自定义 icon | ReactNode | - |
| status | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | subTitle 文字 | ReactNode | - |
| title | title 文字 | ReactNode | - |
