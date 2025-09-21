// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// function Update() {
//   const { id } = useParams(); 
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

  
  
//   useEffect(() => {
//     axios
//       .get(`https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData/${id}`)
//       .then((res) => {
//         setName(res.data.name);
//         setEmail(res.data.email);
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         alert("Failed to fetch record ");
//         navigate("/read");
//       });
//   }, [id, navigate]);

 
  
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     axios
//       .put(`https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData/${id}`, {
//         name,
//         email,
//       })
//       .then(() => {
//         alert("Record updated ");
//         navigate("/read"); // go back to list
//       })
//       .catch((err) => {
//         console.error("Update error:", err);
//         alert("Failed to update record ");
//       });
//   };

//   return (
//     <div>
//       <h1 style={{ color: "orange" }}>Update Record</h1>

//       <form onSubmit={handleUpdate}>
//         <div>
//           <h4>Name</h4>
//           <input
//             type="text"
//             placeholder="Enter name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <br />

//         <div>
//           <h4>Email</h4>
//           <input
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <br />

//         <button type="submit" style={{ background: "green", color: "white" }}>
//            Update
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Update;







import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {

  
const [name , setName] = useState('');
const [email , setEmail] = useState('');

 const {id} = useParams();
  const navigate = useNavigate();


  useEffect(() =>{
    axios.get(`https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData/${id}`)
    .then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      
    })
    .catch((err) =>{
      console.error('error occured' , err);
      alert('something went wrong');
    })
  } , [id , navigate])





  const handleUpdate = async (e) => {
    e.preventDefault();
    try{
      await axios.put(`https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData/${id}` , {name , email})
      alert('  update successfully')
      navigate('/read')



    }

    catch (err){
      console.error("khata khatra khatra" , err)
      alert('denger')

    }


  }

  return ( 


    
    
    <div>Update 


<form onSubmit={handleUpdate}>

  <div><label htmlFor="">name </label>
 <input type="text" 
placeholder='enter name '
value={name}
onChange={(e) => setName(e.target.value)}
/></div>

 <div>
  
 <label htmlFor="">email</label>
 
<input type="email" 
placeholder='enter email'
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
 </div>


<br />




<button type='submit'> Add  </button>
</form>


    </div>
  )
}

export default Update