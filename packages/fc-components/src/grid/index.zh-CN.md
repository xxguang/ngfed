---
title: FcGrid
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /2.布局
---


## 布局的栅格化系统

布局的栅格化系统，我们是基于行（FcRow）和列（FcCol）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

- 通过 `FcRow` 在水平方向建立一组 `column`（简写 FcCol）。
- 你的内容应当放置于 `FcCol` 内，并且，只有 `FcCol` 可以作为 `FcRow` 的直接元素。
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<FcCol span={8} />` 来创建。
- 如果一个 `FcRow` 中的 `FcCol` 总和超过 24，那么多余的 `FcCol` 会作为一个整体另起一行排列。

我们的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。

## 代码演示

### 列宽 span

> span = number
> 占列宽

<code src="./demo/base01.tsx" />


### 间距 gutter

> gutter= number | object | array
> 水平和垂直间距

<code src="./demo/base02.tsx" />

### 垂直对齐 aligin

> aligin = top | middle | bottom
> row 中的 col 垂直对齐

<code src="./demo/base03.tsx" />

### 水平对齐 justify

> justify= start | end | center | space-around | space-between
> row 中的 col 水平对齐

<code src="./demo/base04.tsx" />


### 栅格偏移 offset

> offset = number
> 相对 row 行 偏移

<code src="./demo/base05.tsx" />

### 自身偏移 pull & push

> pull = number 和 push = number
> 相对自身的位置，pull 右偏移，push 左偏移

<code src="./demo/base06.tsx" />

### 弹性列宽 flex

> flex = string | number
> col 弹性布局

<code src="./demo/base07.tsx" />

## API

### FcCol API

| 成员    | 说明                                                                                                                                   | 类型                                                              | 默认值  | 版本  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------- | ----- |
| align   | 垂直对齐方式                                                                                                                           | `top` \| `middle` \| `bottom`                                     | `top`   |       |
| gutter  | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number \| object \| array                                         | 0       |       |
| justify | 水平排列方式                                                                                                                           | `start` \| `end` \| `center` \| `space-around` \| `space-between` | `start` |       |
| wrap    | 是否自动换行                                                                                                                           | boolean                                                           | true    | 4.8.0 |

### FcRow API

| 成员   | 说明                                                           | 类型             | 默认值 | 版本 |
| ------ | -------------------------------------------------------------- | ---------------- | ------ | ---- |
| flex   | flex 布局属性                                                  | string \| number | -      |      |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格                         | number           | 0      |      |
| order  | 栅格顺序                                                       | number           | 0      |      |
| pull   | 栅格向左移动格数                                               | number           | 0      |      |
| push   | 栅格向右移动格数                                               | number           | 0      |      |
| span   | 栅格占位格数，为 0 时相当于 `display: none`                    | number           | -      |      |
| xs     | `屏幕 < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object | -      |      |
| sm     | `屏幕 ≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object | -      |      |
| md     | `屏幕 ≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object | -      |      |
| lg     | `屏幕 ≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object | -      |      |
| xl     | `屏幕 ≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | -      |      |
| xxl    | `屏幕 ≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | -      |      |
