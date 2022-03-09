import React,{Component} from "react";

import {useState} from 'react';
import axios from 'axios';

import { Form,Button } from 'semantic-ui-react'
import { Container, Header, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'




function Home2(){
  const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

  const[Position,setPosition] = useState('');
  const[Description,setDescription] = useState('');
  const[ReportTo,setReportTo] = useState('');

  const sendDataToAPI = () => {
   axios.post(`https://6217924e71e7672e5383e28e.mockapi.io/Dep`,{
       Position,
       Description,
       ReportTo

       

   })
   
   }
  
 
        return (
            <div className='container'>
            <div className='row'>
            
        {/* Column 1 
    <div className='col-md-3 col-sm-6'>
  <h4> Haloooooooooo </h4> 
<ul className='list-unstyled'>
<li>Haloooooo</li>
<li>Haloooooo</li>
<li>Haloooooo</li>
<li>Haloooooo</li>

</ul>
           </div>*/}
           <div className='col-md-3 col-sm-6'>
           
         

          <Form>
    <Form.Field cols="40">
      <label>Department Name</label>
      <input name="fname"  onChange={(e) => setPosition(e.target.value)} placeholder='Enter Department Name' />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      
      <textarea rows="20" cols="40" name="comment" onChange={(e) => setDescription(e.target.value)} 
      placeholder='Last Name' form="usrform"></textarea>
    </Form.Field>
    <Form.Field cols="40">
      <label>Report To</label>
      <input name="fname"  onChange={(e) => setReportTo(e.target.value)} placeholder='Enter Department Name' />
    </Form.Field>
    
    <Button onClick={sendDataToAPI} type='submit'>Submit</Button>
  </Form>
  
   
  
           </div>
           </div>
          
        </div>
        );
    }


export default Home2;