import {BrowserRouter , Routes , Route} from 'react-router-dom'

import './App.css'
import Create from './components/Create'
import Read from './components/Read'
import Delete from './components/Delete'
import Update from './components/Update'
 


function App() {
  

  return (
    <div> 
      <BrowserRouter>

       <Routes>
      <Route  path='/' element={<Create/>} >  </Route>
  
  <Route path='/read' element = {<Read/>} ></Route>

  <Route path='/delete/:id' element={<Delete/>}></Route>

  <Route path='/update/:id' element ={<Update/>}></Route>

      
    </Routes>
      
      </BrowserRouter>
    
     </div>
  )
}

export default App;
