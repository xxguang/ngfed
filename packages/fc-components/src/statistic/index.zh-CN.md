---
title: FcStatistic
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcStatistic 

展示统计数值。


 ## 何时使用

当需要突出某个或某组数字时。

当需要展示带描述的统计类数据时使用。


## 代码演示 

 ### 基础使用

<code src="./demo/base01.tsx">

 ### 添加前缀后缀
 >  prefix | 设置数值的前缀  
 >  suffix | 设置数值的后缀

 <code src="./demo/base02.tsx"> 

 ### 在卡片中展示
 > 在FcCard中展示
<code src="./demo/base03.tsx"> 

### 倒计时 Countdown
<code src="./demo/base04.tsx">




## API

#### Statistic

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| decimalSeparator | 设置小数点 | string | `.` |  |
| formatter | 自定义数值展示 | (value) => ReactNode | - |  |
| groupSeparator | 设置千分位标识符 | string | `,` |  |
| loading | 数值是否加载中 | boolean | false | 4.8.0 |
| precision | 数值精度 | number | - |  |
| prefix | 设置数值的前缀 | ReactNode | - |  |
| suffix | 设置数值的后缀 | ReactNode | - |  |
| title | 数值的标题 | ReactNode | - |  |
| value | 数值内容 | string \| number | - |  |
| valueStyle | 设置数值的样式 | CSSProperties | - |  |

#### Statistic.Countdown

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 格式化倒计时展示，参考 [moment](http://momentjs.com/) | string | `HH:mm:ss` |  |
| prefix | 设置数值的前缀 | ReactNode | - |  |
| suffix | 设置数值的后缀 | ReactNode | - |  |
| title | 数值的标题 | ReactNode | - |  |
| value | 数值内容 | number \| moment | - |  |
| valueStyle | 设置数值的样式 | CSSProperties | - |  |
| onFinish | 倒计时完成时触发 | () => void | - |  |
