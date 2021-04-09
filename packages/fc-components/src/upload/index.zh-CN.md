---
title: FcUpload
order: 3
nav:
  order: 1
  title: 基础组件库
  path: /fc
group:
  path: /4.数据录入
---

## FcUpload 

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 代码演示

### 基本使用

<code src="./demo/base01.tsx" />

### 用户头像

<code src="./demo/base02.tsx" />

### 完全控制的上传列表

<code src="./demo/base03.tsx" />

### 照片墙

<code src="./demo/base04.tsx" />

### 文件夹上传

<code src="./demo/base05.tsx" />

### 只上传 png 图片

<code src="./demo/base06.tsx" />

### 自定义预览

<!-- <code src="./demo/base07.tsx" /> -->

### 拖拽上传

<code src="./demo/base08.tsx" />

### 上传前转换文件

<code src="./demo/base09.tsx" />

### 手动上传

<!-- <code src="./demo/base10.tsx" /> -->

### 自定义交互图标

<code src="./demo/base11.tsx" />

### 上传前裁切图片

<!-- <code src="./demo/base12.tsx" /> -->

### 图片列表样式

<code src="./demo/base13.tsx" />

### 限制数量

<code src="./demo/base14.tsx" />

### 阿里云 OSS

<code src="./demo/base15.tsx" />

### 上传列表拖拽排序

<!-- <code src="./demo/base16.tsx" /> -->

### 自定义进度条样式

<code src="./demo/base17.tsx" />


## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| accept | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |  |
| action | 上传的地址 | string \| (file) => Promise&lt;string> | - |  |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）。**注意：IE9 不支持该方法** | (file, fileList) => boolean \| Promise&lt;File> | - |  |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | function | - |  |
| data | 上传所需额外参数或返回上传额外参数的方法 | object\|(file) => object \| Promise&lt;object> | - |  |
| defaultFileList | 默认已经上传的文件列表 | object\[] | - |  |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false |  |
| disabled | 是否禁用 | boolean | false |  |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | [UploadFile](#UploadFile)\[] | - |  |
| headers | 设置上传的请求头部，IE10 以上有效 | object | - |  |
| isImageUrl | 自定义缩略图是否使用 &lt;img /> 标签进行显示 | (file: UploadFile) => boolean | [(内部实现)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) |  |
| itemRender | 自定义上传列表项 | (originNode: ReactElement, file: UploadFile, fileList?: object\[]) => React.ReactNode | - | 4.7.0 |
| listType | 上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card` | string | `text` |  |
| method | 上传请求的 http method | string | `post` |  |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false |  |
| name | 发到后台的文件参数名 | string | `file` |  |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, removeIcon?: ReactNode \| (file: UploadFile) => ReactNode, downloadIcon?: ReactNode \| (file: UploadFile) => ReactNode } | true | function: 4.7.0 |
| onChange | 上传文件改变时的状态，详见 [onChange](#onChange) | function | - |  |
| onPreview | 点击文件链接或预览图标时的回调 | function(file) | - |  |
| onRemove   | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除               | function(file): boolean \| Promise | -   |  |

### UploadFile

继承自 File，附带额外属性用于渲染。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 文件名 | string | - |
| percent | 上传进度 | number | - |
| status | 上传状态，不同状态展示颜色也会有所不同 | `error` \| `success` \| `done` \| `uploading` \| `removed` | - |
| thumbUrl | 缩略图地址 | string | - |
| uid | 唯一标识符，不设置时会自动生成 | string | - |
| url | 下载地址 | string | - |




### 待开放
```tsx | pure
iconRender,openFileDialogOnClick,previewFile,progress,withCredentials,onDownload
```
<div style="display:none">
丢弃的属性：
| iconRender | 自定义显示 icon | (file: UploadFile, listType?: UploadListType) => ReactNode | - |  |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true |  |
| previewFile | 自定义文件预览逻辑 | (file: File \| Blob) => Promise&lt;dataURL: string> | - |  |
| progress | 自定义进度条样式 | [ProgressProps](/components/progress/#API)（仅支持 `type="line"`） | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| withCredentials | 上传请求时是否携带 cookie | boolean | false |  |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | function(file): void | (跳转新标签页) |  |
</div>