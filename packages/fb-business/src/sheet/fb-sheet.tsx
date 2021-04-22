import React, { useEffect, useContext, useState, useRef } from 'react';
import { RightOutlined } from '@ant-design/icons';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import withScript from './withScript';
import LuckyExcel from 'luckyexcel';
import classNames from 'classnames';
import './style/index';
import { ConfigProvider, Button, Select, Space, Input, Radio } from 'antd';
// import * as XLSX from './components/xlsx/xlsx.min.js'

const { Option } = Select;

interface File {
  name: string;
  src: string;
}

type SheetSize = 'mini' | 'default' | 'full';

export type FbSheetProps = {
  containerStyle?: React.CSSProperties;
  scriptLoaded?: boolean;
  options: object;
  size?: SheetSize;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  templateFiles?: File[];
  onSave?: (sheets: any, luckySheet: any) => void;
  onChangeSize?: (size: SheetSize) => void;
  onTemplateChange?: (value: string, exportJson: object, luckySheet: any) => void;
  onCollapse?: (collapsed: boolean) => void;
} & React.HtmlHTMLAttributes<HTMLElement>;

type FbSheetType = {
  isFbSheet: boolean;
};

const FbSheet: FbSheetType = (props: FbSheetProps) => {
  const {
    containerStyle,
    className,
    scriptLoaded,
    options,
    templateFiles = [],
    size: controlSize = 'full',
    collapsible = true,
    collapsed: controlCollapsed,
    defaultCollapsed = false,
    onCollapse,
    onSave,
    onChangeSize,
    onTemplateChange,
  } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);

  const [sheetSize, setSheetSize] = useState(controlSize);
  const [currenFile, setCurrentFile] = useState();

  const [collapsed, setCollapsed] = useMergedState<boolean>(defaultCollapsed, {
    value: controlCollapsed,
    onChange: onCollapse,
  });

  const hanlderClickSize = (e) => {
    setSheetSize((size) => e.target.value);
    const opts = luckysheet.toJson();
    luckysheet.create(opts);
  };

  const selectRef = React.createRef<any>();
  //@ts-ignore
  const luckysheet = window.luckysheet;
  useEffect(() => {
    // console.log(scriptLoaded)
    //console.log('componentDidMount')
    const opts = {
      container: 'luckysheet',
      title: ' Demo',
      showinfobar: false,
      ...options,
    };
    scriptLoaded ? luckysheet.create(opts) : '';
  }, []);

  // 事件
  const handleClickSave = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    // console.log('clickSaveHandler')
    let allSheets = luckysheet.getAllSheets();
    const { onSave } = props;
    onSave?.(allSheets, luckysheet);
  };

  const handleClickImport = (evt) => {
    // console.log('clickImportHandler')
    var files = evt.target.files;
    if (files == null || files.length == 0) {
      alert('No files wait for import');
      return;
    }

    let name = files[0].name;
    let suffixArr = name.split('.'),
      suffix = suffixArr[suffixArr.length - 1];
    if (suffix != 'xlsx') {
      alert('Currently only supports the import of xlsx files');
      return;
    }

    LuckyExcel.transformExcelToLucky(files[0], (exportJson, luckysheetfile) => {
      if (exportJson.sheets == null || exportJson.sheets.length == 0) {
        alert(
          'Failed to read the content of the excel file, currently does not support xls files!',
        );
        return;
      }
      luckysheet.destroy();
      luckysheet.create({
        container: 'luckysheet',
        lang: 'zh',
        showinfobar: false,
        data: exportJson.sheets,
        title: exportJson.info.name,
        userInfo: exportJson.info.name.creator,
      });
    });
  };

  const handleChangeSelect = (option) => {
    var value = option.value;
    var name = option.label;
    if (value == '') {
      return;
    }
    LuckyExcel.transformExcelToLuckyByUrl(value, name, (exportJson, luckysheetfile) => {
      if (exportJson.sheets == null || exportJson.sheets.length == 0) {
        alert(
          'Failed to read the content of the excel file, currently does not support xls files!',
        );
        return;
      }
      luckysheet.destroy();
      luckysheet.create({
        container: 'luckysheet',
        lang: 'zh',
        showinfobar: false,
        data: exportJson.sheets,
        title: exportJson.info.name,
        userInfo: exportJson.info.name.creator,
      });
      setCurrentFile(value);
      // self.props.onTemplateChange(value, exportJson, self.luckysheet)
    });
  };

  // const handleClickDownload = () => {
  //     var data = luckysheet.getAllSheets()[0].data;
  //     var out = XLSX.utils.book_new(),
  //         aoa = [[]];
  //     data.forEach(function (rows, index) {
  //         console.log(rows, index)
  //         aoa[index] = [];
  //         for (var column = 0; column < rows.length - 1; column++) {
  //             // @ts-ignore
  //             aoa[index][column] = rows[column] && rows[column].v ? rows[column].v : '';
  //         }
  //     });
  //     console.log(aoa)
  //     var ws = XLSX.utils.aoa_to_sheet(aoa);
  //     XLSX.utils.book_append_sheet(out, ws, 'sheet1');
  //     XLSX.writeFile(out, 'sheet1.xlsx', {});
  // }

  const handleClickDownload2 = () => {
    if (!currenFile) {
      alert('Please select a demo file');
      return;
    }
    var elemIF = document.getElementById('Lucky-download-frame');
    if (elemIF == null) {
      elemIF = document.createElement('iframe');
      elemIF.style.display = 'none';
      elemIF.id = 'Lucky-download-frame';
      document.body.appendChild(elemIF);
    }
    // @ts-ignore
    elemIF.src = currenFile;
  };

  const allTemplateFile = [
    {
      name: 'Money Manager.xlsx',
      src: 'https://minio.cnbabylon.com/public/luckysheet/money-manager-2.xlsx',
    },
    ...templateFiles,
  ];

  const sheetStyles = {};

  const containerStyles = {};

  const prefixCls = getPrefixCls('fb-sheet');

  const containerCls = classNames(`${prefixCls}`, className, {
    [`${prefixCls}-container`]: true,
    [`${prefixCls}-size-${sheetSize}`]: sheetSize,
  });

  const isMini = 'mini';
  const sheetCls = classNames({
    [`${prefixCls}-table`]: true,
    [`${prefixCls}-table-mini`]: 'mini',
  });

  // const inputRef0 = React.useRef<HTMLInputElement>(null)
  // const inputRef1 = React.createRef<HTMLInputElement>()
  // const inputRef2 = React.createRef<Input>()

  // 非受控情况下展示
  const collapsibleButton = collapsible && controlCollapsed === undefined && (
    <RightOutlined
      rotate={!collapsed ? 90 : undefined}
      className={`${prefixCls}-collapsible-icon`}
    />
  );
  const topBar = (
    <div className={`${prefixCls}-action`}>
      <div
        className="icon-collapse"
        onClick={() => {
          if (collapsibleButton) setCollapsed(!collapsed);
        }}
      >
        {collapsibleButton}
      </div>
      {collapsible && !collapsed ? (
        <Space className="bd" style={{ display: collapsed ? 'none' : 'flex' }}>
          <Input
            style={{ width: 200 }}
            placeholder="导入"
            onChange={handleClickImport}
            type="file"
            size="small"
          />
          <Select
            ref={selectRef}
            labelInValue
            style={{ width: 200 }}
            placeholder="选择模版"
            onChange={handleChangeSelect}
          >
            {allTemplateFile &&
              allTemplateFile.length > 0 &&
              allTemplateFile.map((template, index) => {
                return (
                  <Option key={index} value={template.src}>
                    {template.name}
                  </Option>
                );
              })}
          </Select>

          <Button onClick={handleClickSave}> 保存 </Button>
          {/* <Button onClick={handleClickDownload}> 下载1 </Button> */}
          <Button onClick={handleClickDownload2}> 下载2 </Button>
          <Radio.Group
            defaultValue="full"
            onChange={hanlderClickSize}
            optionType="button"
            buttonStyle="solid"
          >
            <Radio.Button value="default">窄屏</Radio.Button>
            <Radio.Button value="full">全屏</Radio.Button>
          </Radio.Group>
        </Space>
      ) : null}
    </div>
  );
  return (
    <div style={containerStyles} className={containerCls}>
      {topBar}

      {<div id="luckysheet" className={sheetCls} style={sheetStyles}></div>}
    </div>
  );
};

FbSheet.isFbSheet = true;

export default withScript(FbSheet);
