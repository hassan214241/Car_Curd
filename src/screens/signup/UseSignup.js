import { useState } from "react";
import { useDispatch } from "react-redux";
import { doSignup } from "../../redux/actions/AuthActions";

export const UseSignup = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    userId: '',
    email: '',
    password: '',
    inputErr: '',
    inputId: 0,
  });

  const handleChange = (prop) => (text) => {
    setValues({ ...values, [prop]: text });
  };

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z  A-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  let check = true
  const generateUserId = () => {
    let num = null
    if (!num) {
      num = Math.floor(Math.random() * 1000);
    }
    let first = values.firstName[0]
    let last = values.lastName[0] + values.lastName[1] + values.lastName[2]
    let id = first.toLowerCase() + last.toLowerCase() + num
    setValues({ ...values, userId: id })
  }


  const signupHandler = () => {
    if (values.firstName === "" || values.firstName === undefined) {
      setValues({ ...values, inputErr: "Required", inputId: 1 });
    } else if (values.lastName === "" || values.lastName === undefined) {
      setValues({ ...values, inputErr: "Required", inputId: 2 });
    } else if (values.email === "" || values.email === undefined) {
      setValues({ ...values, inputErr: "Email required", inputId: 3 });
    } else if (!validateEmail(values.email)) {
      setValues({ ...values, inputErr: "Invalid email", inputId: 4 });
    } else if (values.password === "" || values.password === undefined) {
      setValues({ ...values, inputErr: "Password required", inputId: 5 });
    } else {
      setValues({ ...values, inputErr: "", inputId: 0 });
      const data = {
        FirstName: values.firstName,
        LastName: values.lastName,
        UserId: values.userId,
        Email: values.email,
        Passworrd: values.password
      }
      dispatch(doSignup(data, setLoading, setSuccess))
    }
  }
  return [{
    loading,
    values,
    success,
    setSuccess,
    handleChange,
    generateUserId,
    signupHandler,
  }]
}