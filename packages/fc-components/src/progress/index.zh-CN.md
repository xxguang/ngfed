---
title: FcProgress
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /6.反馈
---

## FcProgress - 进度条

展示操作的当前进度。

## 何时使用


在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。


## 代码演示

### 进度条
<code src="./demo/base01.tsx" />

### 进度圈
<code src="./demo/base02.tsx" />

### 小型进度条
<code src="./demo/base03.tsx" />

### 小型进度圈
<code src="./demo/base04.tsx" />

### 进度圈动态展示
<code src="./demo/base05.tsx" />

### 动态展示
<code src="./demo/base06.tsx" />

### 自定义文字格式
<code src="./demo/base07.tsx" />

### 仪表盘
<code src="./demo/base08.tsx" />

### 分段进度条
<code src="./demo/base09.tsx" />

### 圆角/方角边缘
<code src="./demo/base10.tsx" />

### 自定义进度条渐变色
<code src="./demo/base11.tsx" />

### 步骤进度条
<code src="./demo/base12.tsx" />


## API

各类型共用的属性。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| format | 内容的模板函数 | function(percent, successPercent) | (percent) => percent + `%` |
| percent | 百分比 | number | 0 |
| showInfo | 是否显示进度数值或状态图标 | boolean | true |
| status | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | string | - |
| strokeColor | 进度条的色彩 | string | - |
| strokeLinecap | 进度条的样式 | `round` \| `square` | `round` |
| success | 成功进度条相关配置 | { percent: number, strokeColor: string } | - |
| trailColor | 未完成的分段的颜色 | string | - |
| type | 类型，可选 `line` `circle` `dashboard` | string | `line` |

### `type="line"`

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| steps | 进度条总共步数 | number | - |
| strokeColor | 进度条的色彩，传入 object 时为渐变 | string \| { from: string; to: string; direction: string } | - |
| strokeWidth | 进度条线的宽度，单位 px | number | 10 |

### `type="circle"`

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| strokeColor | 圆形进度条线的色彩，传入 object 时为渐变 | string \| object | - |
| strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 |
| width | 圆形进度条画布宽度，单位 px | number | 132 |

### `type="dashboard"`

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gapDegree | 仪表盘进度条缺口角度，可取值 0 ~ 295 | number | 75 |
| gapPosition | 仪表盘进度条缺口位置 | `top` \| `bottom` \| `left` \| `right` | `bottom` |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 |
| width | 仪表盘进度条画布宽度，单位 px | number | 132 |
