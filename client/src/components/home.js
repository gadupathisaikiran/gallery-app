import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Post from './post';

export default function Home() {


  const [data, setdata] = useState([])
  const [modalShow, setModalShow] = useState(false);

  const [Search, setSearch] = useState({ title: "" })


  useEffect(() => {

    async function main() {




      await axios.get("https://gallery-app-mtlf.onrender.com/home").then((res) => { setdata(res.data.post) }).catch((e) => { console.log(e) })


      if (!data) {
        alert("something went wrong")
       

      }



    }

    main()


  }, [])

  // ................................fetching data by label and updating data............................

  useEffect(() => {



    async function data() {
        if (Search.title) {

            await axios.get(`https://gallery-app-mtlf.onrender.com/home/${Search.title}`).then((data) => {
                setdata(data.data.post)
            })
        }
        else {

            await axios.get("http://localhost:5002/home").then((data) => {
                setdata(data.data.post)
            })
        }

    }
    data()

}, [Search])



  console.log(data)

  async function del(e) {

    let id = e.target.value
    console.log(id)

    let res=await axios.delete(`https://gallery-app-mtlf.onrender.com/home/${id}`)
 
if(res.data.deleted){
  alert("deleted sucessfully...")
  
  window.location.reload()


}

    



  }








  return (
    <>
       
    <div className='header'>

      <span class="material-symbols-outlined" id="logo" >
        person


      </span>




      <div style={{ display: "inline-block", top: "0px" }} > <label style={{ height: "50px" }} htmlFor="logo"><h4 style={{ position: "absolute", top: "0px" }}>My Unsplash </h4><br /><p>devchallenges.io</p></label></div>




      <div style={{ display: "inline-block" }} ><input type='text' onChange={(e) => { setSearch({ ...Search, title: e.target.value }) }} className='input' placeholder='search by name'></input></div>

      <div className='add-button' style={{ display: "inline-block" }}><button onClick={() => { setModalShow(true) }} class="btn btn-success">ADD PHOTO</button></div>




      </div>

      <div className='cards-container'>




        {
          data ? data.map((d) => {


            return (
              <div className='card'  >


                <img  src={d.url} alt='img' style={{ cursor: "pointer", borderRadius: "30px",position:"relative" }}></img>

                <button className='delete-button' value={d._id} onClick={(e) => { del(e) }}>Delete</button>
                <h4 className='text' style={{ bottom: "0", left: "16px" }} >{d.label}</h4>


              </div>
            )



          })
            : ""



        }







      </div>




      <Post show={modalShow} onHide={() => setModalShow(false)} />



    </>


  )
}
