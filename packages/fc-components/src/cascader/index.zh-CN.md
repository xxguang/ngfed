---
title: FcCascader
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /4.数据录入
---

## FcCascader 

级联选择框。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 代码演示

> 下面我们通过逐一设置`FcCascader`组件的属性,演示其中的不同使用方法。

### 基本使用

<code src="./demo/base01.tsx" />

### 自定义显示

<code src="./demo/base02.tsx" />

### 移入展开

<code src="./demo/base03.tsx" />

### 选择即改变

<code src="./demo/base04.tsx" />

### 大小

> 输入框大小size:`large` \| `middle` \| `small`

<code src="./demo/base05.tsx" />

### 自定义已选项

<code src="./demo/base06.tsx" />

### 动态加载选项

<code src="./demo/base07.tsx" />

### 搜索

<code src="./demo/base08.tsx" />

<!-- ### 自定义字段名

<code src="./demo/base09.tsx" /> -->

### 扩展菜单

<code src="./demo/base10.tsx" />

## API

```jsx | pure
<Cascader options={options} onChange={onChange} />
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否支持清除 | boolean | true |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| bordered | 是否有边框 | boolean | true |  |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean | false |  |
| className | 自定义类名 | string | - |  |
| defaultValue | 默认的选中项 | string\[] \| number\[] | \[] |  |
| disabled | 禁用 | boolean | false |  |
| displayRender | 选择后展示的渲染函数 | (label, selectedOptions) => ReactNode | label => label.join(`/`) |  |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.4.0 |
| expandIcon | 自定义次级菜单展开图标 | ReactNode | - | 4.4.0 |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover' | string | `click` |  |
| fieldNames | 自定义 options 中 label name children 的字段 | object | { label: `label`, value: `value`, children: `children` } |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () => document.body |  |
| loadData | 用于动态加载选项，无法与 `showSearch` 一起使用 | (selectedOptions) => void | - |  |
| notFoundContent | 当下拉列表为空时显示的内容 | string | `Not Found` |  |
| options | 可选项数据源 | [Option](#Option)\[] | - |  |
| placeholder | 输入框占位文本 | string | `请选择` |  |
| popupClassName | 自定义浮层类名 | string | - |  |
| popupPlacement | 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` | string | `bottomLeft` |  |
| popupVisible | 控制浮层显隐 | boolean | - |  |
| showSearch | 在选择框中显示搜索框 | boolean \| [Object](#showSearch) | false |  |
| size | 输入框大小 | `large` \| `middle` \| `small` | - |  |
| style | 自定义样式 | CSSProperties | - |  |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |  |
| value | 指定选中项 | string\[] \| number\[] | - |  |
| onChange | 选择完成后的回调 | (value, selectedOptions) => void | - |  |
| onPopupVisibleChange | 显示/隐藏浮层的回调 | (value) => void | - |  |

### showSearch

`showSearch` 为对象时，其中的字段：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false | function(inputValue, path): boolean | - |  |
| limit | 搜索结果展示数量 | number \| false | 50 |  |
| matchInputWidth | 搜索结果列表是否与输入框同宽（[效果](https://github.com/ant-design/ant-design/issues/25779)） | boolean | true |  |
| render | 用于渲染 filter 后的选项 | function(inputValue, path): ReactNode | - |  |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | - |  |

### Option

```typescript
interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
}
```

## 方法

| 名称 | 描述 | 版本 |
| --- | --- | --- |
| blur() | 移除焦点 |  |
| focus() | 获取焦点 |  |