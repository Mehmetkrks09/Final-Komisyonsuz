import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import PaymentService from '../Sevices/PaymentService';

export default function ProductList() {
    const [payments, setPayments] = useState([])


    useEffect(() => {
        let paymentService = new PaymentService()
        paymentService.getPayment().then(result => setPayments(result.data.data))

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
                    {payments.map((payments) => (
                        <tr key={payments.id}>

                            <td>{payments.user.name}</td>
                            <td>{payments.state}</td>
                            <td>{payments.user.surName}</td>
                            <td>{payments.user.email}</td>
                            <td>{payments.user.photo}</td>

                        </tr>
                    ))}
                </tbody>
            </Table></div>
    )
}
