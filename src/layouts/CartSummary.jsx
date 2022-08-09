import React from 'react'
import { Dropdown } from "semantic-ui-react";
import {NavLink} from 'react-router-dom'

export default function CartSummary() {
  return (
   <div>
    <Dropdown item text='Sepetiniz'>
    <Dropdown.Menu>
      <Dropdown.Item>Asus</Dropdown.Item>
      <Dropdown.Item>Acer</Dropdown.Item>
      <Dropdown.Item>Monster</Dropdown.Item>
      <Dropdown.Divider/>
      <Dropdown.Item as={NavLink} to="/src/pages/CreateDayDetail.jsx"  >Sepete Git</Dropdown.Item> 
    </Dropdown.Menu>
  </Dropdown>
  </div>
  )
}
