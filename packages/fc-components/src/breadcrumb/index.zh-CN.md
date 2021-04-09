---
title: FcBreadcrumb
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /3.导航
---

## FcBreadcrumb 

面包屑导航

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。


## 代码演示

### 分隔符

<code src="./demo/base01.tsx" />

### 带有图标的

<code src="./demo/base02.tsx" />

### 自定义分隔符 

<code src="./demo/base03.tsx" />

### 带下拉菜单的面包屑 

<code src="./demo/base04.tsx" />


## API

### FcBreadcrumb

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | - |  |
| params | 路由的参数 | object | - |  |
| routes | router 的路由栈信息 | [routes\[\]](#routes) | - |  |
| separator | 分隔符自定义 | ReactNode | `/` |  |

### FcBreadcrumb.Item

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 自定义类名 | string | - |  |
| dropdownProps | 弹出下拉菜单的自定义配置 | [Dropdown](/components/dropdown) | - |  |
| href | 链接的目的地 | string | - |  |
| overlay | 下拉菜单的内容 | [Menu](/components/menu) \| () => Menu | - |  |
| onClick | 单击事件 | (e:MouseEvent) => void | - |  |

### FcBreadcrumb.Separator

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| children | 要显示的分隔符 | ReactNode | `/` |  |

> 注意：在使用 `FcBreadcrumb.Separator` 时，其父组件的分隔符必须设置为 `separator=""`，否则会出现父组件默认的分隔符。
