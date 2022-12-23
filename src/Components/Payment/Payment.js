import React from 'react'
import { Link } from 'react-router-dom';
import "./payment.css"

const Payment = () => {
  return (
    <div className='payment'>
        <div className='checkout'>
            <Link to='/'><h1>Sanaa</h1></Link>
            <p>Payment method coming soon... Stay in!</p>
        </div>
    </div>
  )
}

export default Payment;