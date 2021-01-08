import React, { useState } from 'react';


const FormResults = props => {
  const { firstName, lastName, email, password, confirmpw } = props.data;
  return(
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmpw}</p>
    </div>
  )
}

export default FormResults;