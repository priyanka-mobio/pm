
import {EditOutlined,DeleteOutlined,EyeOutlined} from '@ant-design/icons'
import {Link } from "react-router-dom"

export const usercolumns = [
    {
      title: 'User name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      sorter: (a, b) => a.role.length - b.role.length,
    },
    {
      title: 'Access Type',
      dataIndex: 'access',
      sorter: (a, b) => a.access.length - b.access.length,
    },
    {
        title: 'Active/deactivated',
        dataIndex: 'status',
      },
   
      {
        title: 'Action',
        dataIndex: 'action',
        render: () =>
      <>
      <Link style={{textDecoration:'none'}} to='/user'>
       <EyeOutlined style={{margin:'5px'}}/></Link>
       
       <Link style={{textDecoration:'none'}} to='/user'>
        <EditOutlined style={{margin:'5px'}}/>
        </Link>
       <a><DeleteOutlined style={{margin:'5px'}} /></a>
      </>
      },

  ];

