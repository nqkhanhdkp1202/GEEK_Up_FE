import { Button, Divider, List, Typography } from 'antd';
import React from 'react';
import { CheckCircleTwoTone, MinusSquareTwoTone } from '@ant-design/icons';
import useScrollTop from '../core/hooks/useScrollTop';

const TasksList = (props) => {
  const { data, loadingTodoList, loadingMarkDone, setLoadingMarkDone, handleMarkDone } = props;
  const list = document.getElementById('data-list');
  useScrollTop(list, [data]);

  data.sort((a, b) => a.completed - b.completed);

  const handleLoading = (index) => {
    setLoadingMarkDone((prevState) => {
      const newLoadings = [...prevState];
      newLoadings[index] = true;
      return newLoadings;
    });
  };

  const onClickMarkDone = (item, index) => {
    handleLoading(index);
    handleMarkDone(item, index);
  };

  return (
    <div>
      <Divider orientation="left" orientationMargin="0">
        Tasks
      </Divider>
      <List
        loading={loadingTodoList}
        bordered
        id="data-list"
        dataSource={data}
        renderItem={(item, index) =>
          item.completed ? (
            // Complete task components
            <List.Item>
              <CheckCircleTwoTone twoToneColor="#11D111" style={{ marginRight: '4px' }} />
              {item.title}
            </List.Item>
          ) : (
            // Incomplete task components
            <List.Item>
              <MinusSquareTwoTone twoToneColor="orange" style={{ marginRight: '4px' }} />
              {item.title}
              <Button
                size="small"
                id={index}
                loading={loadingMarkDone[index]}
                onClick={() => onClickMarkDone(item, index)}
                style={{ float: 'right' }}
              >
                Mark done
              </Button>
            </List.Item>
          )
        }
        style={{ overflowY: 'auto', height: '500px' }}
      ></List>
    </div>
  );
};

export default TasksList;
