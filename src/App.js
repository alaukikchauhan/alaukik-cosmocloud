import React from 'react';
import './App.css';
import { Col, Row } from 'antd';
import JsonViewer from './views/jsonViewer';
import FormBuilder from './views/formBuilder';

function App() {
  const [data, setData] = React.useState({});
  return (
    <Row>
      <Col span={12}><FormBuilder onSubmit={(e)=> {setData(e)}}/></Col>
      <Col span={12}><JsonViewer json={data}/></Col>
    </Row>
  );
}

export default App;
