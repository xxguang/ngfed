---
title: FcTooltip
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcTooltip - 文字提示
简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个 `按钮/文字/操作` 的文案解释。

## 案列演示

### 基本

<code src="./demo/base01.tsx" />

### 箭头指向

<code src="./demo/base02.tsx" />

### 位置

<code src="./demo/base03.tsx" />

### 多彩文字提示

<code src="./demo/base04.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示文字 | ReactNode \| () => ReactNode | - |

### 共同的 API

以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 该值将合并到 placement 的配置中，设置参考 [rc-tooltip](https://github.com/react-component/tooltip) | object | - |  |
| color | 背景颜色 | string | - | 4.3.0 |
| defaultVisible | 默认是否显隐 | boolean | false |  |
| destroyTooltipOnHide | 关闭后是否销毁 Tooltip，当 `keepParent` 为 `false` 时销毁父容器 | boolean \| { keepParent?: boolean } | false |  |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | function(triggerNode) | () => document.body |  |
| overlayClassName | 卡片类名 | string | - |  |
| overlayStyle | 卡片样式 | object | - |  |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top` |  |
| trigger | 触发行为，可选 `hover` \| `focus` \| `click` \| `contextMenu`，可使用数组设置多个触发行为 | string \| string\[] | `hover` |  |
| onVisibleChange | 显示隐藏的回调 | (visible) => void | - |  |

## 注意

请确保 `Tooltip` 的子元素能接受 `onFocus`、`onClick` 事件。
