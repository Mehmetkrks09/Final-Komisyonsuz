import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import CreateDayService from '../Sevices/CreateDayService';

export default function ProductList() {
  const [createDays, setCreateDays] = useState([])


  useEffect(() => {
    let createDayService = new CreateDayService()
    createDayService.getCreateDay().then(result => setCreateDays(result.data.data))

  })
  return (

    <div>
      <Table striped="columns" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Fotoğraf</th>
            <th>Adı</th>
            <th>Soy Adı</th>
            <th>Ödeme Durumu</th>

          </tr>
        </thead>
        <tbody>
          {createDays.map((createDays) => (
            <tr key={createDays.id}>
              <td>{createDays.payment.state}</td>
              <td>{createDays.month}</td>
              {/* <td>{createDays.payment.user.photo}</td> */}
              {/* <td>{createDays.payment.user.surName}</td> */}
               {/* <td>{createDays.payment.user.name}</td> */}
           {/*
             
              
            
             
              */}
           
            </tr>
          ))}
        </tbody>
      </Table></div>
  )
}
