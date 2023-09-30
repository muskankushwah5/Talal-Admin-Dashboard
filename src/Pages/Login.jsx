import axios from 'axios';
import React, { useRef, useState } from 'react';

import "./Login.css";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function LoginPage() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const emailRef = useRef("");
  const rePasswordRef = useRef("");
  const [isLogin,setLogin] = useState(true);
  const [change , setChange] = useState(false);

  const userData = (JSON.parse(localStorage.getItem("adminUser")));

  const navigate = useNavigate();

  if(!userData){
    navigate("/login");
  }

  const domain = "http://localhost:8000"
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password  = passwordRef.current.value;
    const Repassword = rePasswordRef.current.value;

    if(isLogin){
        if(!email || !password){
          toast.error("These cant be empty");
        }
        else{
          const payload = {
            email : email,
            password : password
          };

          toast.loading("Logging");
          const response = axios.post(`${domain}/login-user`,payload)
          .then((res)=>{
            console.log(res);
            toast.dismiss();
            toast.success("User logged in successfully");
            localStorage.setItem("adminUser",JSON.stringify(res.data.data));
            navigate("/homepage");
          })
          .catch((err)=>{
            toast.error("Try Again!",err.message);
          })
        }
    }
    else{
      if(!email || !password){
        toast.error("These cant be empty");
      }
      if(Repassword !== password){
        toast.error("Both password should be same");
      }
      else{
        const payload = {
          username : username,
          email : email,
          password : password
        };

        toast.loading("Signing");
        const response = axios.post(`${domain}/signup-user`,payload)
        .then((res)=>{
          console.log(res);
          toast.dismiss();
          toast.success("Successfully signed In");
          setLogin(false);
        })
        .catch((err)=>{
          toast.error("Try Again!");
        })
      }
    }

  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login" : "SignUp"}</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
      {!isLogin &&<input
          type="text"
          name="username"
          placeholder="Username"
          ref={usernameRef}
          required
        />}
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        {!isLogin && <input
          type="password"
          name="Repassword"
          placeholder="Comfirm Password"
          ref={rePasswordRef}
          required
        />}
        <div className='login-cotainer-sub-div'>
        <input type="submit" value={isLogin ? "Login" : "SignUp"} />
        {!isLogin ? <label>Already Have Account ? <button onClick={()=>{setLogin(!isLogin)}}><a>SignIn</a></button></label>:
        <label>Dont Have Account ? <button onClick={()=>{setLogin(!isLogin)}}><a>SignUp</a></button></label>
      }
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
