import React, {useState} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { user_rows } from '../utils/data';
import { MdOutlineDeleteForever, MdOutlineEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [data, setData] = useState(user_rows)

    const removeUser = (id) =>{
        setData(data.filter((user) => user.id !== id))
    }

    const user_columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { 
            field: 'user', 
            headerName: 'User', 
            width: 200,
            renderCell: (params) => {
                return(
                    <div className='flex items-center'>
                        <img className='w-[32px] h-[32px] object-cover rounded-full mr-[10px]' src={params.row.avatar} alt="profile" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transactions',
          headerName: 'Transactions',
          description: 'A total of all the transactions per user',
          width: 200
        },
        {
          field: 'actions',
          headerName: 'Actions',
          description: 'Edit user details or delete a user',
          width: 150,
          renderCell: (params) =>{
              return (
                  <div className='flex items-center'>
                      <Link to={'/user/' + params.row.id}>
                        <MdOutlineEdit className='w-8 h-8 text-green-600 cursor-pointer mr-5' />
                      </Link>
                      <MdOutlineDeleteForever 
                        className='w-8 h-8 text-red-600 cursor-pointer'
                        onClick={() =>removeUser(params.row.id)}
                        />
                  </div>
              )
          }
        },
    ];


    return (
        <div className='flex m-2'>
            <div className='h-[600px] w-full'>
            <DataGrid 
                rows={data}
                columns={user_columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
            </div>
        </div>
    )
}

export default UserList
