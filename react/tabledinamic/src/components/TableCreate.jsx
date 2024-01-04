import React from 'react'
import { useState } from 'react'

function TableCreate() {
    const [table, setTable] = useState([
        {id:1,name:'Ram',age:25}
    ])

    const addRow =()=>{
        const newRow ={
            id:table.length+1,
            name:'New Person',
            age:100
        }
        setTable([...table,newRow])
    }

    const renderTable =()=>{
        return(
            <table style={{border:"1"}}>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </thead>

                <tbody>
                    {table.map((row)=>(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
  return (
    <>
      <h1>Dynamic Table Creation</h1>
      <button onClick={addRow}>Add Row</button>
      {renderTable()}
    </>
  )
}

export default TableCreate