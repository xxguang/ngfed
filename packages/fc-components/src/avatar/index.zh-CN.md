---
title: FcAvatar
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcAvatar 

 头像


## 代码演示

### 基本使用

<code src="./demo/base01.tsx" />

### 类型

<code src="./demo/base02.tsx" />

### 自动调整字符大小

<code src="./demo/base03.tsx" />

### 带徽标的头像

<code src="./demo/base04.tsx" />

### 响应式尺寸

<code src="./demo/base05.tsx" />

### FcAvatar.FcGroup

<code src="./demo/base06.tsx" />

## API

### Avatar

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像无法显示时的替代文本 | string | - |  |
| icon | 设置头像的自定义图标 | ReactNode | - |  |
| shape | 指定头像的形状 | `circle` \| `square` | `circle` |  |
| size | 设置头像的大小 | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.7.0 |
| src | 图片类头像的资源地址或者图片元素 | string \| ReactNode | - | ReactNode: 4.8.0 |


> Tip：你可以设置 `icon` 或 `children` 作为图片加载失败的默认 fallback 行为，优先级为 `icon` > `children`

### Avatar.Group (4.5.0+)

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| maxCount | 显示的最大头像个数 | number | - |  |
| size | 设置头像的大小 | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.8.0 |




### 待开放
```tsx | pure
gap,srcSet,onError,maxPopoverPlacement,maxStyle
```
<div style="display:none">
丢弃的属性：
| gap | 字符类型距离左右两侧边界单位像素 | number | 4 | 4.3.0 |
| srcSet | 设置图片类头像响应式资源地址 | string | - |  |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean | - |  |

| maxPopoverPlacement | 多余头像气泡弹出位置 | `top` \| `bottom` | `top` |  |
| maxStyle | 多余头像样式 | CSSProperties | - |  |
</div>
