import { useState } from "react";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/actions/AuthActions";

export const UseLogin = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [remeber, setRemember] = useState(false)
  const [values, setValues] = useState({
    email: "",
    password: "",
    inputErr: "",
    inputId: 0,
  });
  const [err, setErr] = useState(false)

  const handleChange = (prop) => (text) => {
    setValues({ ...values, [prop]: text });
  };

  // const validateEmail = (email) => {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z  A-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // };


  const loginHandler = () => {
    if (values.email === "" || values.email === undefined) {
      setValues({ ...values, inputErr: "Email required", inputId: 1 });
    } 
    // else if (!validateEmail(values.email)) {
    //   setValues({ ...values, inputErr: "Invalid email", inputId: 3 });
    // } 
    else if (values.password === "" || values.password === undefined) {
      setValues({ ...values, inputErr: "Password required", inputId: 2 });
    } else {
      setValues({...values, inputErr: "", inputId: 0 });
      dispatch(doLogin(values.email, values.password, remeber, setLoading, setErr))
    }
  }

  return [{
    values,
    loading,
    remeber,
    err,
    setErr,
    setRemember,
    handleChange,
    loginHandler
  }]
}