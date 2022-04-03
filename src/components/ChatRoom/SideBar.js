import React from 'react';
import {Row, Col} from 'antd';
import UserInfo from './UserInfo';
import RomList from './RomList';
import styled from 'styled-components';

const SideBarStyle = styled.div`
    background: #f99707;
    color: white;
    height: 100vh;
`;
export default function SideBar() {
  return (
    <SideBarStyle>
        <Row>
            <Col span={24}><UserInfo/></Col>
            <Col span={24}><RomList/></Col>
        </Row>
    </SideBarStyle>
  )
}
