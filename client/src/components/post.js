import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import axios from 'axios';



import {useNavigate} from "react-router-dom"


export default function Post(props) {

    // const navigate = useNavigate();

const [label,setlabel]=useState()

const [url,seturl]=useState()




async function post(){


    try{
        let data={
            label:label,
            url:url
        }
        if(label.length==0){
            alert("Enter label")
            return
        }if(url.length==0){
            alert("Enter photo url")
        }

        await axios.post("http://localhost:5002/post",data).then((res)=>{if(res.data){window.location.reload()}}).catch((e)=>{console.log(e)})
    }

   catch(e){
    console.log(e)
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
        <h4>Add a new photo</h4>
        <label htmlFor='label'>label</label>
       
        <input placeholder='Suspendisse elit massa' class="form-control" type="text" id='label' onChange={(e)=>{setlabel(e.target.value)}}></input><br/>
        
        <label htmlFor='url'>photo url</label>
        <input onChange={(e)=>{seturl(e.target.value)}} placeholder='https://images.unsplash.com/photo-1680457368518-0f880b76ba7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60' class="form-control" type="text" id='url'></input><br/>

        <button onClick={props.onHide} class="btn btn-light" id='cancel-button'>Cancel</button>

        <button class="btn btn-success" id='submit-button' onClick={()=>{post()}}>Submit</button>

      </Modal.Body>

       
    </Modal>
    
    
    
    
    

  )
}
