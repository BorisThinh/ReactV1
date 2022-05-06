import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Apis, { endpoints } from '../configs/Apis';
import '../css/login.css'

export default function Login() {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const login = async (event) => {
        event.preventDefault()
        try {
            let info = await Apis.get(endpoints['oauth2-info'])
            // console.info(info)
            let res = await Apis.post(endpoints['login'],{
                "client_id":info.data.client_id,
                "client_secret":info.data.client_secret,
                "username":username,
                "password":password,
                "grant_type":"password"
            })
            localStorage.setItem("access_token",res.data.access_token)

            let user = await Apis.get(endpoints['current-user'],{
                header:{
                    'Authorization':`Bearer${localStorage.getItem("access_token")}`
                }
            })
            console.info(user)
            localStorage.setItem("user",user.data)

        } catch(err){
            console.error(err)
        }
    }
    return (
        <>
          <div className="container">
            <h1 className="title">ĐĂNG NHẬP</h1>
            <hr></hr>   
                 <Form onSubmit={login}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>username</Form.Label>
                        <Form.Control className="dinh-dang" type="text" value={username} onChange={(event) => setUserName(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="dinh-dang" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </Form.Group>
                    <div className="clearfix">
                        <Button type="submit" className="signupbtn">
                        Đăng nhập
                        </Button>
                    </div> 
                </Form> 
               
         </div>
        </>
            
    );
}