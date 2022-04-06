import React from 'react'
import {Button, Avatar, Typography} from 'antd';
import styled from 'styled-components';
import { auth } from '../../FireBase/config';

const WrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  padding: 12px 16px;
  
  .username{
    margin-left: 5px; 
    color: white;
  }
`;

export default function UserInfo() {
  return (
    <WrapStyle>
        <div>
            <Avatar>s</Avatar>
            <Typography.Text className='username'>Luynh</Typography.Text>
        </div>
        <Button ghost onClick={() => auth.signOut()}>Log out</Button>
    </WrapStyle>
  )
}
