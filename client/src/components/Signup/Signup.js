import React from "react";
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginUser, registerUser } from "../../Redux/actions/user"; 
import {useHistory} from "react-router-dom"
import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const history=useHistory()
  
  return (
    <div>
  <a href="https://front.codes/" className="logo" target="_blank">
    <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
  </a>
  <div className="section">
    <div className="container">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
            <label htmlFor="reg-log" />
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Log In</h4>
                      <div className="form-group">
                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
                        <i className="input-icon uil uil-at" />
                      </div>	
                      <div className="form-group mt-2">
                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" onChange={(e)=>setPassword(e.target.value)} />
                        <i className="input-icon uil uil-lock-alt" />
                      </div>
                      <a href="#" className="btn mt-4"onClick={()=>dispatch(loginUser({email,password},history))}>submit </a>
                      <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Sign Up</h4>
                      <div className="form-group">
                        <input type="text" name="name" className="form-style" placeholder="Your first Name" id="logname" autoComplete="off" onChange={(e)=>setName(e.target.value)} />
                        <i className="input-icon uil uil-user" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="lastName" className="form-style" placeholder="Your last Name" id="logname" autoComplete="off" onChange={(e)=>setLastName(e.target.value)} />
                        <i className="input-icon uil uil-user" />
                      </div>	
                      <div className="form-group mt-2">
                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"onChange={(e)=>setEmail(e.target.value)} />
                        <i className="input-icon uil uil-at" />
                      </div>	
                      <div className="form-group mt-2">
                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" onChange={(e)=>setPassword(e.target.value)}/>
                        <i className="input-icon uil uil-lock-alt" />
                      </div>
                      <a href="#" className="btn mt-4" onClick={()=>dispatch(registerUser({name,lastName,email,password},history))}>submit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Signup;
