import React, { useEffect, useMemo, useState } from 'react';
import UserSelection from './components/UserSelection';
import TasksList from './components/TasksList';
import { todoServices } from './services/todoServices';
import CompletedCount from './components/CompletedCount';
import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import useAxiosFetch from './core/hooks/useAxiosFetch';

const App = () => {
  const [userSelected, setUserSelected] = useState(null);
  const [markDoneIdList, setMarkDoneIdList] = useState([]);
  const [loadingMarkDone, setLoadingMarkDone] = useState([]);

  const {
    data: userList,
    error: userError,
    loading: loadingUser,
  } = useAxiosFetch(() => todoServices.getUserList({}), []);
  const {
    data: todoList,
    error: todoError,
    loading: loadingTodo,
    setData: setToDoList,
  } = useAxiosFetch(() => todoServices.getToDoListByUserId(userSelected), [userSelected]);

  const handleUserSelect = (userId) => {
    setUserSelected(userId);
  };

  const handleMarkDone = async (item, index) => {
    try {
      const params = {};
      const response = await todoServices.markDoneToDo(item.id, { completed: true }, params);
      if (response.data) {
        todoList.forEach((todo, index) => {
          if (todo.id === item.id) {
            todoList[index] = response.data;
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoadingMarkDone((prevState) => {
      const newLoadings = [...prevState];
      delete newLoadings[index];
      return newLoadings;
    });
    setMarkDoneIdList((prevState) => [...prevState, item.id]);
  };

  return (
    <Layout className="layout" style={{ backgroundColor: 'white' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          maxHeight: '100vh',
          backgroundColor: 'white',
          paddingBlock: '0',
          paddingInline: '0',
        }}
      >
        <Menu
          style={{ backgroundColor: 'white' }}
          mode="horizontal"
          items={[{ key: '1', label: 'Todo' }]}
        />
      </Header>
      <Content
        style={{
          paddingBlock: '24px',
          paddingInline: '40px',
        }}
      >
        <div className="site-layout-content">
          <UserSelection
            data={userList}
            loadingUser={loadingUser}
            userSelected={handleUserSelect}
          />
          <TasksList
            data={todoList}
            handleMarkDone={handleMarkDone}
            loadingTodoList={loadingTodo}
            loadingMarkDone={loadingMarkDone}
            setLoadingMarkDone={setLoadingMarkDone}
          />
          <CompletedCount data={todoList} />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
