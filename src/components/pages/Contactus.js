
import { Container, Header, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'


import React,{useEffect, useState} from "react";
import {Table,Form} from 'semantic-ui-react';
import { Icon, Label, Menu,Button} from 'semantic-ui-react';
import axios from 'axios';
import {Link, link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { popoverClasses } from "@mui/material";
function Contacts() {
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);
    let history = useNavigate();
    const[Position,setPosition] = useState('');
  const[Description,setDescription] = useState('');
  const[ReportTo,setReportTo] = useState('');
    const[ID,setID]=useState(null);
    const[Managing,setManaging] = useState("");
    const[Level,setLevel] = useState("");
    const sendDataToAPI = () => {
        axios.put(`https://6217924e71e7672e5383e28e.mockapi.io/Dep/${ID}`,{
           Position,
           Description,
           ReportTo,
           Managing,
           Level
        }).then(() => {
          history('/Details');
        })
       }
       useEffect(() => {
        setPosition(localStorage.getItem('Position'));
        setDescription(localStorage.getItem('Description'));
        setReportTo(localStorage.getItem('ReportTo'));
           setID(localStorage.getItem('ID'));
           setManaging(localStorage.getItem('Managing'));
           setLevel(localStorage.getItem('Level'));
   
       },[])
        return (
          <div className='container'>
          <div className='row'>
          
      {/* Column 1 */}
  <div className='col-md-3 col-sm-6'>
                <Form>
    <Form.Field cols="40">
      <label>Department Name</label>
      <input name="fname"  value={Position} onChange={(e) => setPosition(e.target.value)} placeholder='Enter Department Name' />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      
      <textarea rows="10" value={Description} cols="40" name="comment" onChange={(e) => setDescription(e.target.value)} 
      placeholder='Last Name' form="usrform"></textarea>
    </Form.Field>
    <Form.Field cols="40">
      <label>Report To</label>
      <input name="fname"  value={ReportTo} onChange={(e) => setReportTo(e.target.value)} placeholder='Enter Department Name' />
    </Form.Field>
    <Form.Field cols="40">
      <label>Report To</label>
      <input name="fname"  value={Managing} onChange={(e) => setManaging(e.target.value)} placeholder='Enter Department Name' />
    </Form.Field>
    <Form.Field cols="40">
      <label>Report To</label>
      <input name="fname"  value={Level} onChange={(e) => setLevel(e.target.value)} placeholder='Enter Department Name' />
    </Form.Field>
    <Button onClick={sendDataToAPI} type='submit'>Update</Button>
  </Form>
            
            </div>
            </div>
            </div>
        );
    }

export default Contacts;