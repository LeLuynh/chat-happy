import React from 'react'
import {Col, Row, Button, Typography } from 'antd';
import firebase, {auth} from '../../FireBase/config';
const {Title} = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
    const handleLoginFB = async () =>{
        const data = await auth.signInWithPopup(fbProvider);
        console.log({data})
    }
   
  return (
    <div> 
        <Row justify= "center"
        style={{
            height: 400, 
            alignItems: "center", 
            width: '100%',
            }}>
            <Col span={8} style={{ 
                border: '1px solid #f788ad',
                padding: 20,
                borderRadius: 20,
                backgroundColor: '#f788ad'
            }}>
                <Title style={{textAlign: 'center', fontFamily: 'cursive'}}>Chat Happy</Title>
                <Button onClick={handleLoginFB} style={{
                    width: '100%', 
                    marginBottom: 15,
                    borderRadius: 15,
                    backgroundColor: '#edbb84',
                    fontFamily: 'cursive'
                    
                }}>Login with Facebook</Button>
                <Button style={{
                    width: '100%',
                    marginBottom: 15,
                    borderRadius: 15,
                    backgroundColor: '#edbb84',
                    fontFamily: 'cursive'
                }}>Login with Google</Button>
            </Col>
        </Row>
    </div>
  )
}
