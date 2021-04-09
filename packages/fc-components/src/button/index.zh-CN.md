---
title: FcButton
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /1.通用
---

## FcButton 按钮

按钮用于开始一个即时操作。

 ## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：用于作为外链的行动点。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 代码演示

> 下面我们通过逐一设置`FcButton`按钮组件的`type`,`shape`,`size`,`loading`,`disabled`等属性。演示按钮的不同类型，形状，尺寸，和状态。

### 类型 type

> type = 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text'

<code src="./demo/base01.tsx" />

### 形状 shape

> shape = 'circle' | 'round'

<code src="./demo/base02.tsx" />

### 大小 size

> size = 'small' | 'large'

<code src="./demo/base03.tsx" />

### 状态 loading

> loading = boolean | { delay: number }

<code src="./demo/base04.tsx" />

### 点击 onClick

> onClick = (event) => void

<code src="./demo/base05.tsx" />

### 自定义样式

> 设置 style 或 className 添加样式

```css
const buttonStyle = {
      background: 'linear-gradient(45deg, gold, red)',
      color: 'white',
      borderWidth: '0px',
      borderRadius: '10px'
    }
```

<code src="./demo/base06.tsx" />

### 块级 block

<code src="./demo/base07.tsx" />

### 危险 danger

<code src="./demo/base08.tsx" />

### 图标 icon

<code src="./demo/base09.tsx" />

### 链接按钮 target 和 href
> href: 要跳转的链接， target: _blank | _self | _parent | _top
<code src="./demo/base10.tsx" />

### 幽灵按钮

<code src="./demo/base11.tsx" />

## API

通过设置 FcButton 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |  |
| danger | 设置危险按钮 | boolean | false |  |
| disabled | 按钮失效状态 | boolean | false |  |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| icon | 设置按钮的图标组件 | ReactNode | - |  |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |  |
| shape | 设置按钮形状 | `circle` \| `round` | - |  |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 设置按钮类型 | `primary` \| `ghost` \| `dashed` \| `link` \| `text` \| `default` | `default` |  |
| onClick | 点击按钮时的回调 | (event) => void | - |  |



### 待开放
```tsx | pure
htmlType
```
<div style="display:none">
丢弃的属性：
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
</div>
