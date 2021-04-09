---
title: FcAlert
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /6.反馈
---

## FcAlert 

警告提示，展现需要关注的信息。
## 何时使用
- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

### 基本

<code src="./demo/base01.tsx" />

### 可关闭

<code src="./demo/base02.tsx" />

### 带图标

<code src="./demo/base03.tsx" />

### 带样式

<code src="./demo/base04.tsx" />

### 带辅助性文字

<code src="./demo/base05.tsx" />

### 顶部公告

<code src="./demo/base06.tsx" />

### 错误处理

<code src="./demo/base07.tsx" />

### 平滑地卸载
<code src="./demo/base08.tsx" />

### 操作
<code src="./demo/base09.tsx" />
## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| action | 自定义操作项 | ReactNode | - | 4.9.0 |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |  |
| banner | 是否用作顶部公告 | boolean | false |  |
| closable | 默认不显示关闭按钮 | boolean | - |  |
| description | 警告提示的辅助性文字介绍 | ReactNode | - |  |
| icon | 自定义图标，`showIcon` 为 true 时有效 | ReactNode | - |  |
| message | 警告提示内容 | ReactNode | - |  |
| showIcon | 是否显示辅助图标 | boolean | false，`banner` 模式下默认值为 true |  |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`，`banner` 模式下默认值为 `warning` |  |
| onClose | 关闭时触发的回调函数 | (e: MouseEvent) => void | - |  |

### Alert.ErrorBoundary

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| description | 自定义错误内容，如果未指定会展示报错堆栈 | ReactNode | {{ error stack }} |  |
| message | 自定义错误标题，如果未指定会展示原生报错信息 | ReactNode | {{ error }} |  |
