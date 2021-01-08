import React, {useState} from 'react';

const UserForm = props => {

  const {user, setUser} = props;

  // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpwError, setConfirmPwError] = useState("");


  const handleFirstName = (e, key) => {
    setUser({
      ...user, // allows you to grab all the diff inputs
      [e.target.name]: e.target.value // targets the specific input field at that name label
    })

    if (e.target.name === "firstName") {
        if(e.target.value.length < 1) {
          setFirstNameError("First name is required.")
        } else if(e.target.value.length < 2) {
          setFirstNameError("First name must be at least 2 characters.")
        } else {
          setFirstNameError("");
        }
    }
  };

  const handleLastName = (e, key) => {
    setUser({
      ...user, // allows you to grab all the diff inputs
      [e.target.name]: e.target.value // targets the specific input field at that name label
    })

    if (e.target.name === "lastName") {
        if(e.target.value.length < 1) {
          setLastNameError("Last name is required.")
        } else if(e.target.value.length < 2) {
          setLastNameError("Last name must be at least 2 characters.")
        } else {
          setLastNameError("");
        }
    }
  };

  const handleEmail = (e) => {
    setUser({
      ...user, // allows you to grab all the diff inputs
      [e.target.name]: e.target.value // targets the specific input field at that name label
    })

    if (e.target.name === "email") {
      if(e.target.value.length < 1) {
        setEmailError("Email is required.")
      } else if(e.target.value.length < 2) {
        setEmailError("Email must be at least 2 characters.")
      } else {
        setEmailError("");
      }
    }
  };

  // Passwords must match and be at least 8 characters
  const handlePassword = (e) => {
    setUser({
      ...user, // allows you to grab all the diff inputs
      [e.target.name]: e.target.value // targets the specific input field at that name label
    })

    if(e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters.")
      console.log('from password less than 2 characters: ', e.target.value)
    } else {
      setPasswordError("");
    }

  };

  const handleConfirmPassword = (e) => {
    setUser({
      ...user, // allows you to grab all the diff inputs
      [e.target.name]: e.target.value // targets the specific input field at that name label
    })

    if (e.target.name === "confirmpw") {
        if(e.target.value !== user.password) {
          console.log("user confirm password: ", e.target.value)
          setConfirmPwError("Passwords don't match!")
        } else {
          setConfirmPwError("");
        }
    }
  };


  return(
    <form>

      <div className="form-group row">
        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">First Name:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control form-control-sm" id="colFormLabelSm"  name="firstName" onChange= { handleFirstName } />
          {
            firstNameError ?
            <p style = {{color: 'red'}}> { firstNameError }</p> :
            ''
          }
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Last Name:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control form-control-sm" id="colFormLabelSm" name="lastName" onChange= { handleLastName } />
          {
            lastNameError ?
            <p style = {{color: 'red'}}> { lastNameError }</p> :
            ''
          }
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control form-control-sm" id="colFormLabelSm" name="email" onChange= { handleEmail } />
          {
            emailError ?
            <p style = {{color: 'red'}}> { emailError }</p> :
            ''
          }
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Password:</label>
        <div className="col-sm-10">
          <input type="password" className="form-control form-control-sm password" id="colFormLabelSm" name="password" onChange= { handlePassword } />
          {
            passwordError ?
            <p style = {{color: 'red'}}> { passwordError }</p> :
            ''
          }
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Confirm Password:</label>
        <div className="col-sm-10">
          <input type="password" className="form-control form-control-sm confirmpw" id="colFormLabelSm" name="confirmpw" onChange= { handleConfirmPassword } />
          {
            confirmpwError ?
            <p style = {{color: 'red'}}> { confirmpwError }</p> :
            ''
          }
        </div>
      </div>
      <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-2">Submit</button>
    </div>

    </form>
  );
}

export default UserForm;