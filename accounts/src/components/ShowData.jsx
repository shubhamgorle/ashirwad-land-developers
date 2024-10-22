import React,{} from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllData } from '../redux/newDataActions'
import { DataGrid } from '@mui/x-data-grid';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
// import EditIcon from "@mui/icons-material/Edit"

const ShowData = () => {
    const dispatch = useDispatch();
    const {AllData} = useSelector((state)=>state.getAllData);
    const columns = [
        { field: 'srno', headerName: 'Sr. No', minWidth: 30 , },
        { field: 'account', headerName: 'Account', minWidth: 50 , },
        { field: 'name', headerName: 'Name', minWidth: 120, cellClassName: (params)=>{
            return (params.row.status === "Delivered" ? "greenColor" : "redColor")
        } },
        { field: 'description', headerName: 'Description', minWidth: 300,  type:"number"},
        { field: 'money', headerName: 'Money', minWidth: 150, type:"number"},
        { field: 'mode', headerName: 'Mode', minWidth: 120, type:"number"},
        { field: 'date', headerName: 'Date', minWidth: 120,  type:"number"},
        { field: 'totalIncome', headerName: 'Total Income', minWidth: 120,  type:"number"},
        { field: 'amtbalance', headerName: 'balance', minWidth: 120,  type:"number"},
        //  {field:"mode", headerName:"Actions", minWidth:150, flex:0.3, type:"number", sortable:false, renderCell:(params)=>{
        //     return(
        //         <Fragment>
        //             {/* <Link to={`/admin/order/${params.row.id}`}><EditIcon/></Link> */}
        //             {/* <Button onClick={()=>deleteOrderHandler(params.row.id)}><DeleteIcon/></Button> */}
        //         </Fragmen
        //     )
        //  }},    
      ]
      const rows = [];
      let totalMoney = 0;
      let amitBalance = 0;
      AllData &&
      AllData.forEach((item, index)=>{
        if(item.account !== 'income'){
          totalMoney += item.money;
        }
        else{
         amitBalance += item.money
        }
     rows.push({
        id:item._id,
        srno:index+1,
        account:item.account,
        name : item.name,
        description:item.description,
        money:item.money,
        mode:item.mode,
        date:item.date,
        totalIncome:item.account === 'income' ? item.money : 0,
        amtbalance:amitBalance-totalMoney
     })    
  })
  rows.push({
    id: 'total', 
    account: 'Total',
    name: '',
    description: '',
    money: totalMoney, 
    mode: '',
    date: '',
    totalIncome:amitBalance,
    amtbalance:amitBalance-totalMoney
});
    useEffect(()=>{
         dispatch(getAllData())
    },[dispatch])
  return (
    <div>
       <DataGrid
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
                className='productListTable'
                initialState={{
                    pagination: {
                      paginationModel: { pageSize: 8, page: 0 },
                    },
                  }}
                  pageSizeOptions={[8]} 
                />

    </div>
  )
}

export default ShowData
