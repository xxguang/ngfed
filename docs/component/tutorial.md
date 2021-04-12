---
title: 业务组件开发
order: 2
nav:
  order: 3
  title: 指南
  path: /workflow
group:
  path: /开发教程
---

# 业务组件开发教程

> 本文主要讲解如何开发一个全新的业务组件，以及提供一个`通用的范式`描述组件核心逻辑层的书写。开发者需预备：`React`, `antd`, `Typescript`, `git`知识

## 业务开发规范

1. `fc-business`是业务组件库的根目录
1. 所有组件代码存储在 src/组件名， 如： src/button
1. 组件文件夹 采用`小写，横线`组合， 如： button, auto-complete
1. 导出的组件统一采用大驼峰命名,并以`Fb`开头， 如： FbButton
1. 全局公共配置统一放在外部 config-provider
1. 单个组件文件夹内部包含如下基础文件

```jsx | pure
  __test__           //测试文件
  component          //组件依赖的文件
  demo               //使用案例
  style              //样式，内部统一使用less,css
  index.tsx          //组件入口文件
  index.zh-CN.md     //使用的文档
  ...                //其他组件专属的文件， 如果过多请创建文件夹存储
```

## 开发步骤

1. 克隆分支项目，安装 npm 依赖，运行项目
2. 找到/src 目录， （也可复制 example 文件开始组件编写）
3. 编写组件
4. 在组件库的入口文件 src/index.tsx 中导出
5. 书写使用 demo 案例
6. 书写使用 api 文档
7. 书写测试用例
8. 开发完成提交代码分支

> 介绍开发一个 Title 组件标准步骤

### 1. 获取项目 dev 分支，安装 npm 依赖

```jsx | pure
mkdir ngfed && cd ngfed
git init
git remote add origin  `仓库地址`
git checkout -b dev origin/dev
```

### 2. 进入/src 目录

- 组件库源码目录，每个组件平级排列，文件夹名称统一采用`小写`和`横线`
- `index.ts` 为所有组件的入口
- `_util`文件夹为工具函数目录

### 3. 编写组件代码（创建一个 Title 组件）案例

- 3.1 创建 `title` 目录
- 3.2 创建 `index.tsx` 入口文件（单组件文件入口） 书写组件逻辑代码。
- 3.3 `src/title/index.tsx` 是组件入口文件,只承担导入导出

```jsx | pure
import FcTitle from './title'; //导入组件真正书写逻辑代码的文件。
export default FcTitle; //导出的组件必须Fc开头，大驼峰命名
```

- 3.4 组件文件名称采用`fc-组件名称`形式如： `src/title/fc-title.tsx`

```jsx | pure
import * as React from 'react'
import './style/index.less';

interface TitleProps {
  title: string
}

const = ({ title }: TitleProps) =>  {
  return (
    <>
       <h1 className="fc-title">{title}</h1>
    </>
  )
}
export default Title
```

- 3.5 创建`style`目录存放样式文件， 创建`index.less`书写样式，并在组件中引入

```css | pure
.fc-title {
  font-size: 24;
}
```

### 4. 在`src/index.tsx`导出（所有组件的入口），如此方能在外部引用组件

```jsx | pure
export { default as Title } from './button';
```

### 5. 书写组件案例，在`title`组件目录中创建`demo`文件夹存放`base01.tsx`使用案例

```jsx | pure
import React from 'react';
import { Title } from 'ngfed-fc-components';

export default () => {
  return (
    <>
      <Title title="example1 title" />
    </>
  );
};
```

### 6. 书写使用文档， 在`title`的`index.zh-CN.md`书写 api 文档，链接使用案例

```html
<code src="./demo/base01.tsx" /> //链接base01.案例
```

### 7. 在**test**书创建`index.test.tsx`书写测试代码

```jsx | pure
import * as React from 'react';
import { render } from '@testing-library/react';
import Title from '../index';

test('Title test', () => {
  const wrapper = render(<Title />);
  const el = wrapper.queryByText('some title');
  expect(el).toBeTruthy();
});
```

### 8. 提交代码分支到远程仓库

```jsx | pure
git status
git add .
git commit -m '注释'
git pull origin dev
git push origin dev:dev
```

## 核心逻辑层

> 本段主要介绍如何写出一个标准规范的组件

```
1. 标准的导入导出
  1.1 组件入口文件统一导出Fc开头的组件名称，导入的文件名为小写 fc+组件名称，如fc-feedback.js
  1.2 组件中使用 export default 导出默认组件
  1.3 组件库使用 export { default as FcFeedback } from './feedback' 导出供外部，并放置在注释的模块区域。
2. 采用typescript语法，用接口约束参数和他的类型
  2.1 使用interface约束参数
  2.2 非基本类型的参数的类型定义，放在接口之前，可导入_util的type辅助生产想要的参数类型。
3. 优先采用 es6 函数式组件，采用hooks管理状态
  3.1 采用const定义函数组件。
  3.2 并用泛型约束接受的属性参数， 保障接口功能的实现。
4. 组件内部逻辑遵循统一的标准书写流程
  4.1 结构props参数
  4.2 获取全局配置 context 中组件统一的配置参数
  4.3 根据具体功能书写代码，绑定事件等操作，DOM事件需用泛型进行约束检查。
  4.4 样式文件统一书写在style目录中，并启用全局中统一配置的前缀。使用classNames库操控样式的变化。
  4.5 构建渲染节点，组合上面的属性，样式，事件等配置。返回渲染
5. 因为部分组件是有依存嵌套关系，并只能接收特定类型子组件。该类组件用interface约束组件类型对外名称。
6. 标准的组件样式书写
  6.1 样式统一写入每个组件的style文件
  6.2 组件中使用import './style' 导入加载的入口 index.ts文件
  6.3 index.ts 负责导入全局的less和当前组件的样式加载
  6.4 index.less 是该组件独立的样式
      * 负责加载主题，混合，和本地混合，
      * 定义项目前缀 + 组件前缀。作为样式选择其的前缀  如fc-btn, fc-fed ,fc是项目，btn和fed是组件前缀
  6.5 mixin是该组件的样式混合。主要用于生成组件样式
```

