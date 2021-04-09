---
title: FcLayout
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /2.布局
---

## FcLayout 

`FcLayout` 预设一些基本布局, 包含 `Header` , `Footer` , `Content` , `Sider` 子组件

### 组件概述
FcLayout：布局容器，其下可嵌套 Header Sider Content Footer 或 FcLayout 本身，可以放在任何父容器中。

Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。

Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。


## 代码演示

### 基本结构
<code src="./demo/base01.tsx" />

### 上中下布局 
<code src="./demo/base02.tsx" />

### 顶部-侧边布局-通栏
<code src="./demo/base03.tsx" />

### 顶部-侧边布局
<code src="./demo/base04.tsx" />

<!-- ### 侧边布局
侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部分。 
<code src="./demo/base05.tsx" /> -->
 
### 自定义触发器

<code src="./demo/base06.tsx" />

### 响应式布局

> 说明：配置 breakpoint 属性即生效，视窗宽度小于 breakpoint 时 Sider 缩小为 collapsedWidth 宽度，若将 collapsedWidth 设置为 0，会出现特殊 trigger。

<code src="./demo/base07.tsx" />

<!-- 
##### 示例8 固定头部
###### 一般用于固定顶部导航，方便页面切换。

<code src="./demo/base08.tsx" />

##### 示例9 固定侧边栏
###### 当内容较长时，使用固定侧边栏可以提供更好的体验。

<code src="./demo/base09.tsx" /> -->

## API

### FcLayout

布局容器。

| 参数      | 说明                                                               | 类型          | 默认值 |
| --------- | ------------------------------------------------------------------ | ------------- | ------ |
| className | 容器 className                                                     | string        | -      |
| hasSider  | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean       | -      |
| style     | 指定样式                                                           | CSSProperties | -      |

> `Layout.Header` `Layout.Footer` `Layout.Content` API 与 `Layout` 相同

### FcLayout.Sider

侧边栏。

| 参数             | 说明                                                                 | 类型                    | 默认值 |
| ---------------- | -------------------------------------------------------------------- | ----------------------- | ------ |
| className        | 容器 className                                                       | string                  | -      |
| collapsed        | 当前收起状态                                                         | boolean                 | -      |
| collapsible      | 是否可收起                                                           | boolean                 | false  |
| defaultCollapsed | 是否默认收起                                                         | boolean                 | false  |
| reverseArrow     | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用                    | boolean                 | false  |
| style            | 指定样式                                                             | CSSProperties           | -      |
| theme            | 主题颜色                                                             | `light` \| `dark`       | `dark` |
| width            | 宽度                                                                 | number \| string        | 200    |
| onCollapse       | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | (collapsed, type) => {} | -      |

<div style="display:none">
breakpoint
trigger
collapsedWidth
zeroWidthTriggerStyle
onBreakpoint
</div>
