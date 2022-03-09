import React,{useEffect, useState} from "react";
import {Table} from 'semantic-ui-react';
import { Icon, Label, Menu,Button} from 'semantic-ui-react';
import axios from 'axios';
import {Link, link} from 'react-router-dom';


function Details() {

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);
    const [apiData, setApiData] = useState([]);
useEffect(() => {
       axios.get('https://6217924e71e7672e5383e28e.mockapi.io/Dep')
       .then((getData) => {
        setApiData(getData.data);
        
       })

})
const getData = () => {
    axios.get(`https://6217924e71e7672e5383e28e.mockapi.io/Dep`)
         .then((getData) => {
          setApiData(getData.data);
          
         })
  }
  const onDelete = (id) =>{
    axios.delete(`https://6217924e71e7672e5383e28e.mockapi.io/Dep/${id}`)
    .then(() => {
    
      getData();
    })
    }
    const setID = (id,Position,Description,ReportTo,Managing,Level) =>
 {
   localStorage.setItem('ID',id); 
   localStorage.setItem('Position',Position); 
   localStorage.setItem('Description',Description);
   localStorage.setItem('ReportTo',ReportTo);
   localStorage.setItem('Managing',Managing);
   localStorage.setItem('Level',Level);
 }    
 
        return (
            <div>
             <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Department</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>ReportTo</Table.HeaderCell>
        <Table.HeaderCell>Managing</Table.HeaderCell>
        <Table.HeaderCell>Level</Table.HeaderCell>
        <Table.HeaderCell>UPdate</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((data) => {
            return(
                 <Table.Row>
        <Table.Cell>
          <Label ribbon>{data.id}</Label>
        </Table.Cell>
        <Table.Cell>{data.Position}</Table.Cell>
        <Table.Cell>{data.Description}</Table.Cell>
        <Table.Cell>{data.ReportTo}</Table.Cell>
        <Table.Cell>{data.Managing}</Table.Cell>
        <Table.Cell>{data.Level}</Table.Cell>
        <Table.Cell><Link to = '/contacts'><Button onClick={() => setID(data.id,data.Position,data.Description,data.ReportTo,data.Managing,data.Level)} color="Green"> Update </Button></Link></Table.Cell>
        <Table.Cell>
          
          <Button onClick={() => onDelete(data.id)}>Delete </Button>
          
          
          </Table.Cell>
          
      </Table.Row>
            )
        })}
      
      
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

            </div>
        );
    }


export default Details;