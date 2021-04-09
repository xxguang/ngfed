---
title: FcPageHeader
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /3.导航
---

## FcPageHeader 

页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。

## 何时使用

当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。

## 代码演示

### 标准样式

<code src="./demo/base01.tsx" />

### 带面包屑页头

<code src="./demo/base02.tsx" />

### 多种形态的 PageHeader

<code src="./demo/base03.tsx" />

### 响应式


<code src="./demo/base04.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| avatar | 标题栏旁的头像 | [AvatarProps](/components/avatar/) | - |  |
| backIcon | 自定义 back icon ，如果为 false 不渲染 back icon | ReactNode \| boolean | &lt;ArrowLeft /> |  |
| breadcrumb | 面包屑的配置 | [Breadcrumb](/components/breadcrumb/) | - |  |
| breadcrumbRender | 自定义面包屑区域的内容 | `(props, originBreadcrumb) => ReactNode` | - | 4.11.0 |
| extra | 操作区，位于 title 行的行尾 | ReactNode | - |  |
| footer | PageHeader 的页脚，一般用于渲染 TabBar | ReactNode | - |  |
| ghost | pageHeader 的类型，将会改变背景颜色 | boolean | true |  |
| subTitle | 自定义的二级标题文字 | ReactNode | - |  |
| tags | title 旁的 tag 列表 | [Tag](/components/tag/)\[] \| [Tag](/components/tag/) | - |  |
| title | 自定义标题文字 | ReactNode | - |  |
| onBack | 返回按钮的点击事件 | () => void | - |  |