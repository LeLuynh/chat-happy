import React from 'react'
import { Collapse, Typography, Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import {PlusSquareOutlined} from '@ant-design/icons'

const { Panel } = Collapse;
const PanelStyle = styled(Panel)`
 &&&{
     .ant-collapse-header, p{
         color: white;
     }
     .ant-collapse-content-box{
         padding : 0 40px;
         background-color: #f99707;
     }
     .ant-collapse-content-box a.ant-typography{
        color: white;
     }
 }
 .add-room{
     color: white;
     padding: 0px;
 }
`;
const LinkStyle = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

export default function RomList() {
    return (
        <Collapse defaultActiveKey={['1']} style={{ backgroundColor: '#f99707'}}>
            <PanelStyle header="danh sach cac phong" key="1">
                <LinkStyle>room 1</LinkStyle>
                <LinkStyle>room 1</LinkStyle>
                <LinkStyle>room 1</LinkStyle>
                <Button className='add-room' type='text' icon={<PlusSquareOutlined/>}>Them Phong</Button>
            </PanelStyle>
        </Collapse>     
    )
}