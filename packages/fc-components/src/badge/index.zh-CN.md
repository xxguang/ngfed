---
title: FcBadge
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /5.数据展示
---

## FcBadge 
图标右上角的圆形徽标数字。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

### 基本使用

<code src="./demo/base01.tsx" />

### 独立使用

<code src="./demo/base02.tsx" />

### 封顶数字

<code src="./demo/base03.tsx" />

### 讨嫌的小红点

<code src="./demo/base04.tsx" />

### 可点击

<code src="./demo/base05.tsx" />

### 动态

<code src="./demo/base06.tsx" />

<!-- ### 自定义位置偏移 -->

<!-- <code src="./demo/base07.tsx" /> -->

<!-- ### 多彩徽标 -->

<!-- <code src="./demo/base08.tsx" /> -->

<!-- ### 状态点 -->

<!-- <code src="./demo/base09.tsx" /> -->

### 缎带

<code src="./demo/base10.tsx" />

### 大小

<code src="./demo/base11.tsx" />



## API

### Badge

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 自定义小圆点的颜色 | string | - |  |
| count | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | ReactNode | - |  |
| dot | 不展示数字，只有一个小红点 | boolean | false |  |
| overflowCount | 展示封顶的数字值 | number | 99 |  |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | false |  |
| size | 在设置了 `count` 的前提下有效，设置小圆点的大小 | `default` \| `small` | - | 4.6.0 |


### Badge.Ribbon (4.5.0+)

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 自定义缎带的颜色 | string | - |  |
| placement | 缎带的位置，`start` 和 `end` 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end` |  |
| text | 缎带中填入的内容 | ReactNode | - |  |




### 待开放
```tsx | pure
offset,status,text,title
```
<div style="display:none">
丢弃的属性：
| offset | 设置状态点的位置偏移 | \[number, number] | - |  |
| status | 设置 Badge 为状态点 | `success` \| `processing` \| `default` \| `error` \| `warning` | - |  |
| text | 在设置了 `status` 的前提下有效，设置状态点的文本 | ReactNode | - |  |
| title | 设置鼠标放在状态点上时显示的文字 | string | - |  |
</div>