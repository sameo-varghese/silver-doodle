import { Button, TextField, Typography , setInput} from '@mui/material'
import React, { useState } from 'react'

const Halo = () => {
    var[input,setInput] = useState()
    const addGallery = ()=>{
        setInput("Oru Meiran")
    }

    var[input,setInput] = useState()
    const addHome = ()=>{
        setInput("Oru Mandan")
    }
    var[input,setInput] = useState()
    const addContact = ()=>{
        setInput("Oru Pottan")
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'> {input}</Typography>
      {/* <TextField  variant='outlined' label='Enter something' onChange={inputHandler}/> */}
      <br />
      <br />
      <Button variant='contained' onClick={addGallery} color='secondary'>Joseph</Button>
      &ensp;
      <Button variant='contained' onClick={addHome} color='success'>Athul ps</Button>
      &ensp;
      <Button variant='contained' onClick={addContact}color='error'>Aaron</Button>
    </div>
  )
}

export default Halo
