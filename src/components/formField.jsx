import React from 'react';
import { Input, Row, Col, Button, Select } from 'antd';

const FormField = (props) => {
    const options = [{label: 'String', value: 'String'},{label: 'Number', value: 'Number'},{label: 'Boolean', value:'Boolean'}, {label:'Nested', value:'Nested'}];
    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');

    React.useEffect(()=> {
     setName(props?.value); setType(props?.type);
    },[props?.value, props?.type]);

  return (
    <Row>
        <Col span={10}><Input value={name} placeholder="Enter Key" onChange={(e)=> {props?.onChangeName(e.target.value); setName(e.target.value)}} style={{marginRight: '10px'}}/></Col>
        <Col span={10}><Select value={type} placeholder="Select Type" options={options} onChange={(e)=> {props?.onChangeType(e); setType(e)}} style={{width: '100%'}}/></Col>
        <Col span={4}><Button type="primary" danger style={{marginLeft: '10%'}}>Delete</Button></Col>
    </Row>
  )
}

export default FormField;
