import { Divider, Select } from 'antd';
import React from 'react';

const UserSelection = (props) => {
  const { data, userSelected, loadingUser } = props;
  const handleChangeUser = (value) => {
    userSelected(value);
  };

  return (
    <div>
      <Divider orientation="left" orientationMargin="0">
        User
      </Divider>
      <Select
        style={{ width: '200px' }}
        showSearch
        loading={loadingUser}
        placeholder="Select user"
        optionFilterProp="children"
        onChange={(value) => handleChangeUser(value)}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={data && data.map((element) => ({ value: element.id, label: `${element.name}` }))}
      />
    </div>
  );
};

export default UserSelection;
