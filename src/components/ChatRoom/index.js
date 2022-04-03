import React from 'react';
import {Row, Col} from'antd'; 
import SideBar from './SideBar';
import ChatWindown from './ChatWindown';

export default function ChatRoom() {
  return (
    <div>
      <Row>
        <Col span={6}><SideBar/></Col>
        <Col span={18}><ChatWindown/></Col>
      </Row>
    </div>
  )
}
