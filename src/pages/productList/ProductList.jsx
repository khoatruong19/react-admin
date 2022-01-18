import React, { useState } from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../FakeData';
import {Link} from "react-router-dom"
const ProductList = () => {
    const [data, setData] = useState(productRows)
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
                <div className='productListItem'>
                    <img className='productListImg' src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 180,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 180,
        },
        {
        field: 'action',
        headerName: 'Action',
        width: 180,
        renderCell: (params) => {
            return (
                <>
                    <Link to={`/product/${params.row.id}`}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon onClick={() => handleDelete(params.row.id)} className='userListDelete'/>
                </>
            )
        }
        },
      ];
    return (
        <div className='productList'>
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

export default ProductList
