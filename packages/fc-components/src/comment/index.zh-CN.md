---
title: FcComment
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcComment - 评论
---

对网站内容的反馈、评价和讨论。

## 何时使用

评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。

## 代码演示

### 基本评论
<code src="./demo/base01.tsx" />

<!-- ## zh-CN

列表拥有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

可通过设置 `header` 和 `footer`，来自定义列表头部和尾部。 -->

### 配合FcList
<code src="./demo/base02.tsx" />

### 嵌套评论
<code src="./demo/base03.tsx" />

### 回复框
<code src="./demo/base04.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actions | 在评论内容下面呈现的操作项列表 | Array&lt;ReactNode> | - |  |
| author | 要显示为注释作者的元素 | ReactNode | - |  |
| avatar | 要显示为评论头像的元素 - 通常是 antd Avatar 或者 src | ReactNode | - |  |
| children | 嵌套注释应作为注释的子项提供 | ReactNode | - |  |
| content | 评论的主要内容 | ReactNode | - |  |
| datetime | 展示时间描述 | ReactNode | - |  |
