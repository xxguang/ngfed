---
title: FcCheckbox
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /4.数据录入
---

## FcCheckbox 

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

> 下面我们通过逐一设置`FcCheckbox`组件的属性,演示其中的不同使用方法。

### 基本使用

<code src="./demo/base01.tsx" />

### 受控的多选框

<code src="./demo/base02.tsx" />

### 多选框组

<code src="./demo/base03.tsx" />

### 全选

<code src="./demo/base04.tsx" />

### 布局

<code src="./demo/base05.tsx" />

## API

### 属性

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |  |
| checked | 指定当前是否选中 | boolean | false |  |
| defaultChecked | 初始是否选中 | boolean | false |  |
| disabled | 失效状态 | boolean | false |  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |  |
| onChange | 变化时回调函数 | function(e:Event) | - |  |

#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | string\[] | \[] |  |
| disabled | 整组失效 | boolean | false |  |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |  |
| options | 指定可选项 | string\[] \| Option\[] | \[] |  |
| value | 指定选中的选项 | string\[] | \[] |  |
| onChange | 变化时回调函数 | function(checkedValue) | - |  |

##### Option

```typescript
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### 方法

#### Checkbox

| 名称 | 描述 | 版本 |
| --- | --- | --- |
| blur() | 移除焦点 |  |
| focus() | 获取焦点 |  |
