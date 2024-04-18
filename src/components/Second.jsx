//open the folder
// open cmd using cmd in address bar
//type 
//type rafce
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Second = () => {
    var data=[
        {name:"Sameo",age:20,place:"Koratty"},
        {name:"Albin",age:34,place:"Chalakudy"}
             ]
    return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Age
                    </TableCell>
                    <TableCell>
                        Place
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                return<TableRow>
                    <TableCell key={i}>{val.name}</TableCell>
                    <TableCell key={i}>{val.age}</TableCell>
                    <TableCell key={i}>{val.place}</TableCell>
                </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Second
