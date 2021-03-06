---
title: 开发规范
order: 2
nav:
  order: 3
  title: 指南
  path: /workflow
group:
  path: /工作流
---

# 开发规范目录

- 项目文件夹和文件
- 组件代码规范
- 样式规范
- API 使用文档规范
- Git 规范

## 项目文件夹和文件

1. `fb-business`是业务组件库根目录， src 目录保存所有组件
2. 组件文件和文件夹，统一采用`小写，横线`命名
3. 目录结构保持一致

## 组件代码规范

## 样式规范

## API 使用文档规范

> API 文档需要遵循下方的结构标准，具体划分 4 大模块

```js
1.组件介绍    // 组件的简要介绍
2.何时使用    // 使用场景
3.代码演示    // 案例演示，与demo文件夹的例子关联
4.API        // 组件的api介绍
```

### 书写注意事项

各模块标题书写规范：

```js | pure
1. 模块标题在Markdown文件中皆为 `2 级`标题 `##`
2. 必须遵循指定顺序: 组件介绍 ==> 何时使用 ==> 代码演示 ==>  API
```

各模块详细书写规范

```js
1.组件介绍    // 文字无特殊样式
2.何时使用    // 如果介绍文字较多，有类别区分，请使用列表样式展示
3.代码演示    // 代码演示包含多个使用案例
             /**
              * ============================== 一个案例 ===============================
              *     1. 案例关键字标题， 标题必须用 3 级标题 ###
              *     2. > 注解： 主要用于描述该案例，使用了那个属性和相关取值，可省略
              *     3. 案例代码链接 <code src="./demoe/base01.tsx" ></code>
              */
4.api文档     // 组件名称需用Fb开头，子组件依序往后排布
             // 未开放的API需在末尾列出
```

### 关联的 demo 案例规范

1. 头部必要的注释, title 是案例关键子标题，desc 详细的说明

```js
/**
 * title: 按钮形状
 * desc: 按钮有三种形状：circle圆形，round圆角，和方形(默认)
 */
```

2. 导入 react,后，可使得 vscode 识别 jsx 语法。
3. 样式统一与组件案例 demo 同名

## Git 规范

### 使用什么规范

`Conventional Commits(约定式提交规范)`，是目前使用最广泛的提交信息规范，其主要受 AngularJS 规范 的启发,下面是一个规范信息的结构：

```jsx | pure
<type>[optional scope]: <subject>
//空一行
[optional body]
//空一行
[optional footer(s)]
```

### 规范说明

`type` 提交的类别，必须是以下类型中的一个

```
feat：增加一个新功能
fix：修复bug
docs：只修改了文档
style：做了不影响代码含义的修改，空格、格式化、缺少分号等等
refactor：代码重构，既不是修复bug，也不是新功能的修改
perf：改进性能的代码
test：增加测试或更新已有的测试
chore：构建或辅助工具或依赖库的更新
```

`scope` 可选，表示影响的范围、功能、模块

`subject` 必填，简单说明，不超过 50 个字

`body` 选填，用于填写更详细的描述

`footer` 选填，用于填关联 issus,或 BREAK CHANGE

`BREAKING CHANGE`

必须是大写，表示引入了破坏性 API 变更，通常是一个大版本的改动，`BREAKING CHANGE`: 之后必须提供描述，下面一个包含破坏性变更的提交示例

### 如何提交代码

为了方便查阅 git 提交记录，本工程已经使用`commitizen` 来约束提交， 请使用`git cz` 替代 `git commit` 提交

```jsx pure
git cz

1. 首先选择提交的类型： type
2. 选择本次提交的的 作用域：scope
3. 是本次提交的简要描述 subject
4. 是本次提交的详细说明 body
5. 是本次更新是否不再向下兼容。 默认选 N
6. 是本次提交是否修复了bug。 没有选 N
```
