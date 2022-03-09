import React,{useEffect, useState} from "react";
import {Table} from 'semantic-ui-react';
import { Icon, Label, Menu,Button} from 'semantic-ui-react';
import axios from 'axios';
import {Link, link} from 'react-router-dom';


function Screen() {
  

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);
    const [apiData, setApiData] = useState([]);
useEffect(() => {
       axios.get(`https://6217924e71e7672e5383e28e.mockapi.io/Dep?Level=0`)
       .then((getData) => {
        setApiData(getData.data);
        
       })

})
const [apiData2, setApiDataa] = useState([]);
useEffect(() => {
       axios.get('https://6217924e71e7672e5383e28e.mockapi.io/Dep?Level=1')
       .then((getDataa) => {
        setApiDataa(getDataa.data);
        
       })

})
const [apiData3, setApiDataaa] = useState([]);
useEffect(() => {
       axios.get('https://6217924e71e7672e5383e28e.mockapi.io/Dep?Level=2')
       .then((getDataaa) => {
        setApiDataaa(getDataaa.data);
        
       })

})
 
        return (
            <div>
             <Table celled>
    <Table.Header>
      <Table.Row>
        
        <Table.HeaderCell>Department</Table.HeaderCell>
        <Table.HeaderCell>Manages</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((data) => {
            return(
            
                 <Table.Row>
       
        <Table.Cell>{data.Position}</Table.Cell>
        <Table.Cell>{data.Managing}</Table.Cell>
        
     
      </Table.Row>
      
      
            )
        })}
        {apiData2.map((data) => {
            return(
                 <Table.Row>
        
        <Table.Cell>{data.Position}</Table.Cell>
        <Table.Cell>{data.Managing}</Table.Cell>
     
      </Table.Row>
            )
        })}
      
      {apiData3.map((data) => {
            return(
                 <Table.Row>
        
        <Table.Cell>{data.Position}</Table.Cell>
        <Table.Cell>{data.Managing}</Table.Cell>
     
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


export default Screen;