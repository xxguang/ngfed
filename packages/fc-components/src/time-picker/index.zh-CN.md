---
title: FcTimePicker
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /4.数据录入
---

## FcTimePicker  时间选择框

输入或选择时间的控件。

## 何时使用

---

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。


## 代码演示

### 基本
<code src="./demo/base01.tsx" />

### 受控组件
<code src="./demo/base02.tsx" />

### 三种大小
<code src="./demo/base03.tsx" />

### 禁用
<code src="./demo/base04.tsx" />

### 选择时分
<code src="./demo/base05.tsx" />

### 步长选项
<code src="./demo/base06.tsx" />

<!-- ### 示例7 12 小时制
> 12 小时制的时间选择器，默认的 format 为 h:mm:ss a。
<code src="./demo/base07.tsx" />

### 示例8 无边框
> 无边框样式
<code src="./demo/base08.tsx" /> -->

### API


| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |  |
| bordered | 是否有边框 | boolean | true |  |
| className | 选择器类名 | string | - |  |
| clearText | 清除按钮的提示文案 | string | clear |  |
| defaultValue | 默认时间 | moment | - |  |
| disabled | 禁用全部操作 | boolean | false |  |
| disabledHours | 禁止选择部分小时选项 | 	function() | - |  |
| disabledMinutes | 禁止选择部分分钟选项 | function(selectedHour) | - |  |
| disabledSeconds | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | - | |
| format | 展示的时间格式 | string | 	HH:mm:ss |  |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - |  |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |  |
| hourStep | 小时选项间隔 | number | 1 |  |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |  |
| minuteStep | 分钟选项间隔 | number | 1 |  |
| open | 面板是否打开 | boolean | false |  |
| placeholder | 没有值的时候显示的内容 | string \| [string, string] | 请选择时间 |  |
| popupClassName | 弹出层类名 | string | - |  |
| popupStyle | 弹出层样式对象 | object | - |  |
| secondStep | 秒选项间隔 | number | 1 |  |
| showNow | 面板是否显示“此刻”按钮 | boolean | - |  |
| suffixIcon | 自定义的选择框后缀图标 | 	ReactNode | - |  |
| use12Hours | 使用 12 小时制，为 true 时 format 默认为 h:mm:ss a | boolean | false |  |
| value | 当前时间 | moment | - |  |
| onChange | 时间发生变化的回调 | function(time: moment, timeString: string): void | - |  |
| onOpenChange | 面板打开/关闭时的回调 | (open: boolean) => void | - |  |

### 方法
| 名称 | 描述 | 版本 | 
| --- | --- | --- | 
| blur() | 移除焦点 |  | 
| focus() | 获取焦点 |  | 