### feedback/index.ts 文件

```jsx | pure
import FcFeedback from './fc-feedback';
export default FcFeedback;
```

### src/index.ts 文件

```jsx | pure
// 实验模块
export { default as FcFeedback } from './feedback';
```

### feedback/fc-feedback.js 文件

```jsx | pure
import React, { useState } from 'react';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import { Omit, tuple } from '../_util/type';
import devWarning from '../_util/devWarning';
import { ConfigContext } from '../config-provider';
import SizeContext, { SizeType } from '../config-provider/SizeContext';
import TouchFeedback from 'rmc-feedback';

import './style/index.less';

// 5. 因为部分组件是有依存嵌套关系，并只能接收特定类型子组件。该类组件用interface约束组件类型对外名称。
// 5.1 约束组件类型
interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    FeedBackProps & React.RefAttributes<HTMLElement>
  > {
  __NGFED_FEEDBACK: boolean;
}

// 2. 2.1 用type定义值的类型
const FeedBackColors = tuple('red', 'green', 'blue', 'black');
export type FeedBackColor = typeof FeedBackColors[number];

const FeedBackShapes = tuple('circle', 'round');
export type FeedBackShape = typeof FeedBackShapes[number];


// 2. 采用typescript语法，用接口约束参数和他的类型
// 2. 2.1 interface约束参数
export interface FeedBackProps {
  prefixCls?: string;
  color?: FeedBackColor;
  shape?: FeedBackShape;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}



// 3. 优先采用 es6 函数式组件，采用hooks管理状态
//   3.1 采用const定义函数组件。
//   3.2 并用泛型约束接受的属性参数， 保障接口功能的实现。
const InternalFeedback: React.ForwardRefRenderFunction<
  unknown,
  FeedBackProps
> = (props, ref) => {

  // 4. 组件内部逻辑标准书写流程
  // 4.1 解构props的值
  const {
    prefixCls: customizePrefixCls,
    color,
    shape = 'round',
    className,
    ...rest
  } = props;

  // 4.2 使用hooks获取context全局配置
  const { getPrefixCls } = React.useContext(ConfigContext);
  const size = React.useContext(SizeContext);

  // 4.3 根据组件功能书写逻辑，绑定事件。
  // 获取ref
  const feedBackRef = (ref as any) || React.createRef<HTMLElement>();

  // 事件
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    const { onClick } = props;
    (onClick as React.MouseEventHandler<
      HTMLButtonElement | HTMLAnchorElement
    >)?.(e);
  };

  // 4.4 标准的样式定义
  const prefixCls = getPrefixCls('fed', customizePrefixCls);

  // 使用classNames管理样式变化
  const activeStyle = { color: color };
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${color}`]: color,
      [`${prefixCls}-${shape}`]: shape,
    },
    className,
  );

  // 4.5 构建渲染节点，组合上面的属性，样式，事件等配置。返回渲染
  const feedback = (
    <TouchFeedback
      {...props}
      activeClassName={classes}
      activeStyle={activeStyle}
    >
      <span ref={feedBackRef} style={{ padding: '20px' }} onClick={handleClick}>
        {' '}
        {props.children}{' '}
      </span>
    </TouchFeedback>
  );
  return feedback;
};



const Feedback = React.forwardRef<unknown, FeedBackProps>(
  InternalFeedback,
) as CompoundedComponent;

// 5.2 组件名称和类型
Feedback.displayName = 'Feedback';
Feedback.__NGFED_FEEDBACK = true;

// 1. 标准的导出方式
export default Feedback;
```

### feedback/style/index.ts 文件

```jsx | pure
import '../../style/index.less';
import './index.less';
```

### feedback/style/index.less 文件

```less
// 导入主题和混合
@import '../../style/themes/index';
@import '../../style/mixins/index';
@import './mixin';

// 样式名称的前缀： 项目前缀+组件前缀
@fed-prefix-cls: ~'@{ant-prefix}-fed';

// Feedback styles
// -----------------------------
.@{fed-prefix-cls} {
  // 使用混合生成样式
  .fed();
  .fed-common();

  // 其他个性化的组件样式
  &-black {
    .fed-black();
  }

  &-red {
    .fed-red();
  }

  &-green {
    .fed-green();
  }

  &-blue {
    .fed-blue();
  }

  &-circle {
    .fed-circle();
  }

  &-round {
    .fed-round();
  }
}
```

### feedback/style/mixin.less 文件

```less
// 基本样式
.fed() {
  position: relative;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  &,
  &:active,
  &:focus {
    outline: 0;
  }
  &:not([disabled]):hover {
    text-decoration: none;
  }
  &:not([disabled]):active {
    outline: 0;
    box-shadow: none;
  }
  &[disabled] {
    cursor: not-allowed;
    > * {
      pointer-events: none;
    }
  }
}

// 组件共有样式
.fed-common() {
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    top: 80%;
  }
  &:before {
    animation: wave-animate 0.5s infinite ease-out;
  }

  &:after {
    opacity: 0;
    animation: wave-animate 0.5s 0.2s infinite ease-out;
  }
}

// 特有样式1
.fed-red() {
}

// 特有样式2
.fed-green() {
}
```
