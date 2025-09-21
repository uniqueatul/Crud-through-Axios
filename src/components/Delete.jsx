// import React, { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// function Delete() {
//   const { id } = useParams(); // get id from URL
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (window.confirm("Are you sure you want to delete this record?")) {
//       axios
//         .delete(`https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData/${id}`)
//         .then(() => {
//           alert("Record deleted ");
//           navigate("/read"); // back to list after delete
//         })
//         .catch((err) => {
//           console.error("Delete error:", err);
//           alert("Error deleting record ");
//           navigate("/read"); // go back even if error
//         });
//     } else {
//       navigate("/read"); // cancel deletion
//     }
//   }, [id, navigate]);

//   return <h3 style={{ color: "red" }}>Deleting record</h3>;
// }

// export default Delete;




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



