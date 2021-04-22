---
title: FbSheet
order: 1
nav:
  order: 2
  title: 业务组件库
  path: /fb
group:
  title: 数据录入
  path: /sheet
---


## FbSheet

## 何时使用

- 用于创建一个网页表格录入或收集信息。
- 模拟网络excel的功能


> FbSheet基于Luckysheet封装，增加了导入上传，模版选择，缩放等功能 [相关链接](https://mengshukeji.github.io/LuckysheetDocs/zh/guide/#%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%BB%8D)

## 代码演示

### 工作簿options 

<code src="./demo/base01.tsx" />


> 所有参数都有默认值，如果需要更详细的工作薄配置，参考下方
```shell
# 以下为所有支持的设置参数

# 容器ID container
# 工作簿名称 title
# 语言 lang
# 唯一key gridKey
# 加载整个工作簿 loadUrl
# 加载其它页celldata loadSheetUrl
# 允许更新 allowUpdate
# 更新地址 updateUrl
# 缩略图更新地址 updateImageUrl
# 工作表配置 data
# 插件 plugins
# 列数 column
# 行数 row
# 亿万格式 autoFormatw
# 精度 accuracy
# 允许复制 allowCopy
# 工具栏 showtoolbar
# 自定义工具栏showtoolbarConfig
# 信息栏 showinfobar
# 底部sheet页 showsheetbar
# 自定义底部sheet页 showsheetbarConfig
# 底部计数栏 showstatisticBar
# 自定义计数栏 showstatisticBarConfig
# 允许添加行 enableAddRow
# 允许回到顶部 enableAddBackTop
# 用户信息 userInfo
# 用户信息菜单 userMenuItem
# 返回按钮链接 myFolderUrl
# 比例 devicePixelRatio
# 功能按钮 functionButton
# 自动缩进界面 showConfigWindowResize
# 刷新公式 forceCalculation
# 自定义单元格右键菜单 cellRightClickConfig
# 自定义sheet页右击菜单 sheetRightClickConfig
# 行标题区域的宽度 rowHeaderWidth
# 列标题区域的高度 columnHeaderHeight
# 是否显示公式栏 sheetFormulaBar
# 初始化默认字体大小 defaultFontSize
# 是否限制工作表名长度 limitSheetNameLength
# 默认允许工作表名的最大长度 defaultSheetNameMaxLength
# 分页器 pager
```

### 工作表options.data 
> options.data 参数: 是一个工作表数组 [{sheet1},{sheet2},{sheet2}], 可独立配置每个表格的样式，数据等内容，完整配置如下。

<code src="./demo/base02.tsx" />

```json | pure
// 完整配置如下
[
    {
        "name": "Cell", //工作表名称
        "color": "", //工作表颜色
        "index": 0, //工作表索引
        "status": 1, //激活状态
        "order": 0, //工作表的下标
        "hide": 0,//是否隐藏
        "row": 36, //行数
        "column": 18, //列数
        "defaultRowHeight": 19, //自定义行高
        "defaultColWidth": 73, //自定义列宽
        "celldata": [], //初始化使用的单元格数据
        "config": {
            "merge":{}, //合并单元格
            "rowlen":{}, //表格行高
            "columnlen":{}, //表格列宽
            "rowhidden":{}, //隐藏行
            "colhidden":{}, //隐藏列
            "borderInfo":{}, //边框
            "authority":{}, //工作表保护
            
        },
        "scrollLeft": 0, //左右滚动条位置
        "scrollTop": 315, //上下滚动条位置
        "luckysheet_select_save": [], //选中的区域
        "calcChain": [],//公式链
        "isPivotTable":false,//是否数据透视表
        "pivotTable":{},//数据透视表设置
        "filter_select": {},//筛选范围
        "filter": null,//筛选配置
        "luckysheet_alternateformat_save": [], //交替颜色
        "luckysheet_alternateformat_save_modelCustom": [], //自定义交替颜色	
        "luckysheet_conditionformat_save": {},//条件格式
        "frozen": {}, //冻结行列配置
        "chart": [], //图表配置
        "zoomRatio":1, // 缩放比例
        "image":[], //图片
        "showGridLines": 1, //是否显示网格线
        "dataVerification":{} //数据验证配置
    },
    {
        "name": "Sheet2",
    },
    {
        "name": "Sheet3",
    }
]
 
```



### 是否折叠顶部工具栏

> 设置 defaultCollapsed: true 可展开或折叠顶部的工具栏,该工具栏含有文件导入上传, 数据保存，模版获取等功能

<code src="./demo/base03.tsx" />


### 文件导入和模版使用

> 设置 templateFiles: [{ src: string, name: string }] 可为工作表提供编辑的模版

<code src="./demo/base04.tsx" />

### 表格数据保存 onSave 

<code src="./demo/base05.tsx" />

### 钩子函数 hooks 

<code src="./demo/base06.tsx" />



## API
FbSheet的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| options | 工作薄配置 | `object` |  |  |
| defaultCollapsed | 是否折叠顶部工具栏 |  `boolean` | `false` |  |
| templateFiles | 模版文件列表 | `array` | - |  |
| onSave | 模版文件列表 |  `(data: options, sheet: luckysheet ) => void`  | - |  |


options 配置说明
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| container | DOM容器id | `string` |  |  |
| title | 设定表格名称 |  `string` | `Demo` |  |
| column | 列数 | `number` | - |  |
| row | 行数 | `number` | - |  |
| data | 工作表配置 | `array` | - |  |
| data | 工作表配置 | `array` | - |  |
| gridKey | 表格唯一主键， 同`loadUrl`和`loadSheetUrl`配置使用加载表格数据 | `string` | - |  |
| loadUrl | 加载所有工作表的配置 | `string` | - |  |
| loadSheetUrl | 异步加载其它单元格数据 | `string` | - |  |

更多其他配置参考 [链接地址](https://mengshukeji.github.io/LuckysheetDocs/zh/guide/config.html#%E5%9F%BA%E7%A1%80%E7%BB%93%E6%9E%84)