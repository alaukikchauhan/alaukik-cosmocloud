import React from 'react';
import { Card, Space } from 'antd';

export default function JsonViewer(props) {
    return (
        <Space direction="vertical" size={16}>
            <Card
                title="JSON Viewer"
                style={{
                    width: 600,
                    margin: 24,
                }}
            >
                {JSON.stringify(props?.json)}
            </Card>
        </Space>
    )
}
