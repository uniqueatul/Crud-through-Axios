




import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Delete() {
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
    axios.delete(`https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData/${id}`)
    .then(()=> {
      alert("data deleted")
      navigate('/read')
    })
    
    .catch((err) =>{
      console.error('something went wrong' ,err )
      alert("Error deleting record ")

    })
    
    

  } , [id , navigate])
  return (


    <div> 
      <h1>Delete</h1>
    </div>
  )
}

export default Delete



