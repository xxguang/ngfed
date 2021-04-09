import React from 'react';
import { Form } from 'antd';
import omit from 'rc-util/lib/omit';

const { Item, List, ErrorList, Provider, useForm } = Form;

function FcForm(props) {
  props = omit(props, ['']);
  return <Form {...props} />;
}

FcForm.Item = Item;
FcForm.List = List;
FcForm.ErrorList = ErrorList;
FcForm.Provider = Provider;
FcForm.useForm = useForm;
export default FcForm;
