---
title: FcEmpty
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcEmpty 空状态

空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示。

- 初始化场景时的引导创建流程。


## 代码演示

### 基础用法
<code src="./demo/base01.tsx" />

### 选择图片
<code src="./demo/base02.tsx" />

### 自定义
<code src="./demo/base03.tsx" />

### 全局化配置
<code src="./demo/base04.tsx" />

### 无描述展示
<code src="./demo/base05.tsx" />

## API


| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| description | 自定义描述内容 | ReactNode | - |  |
| image | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode | `Empty.PRESENTED_IMAGE_DEFAULT` |  |