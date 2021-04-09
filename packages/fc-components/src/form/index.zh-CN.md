---
title: FcForm
order: 1
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /4.数据录入
---

## FcForm 

## 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。


## 代码演示

### 基本使用
<code src="./demo/base01.tsx"></code>

### 表单布局
<code src="./demo/base02.tsx"></code>

### 必须样式
<code src="./demo/base03.tsx"></code>

### 表单尺寸
<code src="./demo/base04.tsx"></code>

### 动态增减表单项
<code src="./demo/base05.tsx"></code>

### 自定义表单控件
> 自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：

> 1. 提供受控属性 value 或其它与 valuePropName 的值同名的属性。
> 2. 提供 onChange 事件或 trigger 的值同名的事件。

<code src="./demo/base06.tsx"></code>

### 自行处理表单数据
<code src="./demo/base07.tsx"></code>

### 自定义校验
<code src="./demo/base08.tsx"></code>

### 动态校验规则
<code src="./demo/base09.tsx"></code>



## API

### Form

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| colon | 配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | boolean | true |  |
| component | 设置 Form 渲染元素，为 `false` 则不创建 DOM 节点 | ComponentType \| false | form |  |
| fields | 通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看[示例](#components-form-demo-global-state) | [FieldData](#FieldData)\[] | - |  |
| form | 经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建 | [FormInstance](#FormInstance) | - |  |
| initialValues | 表单默认值，只有初始化以及重置时生效 | object | - |  |
| labelAlign | label 标签的文本对齐方式 | `left` \| `right` | `right` |  |
| labelCol | label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | [object](/components/grid/#Col) | - |  |
| layout | 表单布局 | `horizontal` \| `vertical` \| `inline` | `horizontal` |  |
| name | 表单名称，会作为表单字段 `id` 前缀使用 | string | - |  |
| preserve | 当字段被删除时保留字段值 | boolean | true | 4.4.0 |
| requiredMark | 必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置 | boolean \| `optional` | true | 4.6.0 |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段 | boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options) | false |  |
| size | 设置字段组件的尺寸（仅限 antd 组件） | `small` \| `middle` \| `large` | - |  |
| validateMessages | 验证提示模板，说明[见下](#validateMessages) | [ValidateMessages](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts) | - |  |
| validateTrigger | 统一设置字段校验规则 | string \| string\[] | `onChange` | 4.3.0 |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | [object](/components/grid/#Col) | - |  |
| onFieldsChange | 字段更新时触发回调事件 | function(changedFields, allFields) | - |  |
| onFinish | 提交表单且数据验证成功后回调事件 | function(values) | - |  |
| onFinishFailed | 提交表单且数据验证失败后回调事件 | function({ values, errorFields, outOfDate }) | - |  |
| onValuesChange | 字段值更新时触发回调事件 | function(changedValues, allValues) | - |  |



### Form.Item

表单字段组件，用于数据双向绑定、校验、布局等。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| colon | 配合 `label` 属性使用，表示是否显示 `label` 后面的冒号 | boolean | true |  |
| dependencies | 设置依赖字段，说明[见下](#dependencies) | [NamePath](#NamePath)\[] | - |  |
| extra | 额外的提示信息，和 `help` 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | ReactNode | - |  |
| getValueFromEvent | 设置如何将 event 的值转换成字段值 | (..args: any\[]) => any | - |  |
| getValueProps | 为子元素添加额外的属性 | (value: any) => any | - | 4.2.0 |
| hasFeedback | 配合 `validateStatus` 属性使用，展示校验状态图标，建议只配合 Input 组件使用 | boolean | false |  |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | ReactNode | - |  |
| hidden | 是否隐藏字段（依然会收集和校验字段） | boolean | false |  |
| htmlFor | 设置子元素 label `htmlFor` 属性 | string | - |  |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准 | string | - | 4.2.0 |
| label | `label` 标签的文本 | ReactNode | - |  |
| labelAlign | 标签文本对齐方式 | `left` \| `right` | `right` |  |
| labelCol | `label` 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}`。你可以通过 Form 的 `labelCol` 进行统一设置，，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | [object](/components/grid/#Col) | - |  |
| messageVariables | 默认验证字段的信息 | Record&lt;string, string> | - | 4.7.0 |
| name | 字段名，支持数组 | [NamePath](#NamePath) | - |  |
| normalize | 组件获取值后进行转换，再放入 Form 中。不支持异步 | (value, prevValue, prevValues) => any | - |  |
| noStyle | 为 `true` 时不带样式，作为纯字段控件使用 | boolean | false |  |
| preserve | 当字段被删除时保留字段值 | boolean | true | 4.4.0 |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | boolean | false |  |
| rules | 校验规则，设置字段的校验逻辑。点击[此处](#components-form-demo-basic)查看示例 | [Rule](#Rule)\[] | - |  |
| shouldUpdate | 自定义字段更新逻辑，说明[见下](#shouldUpdate) | boolean \| (prevValue, curValue) => boolean | false |  |
| tooltip | 配置提示信息 | ReactNode \| [TooltipProps & { icon: ReactNode }](/components/tooltip#API) | - | 4.7.0 |
| trigger | 设置收集字段值变更的时机。点击[此处](#components-form-demo-customized-form-controls)查看示例 | string | `onChange` |  |
| validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验。设置 `parallel` 时会并行校验 | boolean \| `parallel` | false | `parallel`: 4.5.0 |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating' | string | - |  |
| validateTrigger | 设置字段校验的时机 | string \| string\[] | `onChange` |  |
| valuePropName | 子节点的值的属性，如 Switch 的是 'checked'。该属性为 `getValueProps` 的封装，自定义 `getValueProps` 后会失效 | string | `value` |  |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 `labelCol`。你可以通过 Form 的 `wrapperCol` 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | [object](/components/grid/#Col) | - |  |



### Form.List

为字段提供数组化管理。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| children | 渲染函数 | (fields: Field\[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode | - |  |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准 | any\[] | - | 4.9.0 |
| name | 字段名，支持数组 | [NamePath](#NamePath) | - |  |
| rules | 校验规则，仅支持自定义规则。需要配合 [ErrorList](#Form.ErrorList) 一同使用。 | { validator, message }\[] | - | 4.7.0 |


### operation

Form.List 渲染表单相关操作函数。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| add | 新增表单项 | (defaultValue?: any, insertIndex?: number) => void | insertIndex: 4.6.0 |
| move | 移动表单项 | (from: number, to: number) => void | - |
| remove | 删除表单项 | (index: number \| number\[]) => void | number\[]: 4.5.0 |

### Form.ErrorList


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| errors | 错误列表 | ReactNode\[] | - |

### Form.Provider

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFormChange | 子表单字段更新时触发 | function(formName: string, info: { changedFields, forms }) | - |
| onFormFinish | 子表单提交时触发 | function(formName: string, info: { values, forms }) | - |

