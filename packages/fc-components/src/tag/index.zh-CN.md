---
title: FcTag
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcTag 
 
> 进行标记和分类的小标签。

## 何时使用

用于标记事物的属性和维度。

进行分类。

## 代码演示

### 基础使用

<code src="./demo/base01.tsx">

### 多彩标签

<code src="./demo/base02.tsx">

### 动态添加和删除

<code src="./demo/base03.tsx">

### 可选择标签

<code src="./demo/base04.tsx">

### 控制关闭状态

<code src="./demo/base05.tsx">

### 图标按钮

<code src="./demo/base06.tsx">

### 预设状态的标签

<code src="./demo/base07.tsx">

## API

### Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closable | 标签是否可以关闭 | boolean | false |  |
| closeIcon | 自定义关闭按钮 | ReactNode | - | 4.4.0 |
| color | 标签色 | string | - |  |
| icon | 设置图标 | ReactNode | - |  |
| visible | 是否显示标签 | boolean | true |  |
| onClose | 关闭时的回调 | (e) => void | - |  |

### Tag.CheckableTag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 设置标签的选中状态 | boolean | false |
| onChange | 点击标签时触发的回调 | (checked) => void | - |
