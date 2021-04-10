---
title: FcSpace
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /2.布局
---

## FcSpace - 间距

设置组件之间的间距。


## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 代码演示

### 尺寸 size

> size = Size | Size[] ----- Size = 'small' | 'middle' | 'large' | number

<code src="./demo/base01.tsx" />

### 方向 direction

> direction = 'vertical' | 'horizontal'

<code src="./demo/base02.tsx" />

### 对齐 align

> align = 'start' | 'end' | 'center' | 'baseline'

<code src="./demo/base03.tsx" />

### 分割 split

> split = ReactNode

<code src="./demo/base04.tsx" />

### 换行 wrap

> wrap = boolean

<code src="./demo/base05.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \|`center` \|`baseline` | - | 4.2.0 |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` | 4.1.0 |
| size | 间距大小 | [Size](#Size) \| [Size\[\]](#Size) | `small` | 4.1.0 \| Array: 4.9.0 |
| split | 设置拆分 | ReactNode | - | 4.7.0 |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false | 4.9.0 |

### Size

`'small' | 'middle' | 'large' | number`
