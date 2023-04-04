
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


export default function Password(props) {

const [error,seterror]=useState()

const [data,setdata]=useState({pass:""})




function confirm(){

if(data.pass!="delete"){

  

 seterror("type delete to confirm")

 return

}
if(data.pass=="delete"){

    seterror()

    props.handleconfirm()
    
    props.onHide()

 

}






}





  return (
  
    
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >


    <Modal.Body style={{height:"300px"}}>
     <h4>Are you sure?</h4>

     <input placeholder='type delete to confirm' class="form-control" onChange={(e)=>{setdata({...data,pass:e.target.value})}}></input>
     {
      error?
      
      <p style={{color:"red"}}>{error}</p>
      
      :""

         


     }

      <button onClick={props.onHide} class="btn btn-light" id='cancel-button'>Cancel</button>

      <button class="btn btn-danger" id='submit-button' onClick={()=>{confirm()}}>Delete</button>

    </Modal.Body>
    
    
    
    </Modal>
    
    
    
  
  )
}
