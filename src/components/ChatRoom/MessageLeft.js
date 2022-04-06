import { Avatar, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.div`
    margin-bottom: 10px;
    :last-child{
        margin-bottom: 25px;
    }
    .author{
        margin-left: 5px;
        font-weight:bold;
    }
    .date{
        margin-left: 10px;
        font-size: 12px;
        color: #5e5757;
    }
    .content{
        margin-left: 38px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 1px 10px;
    }
`;
export default function MessageLeft({text, displayName, createdAt, photoURL }) {
  return (
    <WrapperStyle>
        <div>
            <Avatar size="small" src={photoURL}>A</Avatar>
            <Typography.Text className='author'>{displayName}</Typography.Text>
            <Typography.Text className='date'>{createdAt}</Typography.Text>
        </div>
        <div>
            <Typography.Text className='content'>{text}</Typography.Text>
        </div>
    </WrapperStyle>
  )
}
