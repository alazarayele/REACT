
import { Container, Header, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'


import React,{useEffect, useState} from "react";
import {Table,Form} from 'semantic-ui-react';
import { Icon, Label, Menu,Button} from 'semantic-ui-react';
import axios from 'axios';
import {Link, link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { popoverClasses } from "@mui/material";
import { DeselectRounded } from "@mui/icons-material";
function UnderMan() {
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
    const sendDataToAPI = () => {
        axios.put(`https://6217924e71e7672e5383e28e.mockapi.io/Dep/${ID}`,{
           Position,
           Description,
           ReportTo,
           Managing
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
           
   
       },[])
        return (
          <div className='container'>
          <div className='row'>
          
      {/* Column 1 */}
  <div className='col-md-3 col-sm-6'>
      <div className="card" style={{width:'18rem'}}>
    <img src=".././images/garaj.jpg"   alt="" className="card-img-top"/>
    <div className="card-body">
        <h3 className="card-title text-uppercase">{Position}</h3>
         <h5 className="card-title">{Description}</h5>
         <h4 className="card-title ">Managed &nbsp;&nbsp; {Managing} </h4>
    </div>

      </div>
               
            
            </div>
            </div>
            </div>
        );
    }

export default UnderMan;