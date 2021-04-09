---
title: FcTypography
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /1.通用
---

## FcTypography 

文本的基本格式。`FcTypography`主要用于页面排版,包含 `Title`，`Text`, `Link`, `Paragraph`


## 何时使用

- 当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。
- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。


## 代码演示

### 标题 FcTypography.Title

<code src="./demo/base01.tsx" />

### 文本 FcTypography.Text

<code src="./demo/base02.tsx" />

### 链接 FcTypography.Link

<code src="./demo/base03.tsx" />

### 段落 FcTypography.Paragraph

<code src="./demo/base04.tsx" />

## API

### Typography.Text

| 参数      | 说明           | 类型                                              | 默认值 | 版本           |
| --------- | -------------- | ------------------------------------------------- | ------ | -------------- |
| code      | 添加代码样式   | boolean                                           | false  |                |
| delete    | 添加删除线样式 | boolean                                           | false  |                |
| disabled  | 禁用文本       | boolean                                           | false  |                |
| ellipsis  | 自动溢出省略   | boolean                                           | false  |                |
| keyboard  | 添加键盘样式   | boolean                                           | false  | 4.3.0          |
| mark      | 添加标记样式   | boolean                                           | false  |                |
| strong    | 是否加粗       | boolean                                           | false  |                |
| type      | 文本类型       | `secondary` \| `success` \| `warning` \| `danger` | -      | success: 4.6.0 |
| underline | 添加下划线样式 | boolean                                           | false  |                |

### Typography.Title

| 参数      | 说明                                                         | 类型                                              | 默认值 | 版本                  |
| --------- | ------------------------------------------------------------ | ------------------------------------------------- | ------ | --------------------- |
| code      | 添加代码样式                                                 | boolean                                           | false  |                       |
| delete    | 添加删除线样式                                               | boolean                                           | false  |                       |
| disabled  | 禁用文本                                                     | boolean                                           | false  |                       |
| ellipsis  | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis)                  | false  | [ellipsis](#ellipsis) |
| level     | 重要程度，相当于 `h1`、`h2`、`h3`、`h4`、`h5`                | number: 1, 2, 3, 4, 5                             | 1      | 5: 4.6.0              |
| mark      | 添加标记样式                                                 | boolean                                           | false  |                       |
| type      | 文本类型                                                     | `secondary` \| `success` \| `warning` \| `danger` | -      | success: 4.6.0        |
| underline | 添加下划线样式                                               | boolean                                           | false  |                       |

### Typography.Paragraph

| 参数      | 说明                                                         | 类型                                              | 默认值 | 版本                  |
| --------- | ------------------------------------------------------------ | ------------------------------------------------- | ------ | --------------------- |
| code      | 添加代码样式                                                 | boolean                                           | false  |                       |
| delete    | 添加删除线样式                                               | boolean                                           | false  |                       |
| disabled  | 禁用文本                                                     | boolean                                           | false  |                       |
| ellipsis  | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis)                  | false  | [ellipsis](#ellipsis) |
| mark      | 添加标记样式                                                 | boolean                                           | false  |                       |
| strong    | 是否加粗                                                     | boolean                                           | false  |                       |
| type      | 文本类型                                                     | `secondary` \| `success` \| `warning` \| `danger` | -      | success: 4.6.0        |
| underline | 添加下划线样式                                               | boolean                                           | false  |                       |
