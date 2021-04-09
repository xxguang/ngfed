---
title: FcRate
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /4.数据录入
---

## FcRate 

评分组件。

## 代码演示

### 基础用法

<code src="./demo/base01.tsx" />

### 半星

<code src="./demo/base02.tsx" />

### 只读

<code src="./demo/base03.tsx" />


### 清除

<code src="./demo/base04.tsx" />


### 其他字符

<code src="./demo/base05.tsx" />

### 自定义字符

<code src="./demo/base06.tsx" />



## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true |  |
| allowHalf | 是否允许半选 | boolean | false |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| character | 自定义字符 | ReactNode \| (RateProps) => ReactNode | &lt;StarFilled /> | function(): 4.4.0 |
| className | 自定义样式类名 | string | - |  |
| count | star 总数 | number | 5 |  |
| defaultValue | 默认值 | number | 0 |  |
| disabled | 只读，无法进行交互 | boolean | false |  |
| style | 自定义样式对象 | CSSProperties | - |  |
| tooltips | 自定义每项的提示信息 | string\[] | - |  |
| value | 当前数，受控值 | number | - |  |
| onBlur | 失去焦点时的回调 | function() | - |  |
| onChange | 选择时的回调 | function(value: number) | - |  |
| onFocus | 获取焦点时的回调 | function() | - |  |
| onHoverChange | 鼠标经过时数值变化的回调 | function(value: number) | - |  |
| onKeyDown | 按键回调 | function(event) | - |  |

## 方法

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
