---
title: FcConfigProvider
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /7.其他
---

为组件提供统一的全局化配置。

## 使用

FcConfigProvider 使用 React 的 [context](https://facebook.github.io/react/docs/context.html) 特性，只需在应用外围包裹一次即可全局生效。

```jsx pure
import { ConfigProvider } from 'antd';

// ...

export default () => (
  <FcConfigProvider direction="rtl">
    <App />
  </FcConfigProvider>
);
```

### Content Security Policy

部分组件为了支持波纹效果，使用了动态样式。如果开启了 Content Security Policy (CSP)，你可以通过 `csp` 属性来进行配置：

```jsx pure
<FcConfigProvider csp={{ nonce: 'YourNonceCode' }}>
  <FcButton>My Button</FcButton>
</FcConfigProvider>
```

## 代码演示

### 方向
<code src="./demo/base01.tsx" />

### 组件尺寸
<code src="./demo/base02.tsx" />
