import { Button, Typography ,Icon } from '@mui/material'
import React , {useState}from 'react'
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
const Counter = () => {
    var[count,setCount]=useState(0)
  return (
    <div style={{margin:'10%'}}>
      <Typography variant='h4'>{count}</Typography>
      <br />
      <br />
      <Button  onClick={() => setCount(count + 1)}>
        <ArrowUpwardTwoToneIcon></ArrowUpwardTwoToneIcon></Button>
      <Button onClick={() => setCount(count - 1)}>
        <ArrowDownwardTwoToneIcon></ArrowDownwardTwoToneIcon></Button>
    </div>
  )
}

export default Counter
