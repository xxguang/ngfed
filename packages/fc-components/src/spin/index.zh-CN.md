---
title: FcSpin
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /6.反馈
---

## FcSpin 

用于页面和区块的加载中状态。

## 何时使用
页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

## 基本
<code src="./demo/base01.tsx" />

## 各种大小
<code src="./demo/base02.tsx" />

## 容器
<code src="./demo/base03.tsx" />

## 卡片加载中
<code src="./demo/base04.tsx" />

## 延迟
<code src="./demo/base05.tsx" />

## 自定义描述文案
<code src="./demo/base06.tsx" />

## 自定义指示符
<code src="./demo/base07.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |
| indicator | 加载指示符 | ReactNode | - |
| size | 组件大小，可选值为 `small` `default` `large` | string | `default` |
| spinning | 是否为加载中状态 | boolean | true |
| tip | 当作为包裹元素时，可以自定义描述文案 | string | - |
| wrapperClassName | 包装器的类属性 | string | - |

### 静态方法

- `Spin.setDefaultIndicator(indicator: ReactNode)`
