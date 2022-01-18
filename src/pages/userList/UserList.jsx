import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../FakeData';
import {Link} from "react-router-dom"


  
 

const UserList = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt="" />
                    {params.row.userName}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 180,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 180,
        },
        {
        field: 'action',
        headerName: 'Action',
        width: 180,
        renderCell: (params) => {
            return (
                <>
                    <Link to={`/user/${params.row.id}`}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon onClick={() => handleDelete(params.row.id)} className='userListDelete'/>
                </>
            )
        }
        },
      ];
    return (
        <div className='userList'>
            <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
        </div>
    )
}

export default UserList
