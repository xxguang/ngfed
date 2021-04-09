---
title: FcCard
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcCard 

通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

### 基本使用

<code src="./demo/base01.tsx" />

### 无边框

<code src="./demo/base02.tsx" />

### 简洁卡片

<code src="./demo/base03.tsx" />

### 更灵活的内容展示

<code src="./demo/base04.tsx" />

### 栅格卡片

<code src="./demo/base05.tsx" />

### 预加载的卡片

<code src="./demo/base06.tsx" />

### 网格型内嵌卡片

<code src="./demo/base07.tsx" />

### 内部卡片

<code src="./demo/base08.tsx" />

### 带页签的卡片

<code src="./demo/base09.tsx" />

### 支持更多内容配置

<code src="./demo/base10.tsx" />




## API

### FcCard

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actions | 卡片操作组，位置在卡片底部 | Array&lt;ReactNode> | - |  |
| activeTabKey | 当前激活页签的 key | string | - |  |
| bodyStyle | 内容区域自定义样式 | CSSProperties | - |  |
| cover | 卡片封面 | ReactNode | - |  |
| extra | 卡片右上角的操作区域 | ReactNode | - |  |
| headStyle | 自定义标题区域样式 | CSSProperties | - |  |
| hoverable | 鼠标移过时可浮起 | boolean | false |  |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |  |
| size | card 的尺寸 | `default` \| `small` | `default` |  |
| tabList | 页签标题列表 | Array&lt;{key: string, tab: ReactNode}> | - |  |
| tabProps | [Tabs](/components/tabs/#Tabs) | - | - |  |
| title | 卡片标题 | ReactNode | - |  |
| type | 卡片类型，可设置为 `inner` 或 不设置 | string | - |  |
| onTabChange | 页签切换的回调 | (key) => void | - |  |

### FcCard.Grid

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 网格容器类名 | string | - |  |
| hoverable | 鼠标移过时可浮起 | boolean | true |  |
| style | 定义网格容器类名的样式 | CSSProperties | - |  |

### FcCard.Meta

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| avatar | 头像/图标 | ReactNode | - |  |
| className | 容器类名 | string | - |  |
| description | 描述内容 | ReactNode | - |  |
| style | 定义容器类名的样式 | CSSProperties | - |  |
| title | 标题内容 | ReactNode | - |  |


### 待开放
```tsx | pure
bordered,defaultActiveTabKey,tabBarExtraContent
```
<div style="display:none">
丢弃的属性：
| bordered | 是否有边框 | boolean | true |  |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | string | `第一个页签` |  |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode | - |  |
</div>