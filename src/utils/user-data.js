import {EditOutlined,DeleteOutlined,EyeOutlined} from '@ant-design/icons'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

export const userdata = [
    {
      key: '1',
      name: 'Priyanka Gohel',
      email: 'priyanka@gmail.com',
      role:'Merchant',
      access: 'Edit only',
      status:<Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
      />,
      action:<EditOutlined/>,
    },
    {
      key: '2',
      name: 'Shubhangi Hingu',
      email: 'shubhangi@gmail.com',
      role:'Merchant',
      access: 'Edit only',
      status:<Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
      />,
      action:<DeleteOutlined/>,
    },
    {
      key: '3',
      name: 'Gopi patel',
      email: 'gopipatel@gmail.com',
      role:'Admin',
      access: 'Edit only',
      status:<Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
      />,
      action:<EyeOutlined/>,
    },
    {
      key: '4',
      name: 'Bhavisha savaliya',
      email: 'bhavisha@gmail.com',
      role:'Merchant',
      access: 'Edit only',
      status:<Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
      />,
      action:<EditOutlined/>,
    },
    {
      key: '5',
      name: 'Meera nakrani',
      email: 'mirali@gmail.com',
      role:'Merchant',
      access: 'Edit only',
      status:<Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
      />,
      action:<EditOutlined/>,
    },
    {
      key: '6',
      name: 'Meera nakrani',
      email: 'mirali@gmail.com',
      role:'Merchant',
      access: 'Edit only',
      status:<Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
      />,
      action:<EditOutlined/>,
    },
    {
      key: '7',
      name: 'Meera nakrani',
      email: 'mirali@gmail.com',
      role:'Merchant',
      access: 'Edit only',
      status:<Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
      />,
      action:<EditOutlined/>,
    },
    {
      key: '8',
      name: 'Meera nakrani',
      email: 'mirali@gmail.com',
      role:'Merchant',
      access: 'Edit only',
      status:<Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
      />,
      action:<EditOutlined/>,
    },
  ];