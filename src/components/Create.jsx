


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Create() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const headers = { "Access-Control-Allow-Origin": "*" };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData",
//         { name, email },
//         { headers }
//       );

//       alert("Product created successfully ");
//       setName("");
//       setEmail("");
//       navigate("/read"); // redirect to Read page
//     } catch (error) {
//       console.error("Error creating product:", error);
//       alert("Something went wrong ");
//     }
//   };

//   return (
//     <div>
//       <h1 style={{ color: "red" }}>CREATE</h1>

//       <div>
//         <h4>Name</h4>
//         <input
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>

//       <br />

//       <div>
//         <h4>Email</h4>
//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <br />

//       <button onClick={handleCreate}>Add</button>
//     </div>
//   );
// }

// export default Create;



















import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Create() {
const [name , setName] = useState();
const [email , setEmail] = useState();
const navigate = useNavigate();


const handleCreate = async(e) =>{
  e.preventDefault();
  try{
    await axios.post('https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData' , {name , email})
    alert('data upload')
    setName('');
    setEmail('');

    navigate('/read')



  }
  catch (err){
    console.error("error occrurd" , err)
    alert("error ")

  }

}
  return (

    <div> <h4>Create</h4>
        
        <form onSubmit={handleCreate}>
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

export default Create