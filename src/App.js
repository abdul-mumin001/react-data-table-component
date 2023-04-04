import { useState } from 'react';
import './App.css';
import DataTable from 'react-data-table-component';
function App() {
 const columns =[
  {
    name:'Name',
    selector: row => row.name,
    sortable:true

  },
  {
    name:'Email',
    selector: row => row.email,
    sortable:true
  },
  {
    name:'Age',
    selector: row => row.age,
    sortable:true
  }
 ]
 const data =[
  {
    id:1,
    name:'Abdul',
    email:'abdulmumin@gmail.com',
    age:'23'
  },
  {
    id:2,
    name:'Mumin',
    email:'abc@gmail.com',
    age:'22'
  },
  {
    id:3,
    name:'Joyin',
    email:'joy@gmail.com',
    age:'21'
  },
  {
    id:4,
    name:'Habib',
    email:'habib@gmail.com',
    age:'24'
  },
  {
    id:5,
    name:'sabul',
    email:'sabul@gmail.com',
    age:'21'
  }
  ,
  {
    id:3,
    name:'Joyin',
    email:'joy@gmail.com',
    age:'21'
  },
  {
    id:4,
    name:'Habib',
    email:'habib@gmail.com',
    age:'24'
  },
  {
    id:5,
    name:'sabul',
    email:'sabul@gmail.com',
    age:'21'
  }
 ]
 
 const [records,setRecords] = useState(data);
  function handleFilter(event){
    const newData = data.filter(row =>{
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
   setRecords(newData)
  }
  return (
    <div className="container mt-5">
      <div className='text-end'><input type='text' onChange={handleFilter} /></div>
      <DataTable columns={columns}
      data={records}
      selectableRows
      fixedHeader
      pagination
      ></DataTable>
 
    </div>
  );
}

export default App;
