import { Avatar, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.div`
    margin-bottom: 10px;
    .author{
        margin-right: 7px;
        font-weight: bold;
    }
    .date{
        margin-right: 10px;
        font-size: 12px;
        color: #5e5757;
    }
    .content{
        margin-right: 52px;
    }
    .image{
        margin-right: 12px;
    }
    .my-chat span{
        float: right;
    }
    .date-author{
       padding-top: 4px;
    }
`;
export default function MessageRight({text, displayName, createdAt, photoURL }) {
  return (
    <WrapperStyle>
        <div>
            <Typography.Text className='content'>{text}</Typography.Text>
        </div>
        <div className='my-chat'>
            <Avatar src={photoURL} className="image">A</Avatar>
            <div className='date-author'>
                <Typography.Text className='author'>{displayName}</Typography.Text>
                <Typography.Text className='date'>{createdAt}</Typography.Text>
            </div>           
        </div>
    </WrapperStyle>
  )
}
