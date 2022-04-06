import { Avatar, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.div`
    margin-bottom: 25px;
    .author{
        margin-right: 7px;
        font-weight: bold;
    }
    .date{
        margin-right: 52px;
        font-size: 12px;
        color: #5e5757;
        float: right;
    }
    .content{
        margin-left: 38px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 1px 10px;
    }
    .image{
        margin-right: 12px;
    }
    .my-chat span{
        float: right;
    }
 
`;
export default function MessageRight({text, createdAt}) {
  return (
    <WrapperStyle>
        <div>
            <Typography.Text className='content'>{text}</Typography.Text>
        </div>
        <div className='my-chat'>  
            <Typography.Text className='date'>{createdAt}</Typography.Text>                   
        </div>
    </WrapperStyle>
  )
}
