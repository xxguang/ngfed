---
title: FcMessage
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /6.反馈
---

## FcMessage 

全局展示操作反馈信息。

## 何时使用
- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

### 普通提示

<code src="./demo/base01.tsx" />

### 其他类型提示

<code src="./demo/base02.tsx" />

### 修改延时

<code src="./demo/base03.tsx" />

### 加载中

<code src="./demo/base04.tsx" />

### Promise 接口

<code src="./demo/base05.tsx" />

### 通过Hooks获取上下文（4.5.0+）

<code src="./demo/base06.tsx" />

### 自定义样式

<code src="./demo/base07.tsx" />

## API

静态方法

- `message.success(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`
- `message.info(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.warn(content, [duration], onClose)` // alias of warning
- `message.loading(content, [duration], onClose)`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | ReactNode \| config | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| onClose | 关闭时触发的回调函数 | function | - |

promise 接口

- `message[level](content, [duration]).then(afterClose)`
- `message[level](content, [duration], onClose).then(afterClose)`
其中 message[level] 是组件已经提供的静态方法。then 接口返回值是 Promise。

config 方式配置参数

- `message.open(config)`
- `message.success(config)`
- `message.error(config)`
- `message.info(config)`
- `message.warning(config)`
- `message.warn(config)` // alias of warning
- `message.loading(config)`

`config` 对象属性如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义 CSS class | string | - |
| content | 提示内容 | ReactNode | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| icon | 自定义图标 | ReactNode | - |
| style | 自定义内联样式 | [CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - |
| onClick | 点击 message 时触发的回调函数 | function | - |
| onClose | 关闭时触发的回调函数 | function | - |

### 全局方法

- `message.config(options)`
- `message.destroy()`

options配置：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| duration | 默认自动关闭延时，单位秒 | number | 3 |  |
| getContainer | 配置渲染节点的输出位置 | () => HTMLElement | () => document.body |  |
| maxCount | 最大显示数, 超过限制时，最早的消息会被自动关闭 | number | - |  |
| prefixCls | 消息节点的 className 前缀 | string | `ant-message` | 4.5.0 |
| top | 消息距离顶部的位置 | number | 24 |  |