---
title: FcCalendar
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcCalendar 

按照日历形式展示数据的容器。

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## 代码演示

### 基本使用

<code src="./demo/base01.tsx" />

### 通知事项日历

<code src="./demo/base02.tsx" />

### 卡片模式

<code src="./demo/base03.tsx" />

### 选择功能

<code src="./demo/base04.tsx" />

### 自定义头部

<code src="./demo/base05.tsx" />


## API

**注意：**Calendar 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。


| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| dateCellRender | 自定义渲染日期单元格，返回内容会被追加到单元格 | function(date: moment): ReactNode | - |  |
| dateFullCellRender | 自定义渲染日期单元格，返回内容覆盖单元格 | function(date: moment): ReactNode | - |  |
| defaultValue | 默认展示的日期 | [moment](http://momentjs.com/) | - |  |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | - |  |
| fullscreen | 是否全屏显示 | boolean | true |  |
| headerRender | 自定义头部内容 | function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()}) | - |  |
| mode | 初始模式 | `month` \| `year` | `month` |  |
| monthCellRender | 自定义渲染月单元格，返回内容会被追加到单元格 | function(date: moment): ReactNode | - |  |
| monthFullCellRender | 自定义渲染月单元格，返回内容覆盖单元格 | function(date: moment): ReactNode | - |  |
| validRange | 设置可以显示的日期 | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - |  |
| value | 展示日期 | [moment](http://momentjs.com/) | - |  |
| onChange | 日期变化回调 | function(date: moment） | - |  |
| onPanelChange | 日期面板变化回调 | function(date: moment, mode: string) | - |  |
| onSelect | 点击选择日期回调 | function(date: moment） | - |  |





### 待开放
```tsx | pure
locale
```
<div style="display:none">
丢弃的属性：
| locale | 国际化配置 | object | [(默认配置)](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  | -`button` |  |
</div>