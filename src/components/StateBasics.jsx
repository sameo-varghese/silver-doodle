import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,setName] = useState("Parker")
    const changeName = () => {
        console.log("Button Clicked");
        setName("Peter ")
    }
  return (
    <div>
      <Typography variant='h3'>My name is {name}</Typography>
      <Button variant='contained' onClick={changeName}>Chane Name</Button>
    </div>
  )
}

export default StateBasics
