---
title: FcSwitch
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /4.数据录入
---

## FcSwitch 

开关选择器。


## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基础用法
> defaultChecked = boolean ,   onChange = function
<code src="./demo/base01.tsx" />

### 禁用状态

> disabled = boolean 

<code src="./demo/base02.tsx" />


### 自定义图标

> checkedChildren = ReactNode 和 unCheckedChildren  = ReactNode

<code src="./demo/base03.tsx" />

### 大小

> size = `default` `small` | string

<code src="./demo/base04.tsx" />



## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 组件自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| checkedChildren | 选中时的内容 | ReactNode | - |
| className | Switch 器类名 | string | - |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| size | 开关大小，可选值：`default` `small` | string | `default` |
| unCheckedChildren | 非选中时的内容 | ReactNode | - |
| onChange | 变化时回调函数 | function(checked: boolean, event: Event) | - |
| onClick | 点击时回调函数 | function(checked: boolean, event: Event) | - |

## 方法

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
