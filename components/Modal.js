import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Box, TextField } from "@mui/material";
import { redirect, useRouter } from "next/navigation";
import { EditNote } from "@mui/icons-material";
import Cookies from "js-cookie";


export default function BasicModal({ id }) {
  const [open, setOpen] = React.useState(false);
  const [data,editedData]=React.useState("")
  // const [first, setfirst] = useState("")

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter()
  const token = Cookies.get("token");

  const edit_book = async () => {
    setOpen(true);
    try {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const res = await axios.get(`http://127.0.0.1:8000/single_book/${id}/`);
      const data = res.data; 
      editedData(data.data[0].category)
     
     
    } catch (error) {
      console.log(error);
    }
  };
 

const updateData = async ()=>{
  try {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const res = await axios.put(`http://127.0.0.1:8000/edit_book/${id}/`,{
      category:data,
      
    }).then(()=>{
      handleClose()
      router.refresh()
    })
  
} 
  catch(error){
    console.log(error)
    }
  }

  return (
    <div>
      <Button onClick={edit_book}><EditNote  /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>wanna edit {id}?</h1>
         <form>
         <input type="text" value={data} label="Outlined" variant="outlined" onChange={(e)=>editedData(e.target.value)}/>
         </form>

          <Button onClick={updateData}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
