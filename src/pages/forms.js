import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../components/sidebar';
import { Nav } from '../components/nav';

export const Form = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <Nav/>
      
      <div className='newcontainer'>
        <div className='top'>
        <h1>Add New</h1></div>
        
            <div className='form'>
                <form>
                  <div className='forminput'>
                     <label>Full Name</label> 
                     <input type="text" placeholder='Roza Kassa' field="fullName"/> 
                  </div>
                  <div className='forminput'>
                     <label>Phone Number</label> 
                     <input type="number" placeholder='
                     +251987878787' field="phoneNumber"/>
                  </div>
                  <div className='forminput'>
                     <label>Email</label> 
                     <input type="email" 
                     field="email" placeholder='
                     roza@gmail.com '/>
                  </div>
                  
                  <div className='forminput'>
                     <label>Role</label> 
                     <input type="text" 
                     field="role" placeholder='
                     Admin'/>
                  </div>
                  <div className='forminput'>
                     <label>Status</label> 
                     <input type="text" field="status" placeholder='
                     Active'/>
                  </div>
                  <Link to ="/users" className = "underline" 
                  >
                  <button>Add</button>
                  </Link>
    
                </form>  
            </div>
        </div>
      </div>
   
  )
}
