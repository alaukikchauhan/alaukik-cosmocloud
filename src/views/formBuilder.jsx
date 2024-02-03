import React from 'react';
import { Card, Space, Form, Button } from 'antd';
import FormField from '../components/formField';

export default function FormBuilder(props) {
    const [form] = Form.useForm();
    const [fields, upsertFields] = React.useState([{ key : 'Hello', type: ''}]);

    const onFinish = (values) => {
        // Handle form submission
        console.log('Form values:', values);  
        let obj = {};
        fields.forEach((item) => {
            obj[item.key] = item.type;
        });
        props?.onSubmit(obj); 
    };

    return (
        <Space direction="vertical" size={16}>
            <Card
                title="Dynamic Form"
                style={{
                    width: 600,
                    margin: 24,
                }}
            >
                <Form form={form} onFinish={onFinish} >
                    {fields.map((e, i) => {
                      return  <Form.Item key={i}><FormField value={e.key} type={e.type} onChangeName={(n) => {                     
                          const updatedData = fields;
                          updatedData[i].key = n;
                          upsertFields(updatedData)
                      }} 
                      onChangeType={(t) => {                     
                        const updatedData = fields;
                        updatedData[i].type = t;
                        upsertFields(updatedData)
                    }} 
                    /></Form.Item>
                        
                    })}
                    <Form.Item>
                        <Button type="primary" htmlType="button" style={{marginTop: '4%'}} onClick={()=> {upsertFields([...fields, {key: '', value: ''}])}}>
                            Add
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{marginTop: '10%'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Space>
    )
}
