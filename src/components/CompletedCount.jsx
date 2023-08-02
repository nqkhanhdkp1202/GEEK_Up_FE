import { Space, Typography } from 'antd';
import React from 'react';
const { Text } = Typography;

const CompletedCount = (props) => {
  const { data } = props;

  const completedQuantity = data.reduce((sum, record) => {
    if (record.completed) {
      sum++;
    }
    return sum;
  }, 0);

  return (
    <div style={{ marginTop: '12px', fontWeight: 'bold' }}>
      Done {completedQuantity}/{data.length} tasks
    </div>
  );
};

export default CompletedCount;
