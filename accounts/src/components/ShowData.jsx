import React,{Fragment} from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllData } from '../redux/newDataActions'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { deleteData } from '../redux/newDataActions'
import { DELETE_DATA_RESET } from '../redux/newDataActionTypes'
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
const ShowData = () => {
    const dispatch = useDispatch();
    const {AllData} = useSelector((state)=>state.getAllData);
    const {isDeleted} = useSelector((state)=>state.deleteData);
    
    const handleDelete = (id) =>{
        dispatch(deleteData(id))
    }
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
        {field:"actions", headerName:"Actions", minWidth:150, flex:0.3, type:"number", sortable:false, renderCell:(params)=>{
          if(params.row.id !== 'total'){
            return(
              <>
              <Link to={`/update/mendhepathar/${params.row.id}`}><EditIcon/></Link>
              <Button onClick={()=>handleDelete(params.row.id)}><DeleteIcon/></Button>
              </>
          )
          }
       }},
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
    actions:'',
    totalIncome:amitBalance,
    amtbalance:amitBalance-totalMoney
});
    useEffect(()=>{
      if(isDeleted){
        alert("Data Deleted Successfully")
        dispatch({type:DELETE_DATA_RESET})
      }
         dispatch(getAllData())
    },[dispatch, isDeleted])
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
